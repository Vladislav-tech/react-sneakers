import axios from "axios";
import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";
import CartSneaker from "../CartSneaker";
import Info from "../Info";
import styles from './Drawer.module.scss';

const delay = () => new Promise((resolve) => setTimeout(resolve, 350));

function Drawer({ closeMenu, onRemoveItem, addedSneakers = [], opened }) {

  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cartSneakers, setCartSneakers, totalPrice } = useCart();
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://62fe178aa85c52ee482f82b0.mockapi.io/orders', {
        items: cartSneakers,
      });
      setOrderId(data.id)
      setIsOrderCompleted(true);
      setCartSneakers([]);

      for (let i = 0; i < cartSneakers.length; i+=1) {
        const element = cartSneakers[i];
        await axios.delete('https://62fe178aa85c52ee482f82b0.mockapi.io/cart/' + element.id)
        await delay();
      }

    } catch(e) {
      alert('Не удалось создать заказ')
    }
    setIsLoading(false);
  };
  console.log(opened)
  return (
    <div className={`${styles['overlay']} ${opened ? styles['overlay-visible'] : ''}`}>
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
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100 * 5).toFixed(2)} руб.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className={styles['greenButton']}>
                Оформить заказ
                <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={!isOrderCompleted ? "Корзина пустая" : "Заказ оформлен"}
            image={!isOrderCompleted ? "/img/empty-cart.jpg" : "/img/complete-order.jpg"}
            description={!isOrderCompleted ? "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ." :`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
          />
        )}



      </div>
    </div>
  );
}

export default Drawer;