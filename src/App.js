import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

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
      {cartOpened && <Drawer cartOpened={cartOpened} closeMenu={() => setCartOpened(false)} />}
      <Header cartOpened={cartOpened} openMenu={() => setCartOpened(true)}/>

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
          {sneakers.map(sneaker => (
          <Card 
            key={sneaker.id} 
            price={sneaker.price} 
            title={sneaker.name} 
            url={sneaker.url}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
