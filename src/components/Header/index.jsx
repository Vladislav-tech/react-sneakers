import React from 'react';
import styles from './Header.module.scss';

function Header({ openMenu }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.png" alt="logo" width="40" height="40" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="subtitle">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p d-flex align-center" onClick={openMenu} title="Открыть корзину">
          <img src="/img/cart.svg" alt="cart" width="18" height="18" />
          <span>1205 руб.</span>
        </li>
        <li className="d-flex align-center">
          <img src="/img/person.svg" alt="person" width="18" height="18" />
        </li>
      </ul>
    </header>
  );
}

export default Header;