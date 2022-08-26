import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import './Header.module.scss';

function Header({ openMenu }) {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <div>
        <Link to="/" className="d-flex align-center">
          <img src="img/logo.png" alt="logo" width="40" height="40" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="subtitle opacity-5">Магазин лучших кроссовок</p>
          </div>
        </Link>

      </div>
      <ul className="d-flex">
        <li className="mr-20 cu-p d-flex align-center" onClick={openMenu} title="Открыть корзину">
          <img src="img/cart.svg" alt="Корзина" width="18" height="18" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p d-flex align-center" title="Закладки">
          <Link to="/favorites">
            <img src="img/heart.svg" alt="Закладки" width="18" height="18" />
          </Link>
        </li>
        <li className="cu-p d-flex align-center" title="Заказы">
          <Link to="/orders">
            <img src="img/person.svg" alt="Заказы" width="18" height="18" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;