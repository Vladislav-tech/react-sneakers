import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import axios from "axios";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

import { AppContext } from './context';
import Orders from "./pages/Orders";

export const transformQuerySearch = (str) => {
  return str.trim().toLowerCase();
};

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [favoriteSneakers, setFavoriteSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
        axios.get('https://62fe178aa85c52ee482f82b0.mockapi.io/cart'),
        axios.get('https://62fe178aa85c52ee482f82b0.mockapi.io/favorites'),
        axios.get('https://62fe178aa85c52ee482f82b0.mockapi.io/items')
      ]);
      
      setCartSneakers(cartResponse.data);
      setFavoriteSneakers(favoritesResponse.data);
      setSneakers(itemsResponse.data);

      setIsLoading(false);
    }

    fetchData();
  }, []);

  const onAddToCart = async (addedSneaker) => {
    if (cartSneakers.find(cartSneaker => +cartSneaker.parentId === +addedSneaker.id)) {
      axios.delete(`https://62fe178aa85c52ee482f82b0.mockapi.io/cart/${addedSneaker.id}`);
      setCartSneakers(prevData => prevData.filter(item => +item.id !== +addedSneaker.id));
    } else {
      axios.post('https://62fe178aa85c52ee482f82b0.mockapi.io/cart', addedSneaker)
      setCartSneakers(prevData => [...prevData, addedSneaker])
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62fe178aa85c52ee482f82b0.mockapi.io/cart/${id}`);
    setCartSneakers(prevData => prevData.filter(item => +item.id !== +id))
  };

  const onChangeSearchInput = (evt) => {
    const value = evt.target.value;
    setSearchValue(value)
  };

  const onAddToFavorite = async (favoriteSneaker) => {
    try {
      if (favoriteSneakers.find(item => +item.id === +favoriteSneaker.id)) {
        axios.delete(`https://62fe178aa85c52ee482f82b0.mockapi.io/favorites/${favoriteSneaker.id}`);
        setFavoriteSneakers((prevData) => prevData.filter(item => +item.id !== favoriteSneaker.id))
      } else {
        const { data } = await axios.post('https://62fe178aa85c52ee482f82b0.mockapi.io/favorites', favoriteSneaker);
        setFavoriteSneakers((prevData) => [...prevData, data]);
      }
    } catch (e) {
      alert('Не удалось добавить в закладки')
    }

  };



  const isItemAdded = (id) => {
    return cartSneakers.some(cartSneaker => +cartSneaker.parentId === +id);
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ 
        cartSneakers, sneakers, 
        favoriteSneakers, isItemAdded, 
        onAddToFavorite, setCartOpened,
        setCartSneakers,
        onAddToCart
        }}>
        <div className="wrapper clear">
          <Drawer addedSneakers={cartSneakers} closeMenu={() => setCartOpened(false)} onRemoveItem={onRemoveItem} opened={cartOpened}/>
          <Header cartOpened={cartOpened} openMenu={() => setCartOpened(true)} />

          <Routes>
            <Route path="/" element={
              <Home
                sneakers={sneakers}
                searchValue={searchValue}
                onAddToCart={onAddToCart}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                transformQuerySearch={transformQuerySearch}
                setSearchValue={setSearchValue}
                cartSneakers={cartSneakers}
                isLoading={isLoading}
              />}
            />
            <Route path="/favorites" element={
              <Favorites/>
            } />
            <Route path="/orders" element={<Orders/>}/>
          </Routes>
        </div>
      </AppContext.Provider>

    </BrowserRouter>

  );
}

export default App;
