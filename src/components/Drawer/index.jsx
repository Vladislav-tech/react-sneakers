import React from "react";
import CartSneaker from "../CartSneaker";
import styles from './Drawer.module.scss';

function Drawer({ closeMenu, addedSneakers = [] }) {
  return (
    <div className={styles['overlay']}>
      <div className={styles['drawer']}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img title="Закрыть" className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={closeMenu} />
        </h2>

        <div className={styles['items']}>
          {addedSneakers.map(addedSneaker => (
            <CartSneaker 
              price={addedSneaker.price} 
              name={addedSneaker.title} 
              url={addedSneaker.url}
              key={addedSneaker.id}
              id={addedSneaker.id}
            />
          ))}
        </div>

        <div className={styles['cartTotalBlock']}>
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
          <button className={styles['greenButton']}>
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>


      </div>
    </div>
  );
}

export default Drawer;