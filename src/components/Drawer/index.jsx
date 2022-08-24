import React from "react";
import CartSneaker from "../CartSneaker";
import styles from './Drawer.module.scss';

function Drawer({ closeMenu, onRemoveItem, addedSneakers = [] }) {
  return (
    <div className={styles['overlay']}>
      <div className={styles['drawer']}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img title="Закрыть" className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={closeMenu} />
        </h2>
        {addedSneakers.length ? (
          <>
            <div className={styles['items']}>
              {addedSneakers.map((addedSneaker, index) => (
                <CartSneaker
                  price={addedSneaker.price}
                  name={addedSneaker.title}
                  url={addedSneaker.url}
                  id={addedSneaker.id}
                  onRemoveItem={onRemoveItem}
                  key={index}
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
          </>
        ) : (
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
              <h2>Корзина пустая</h2>
              <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={closeMenu} className={styles['greenButton']}>
                <img src="/img/arrow.svg" alt="Arrow" style={{transform: 'rotate(-180deg)', marginLeft: '30px'}}/>
                Вернуться назад
              </button>
            </div>
        )}



      </div>
    </div>
  );
}

export default Drawer;