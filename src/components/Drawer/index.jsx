import React from "react";
import styles from './Drawer.module.scss';

function Drawer({ setCartOpened, cartOpened }) {
  return (
    <div className={styles['overlay']}>
      <div className={styles['drawer']}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img title="Закрыть" className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={() => setCartOpened(!cartOpened)} />

        </h2>

        <div className={styles['items']}>
          <div className={styles['cartItem']}>
            <div style={{
              backgroundImage: 'url(/img/sneakers/1.jpg)'
            }} className={styles['cartItemImg']}>

            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b> 12 999 руб.</b>
            </div>
            <img className={styles['removeBtn']} src="/img/btn-remove.svg" alt="Remove" title="Удалить" />
          </div>

          <div className={styles['cartItem']}>
            <div style={{
              backgroundImage: 'url(/img/sneakers/1.jpg)'
            }} className={styles['cartItemImg']}>

            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b> 12 999 руб.</b>
            </div>
            <img className={styles['removeBtn']} src="/img/btn-remove.svg" alt="Remove" title="Удалить"/>
          </div>
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