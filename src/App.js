import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import axios from "axios";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [favoriteSneakers, setFavoriteSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://62fe178aa85c52ee482f82b0.mockapi.io/items')
      .then(response => setSneakers(response.data))
    axios.get('https://62fe178aa85c52ee482f82b0.mockapi.io/cart')
      .then(response => setCartSneakers(response.data))
    axios.get('https://62fe178aa85c52ee482f82b0.mockapi.io/favorites')
      .then(response => setFavoriteSneakers(response.data))
  }, []);

  const onAddToCart = (addedSneaker) => {
    axios.post('https://62fe178aa85c52ee482f82b0.mockapi.io/cart', addedSneaker)
    setCartSneakers(prevData => [...prevData, addedSneaker])
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62fe178aa85c52ee482f82b0.mockapi.io/cart/${id}`);
    setCartSneakers(prevData => prevData.filter(item => item.id !== id))
  };

  const onChangeSearchInput = (evt) => {
    const value = evt.target.value;
    setSearchValue(value)
  };

  const onAddToFavorite = async (favoriteSneaker) => {
    try {
      if (favoriteSneakers.find(item => item.id === favoriteSneaker.id)) {
        axios.delete(`https://62fe178aa85c52ee482f82b0.mockapi.io/favorites/${favoriteSneaker.id}`);
      } else {
        // axios.post('https://62fe178aa85c52ee482f82b0.mockapi.io/favorites', favoriteSneaker)
        const { data } = await axios.post('https://62fe178aa85c52ee482f82b0.mockapi.io/favorites', favoriteSneaker);
        setFavoriteSneakers((prevData) => [...prevData, data]);
      }
    } catch (e) {
      alert('Не удалось добавить в закладки')
    }

  };

  const transformQuerySearch = (str) => {
    return str.trim().toLowerCase();
  };

  return (
    <BrowserRouter>
      <div className="wrapper clear">
        {cartOpened && <Drawer addedSneakers={cartSneakers} closeMenu={() => setCartOpened(false)} onRemoveItem={onRemoveItem} />}
        <Header cartOpened={cartOpened} openMenu={() => setCartOpened(true)} />

        <Routes>
          <Route path="/" element={sneakers.length ?
            <Home
              sneakers={sneakers}
              searchValue={searchValue}
              onAddToCart={onAddToCart}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              transformQuerySearch={transformQuerySearch}
              setSearchValue={setSearchValue}
            /> : null}
          />
          <Route path="/favorites" element={
            <Favorites
              favoriteSneakers={favoriteSneakers}
              onAddToFavorite={onAddToFavorite}
            />
          } />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
