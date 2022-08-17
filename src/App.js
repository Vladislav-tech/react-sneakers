function App() {
  return (
    <div className="wrapper clear">

      <div style={{
        display: 'none',
      }} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина
            <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />

          </h2>
          

          <div className="items">
            <div className="cartItem d-flex align-center mb-30">
              <div style={{
                backgroundImage: 'url(/img/sneakers/1.jpg)'
              }} className="cartItemImg">

              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b> 12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cartItem d-flex align-center">
              <div style={{
                backgroundImage: 'url(/img/sneakers/1.jpg)'
              }} className="cartItemImg">

              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b> 12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>          
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
             <img src="/img/arrow.svg" alt="arrow" />
            </button>          
          </div>


        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" alt="logo" width="40" height="40"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="subtitle">Магазин лучших кроссовок</p>      
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" alt="cart" width="18" height="18" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/person.svg" alt="person" width="18" height="18" />
          </li>
        </ul>        
      </header>

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
        <div className="d-flex">
          <div className="card">
            <img src="/img/heart-liked.svg" alt="unliked" />
            <img width="133" height="112" src="/img/sneakers/1.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width="11" height="11" src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width="11" height="11" src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/3.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 499 руб..</b>
              </div>
              <button className="button">
                <img width="11" height="11" src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/4.jpg" alt="Sneakers" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб..</b>
              </div>
              <button className="button">
                <img width="11" height="11" src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>          
        </div>

      </div>
    </div>
  );
}

export default App;
