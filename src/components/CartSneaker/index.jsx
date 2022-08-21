import React from 'react';
import styles from './CartSneaker.module.scss'

function CartSneaker({ name, price, url, id}) {
  return (
    <div className={styles['cartItem']}>
      <div style={{
        backgroundImage: `url(${url})`,
      }} className={styles['cartItemImg']}>

      </div>
      <div className="mr-20 flex">
        <p className="mb-5">{name}</p>
        <b> {price} руб.</b>
      </div>
      <img className={styles['removeBtn']} src="/img/btn-remove.svg" alt="Remove" title="Удалить" />
    </div>
    );
}

export default CartSneaker;