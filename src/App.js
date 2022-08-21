import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://62fe178aa85c52ee482f82b0.mockapi.io/items')
      .then(response => response.json())
      .then(json => setSneakers(json))
  }, []);

  const onAddToCart = (addedSneaker) => {
    setCartSneakers(prevData => [...prevData, addedSneaker])
  };

  const onChangeSearchInput = (evt) => {
    const value = evt.target.value;
    setSearchValue(value)
  };

  const transformQuerySearch = (str) => {
    return str.trim().toLowerCase();
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer addedSneakers={cartSneakers} closeMenu={() => setCartOpened(false)} />}
      <Header cartOpened={cartOpened} openMenu={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>{searchValue.trim() || 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <div className="favorite">
              <img src="/img/search.svg" alt="Search" />
            </div>
            <input value={searchValue} onChange={onChangeSearchInput} type="text" placeholder="Поиск..." />
            {
              searchValue && <img 
                onClick={() => setSearchValue('')} 
                title="Очистить" 
                className="clearBtn cu-p" 
                src="/img/btn-remove.svg" 
                alt="Clear" />
            }

          </div>
        </div>
        <div className="d-flex flex-wrap">
          {sneakers.filter(item => transformQuerySearch(item.title).includes(transformQuerySearch(searchValue))).map(sneaker => (
            <Card
              key={sneaker.id}
              price={sneaker.price}
              title={sneaker.title}
              url={sneaker.url}
              id={sneaker.id}
              onPlus={(addedSneaker) => onAddToCart(addedSneaker)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
