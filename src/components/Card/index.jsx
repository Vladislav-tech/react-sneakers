import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import styles from './Card.module.scss';


function Card({ title, price, url, id, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, url, id});
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles['card']}>
      <img className="cu-p" 
        src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} 
        alt="favorite" 
        onClick={() => setIsFavorite(!isFavorite)}
        title={isFavorite ? 'Удалить из закладок' : 'Добавить в закладки'}
        />
      <img width="133" height="112" src={url} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className="cu-p" onClick={onClickPlus} 
          width="32" 
          height="32" 
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="add" 
          title={isAdded ? 'Удалить из корзины' : 'Добавить в корзину'}
          />
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;