import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const data = [];

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://62fe178aa85c52ee482f82b0.mockapi.io/items')
      .then(response => response.json())
      .then(json => setSneakers(json))
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer cartOpened={cartOpened} setCartOpened={setCartOpened} />}
      <Header cartOpened={cartOpened} setCartOpened={setCartOpened}/>

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <div className="favorite">
              <img src="/img/search.svg" alt="Search" />
            </div>
            <input type="text" placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {sneakers.map(item => (
          <Card 
            key={item.id} 
            price={item.price} 
            title={item.name} 
            url={item.url}
            onPlus={() => console.log('Добавили в корзину')}
            onFavorite={() => console.log('Добавили в закладки')}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
