import React from "react";
import PropTypes from 'prop-types';
import styles from './Card.module.scss';


function Card({ title, price, url}) {
  return (
    <div className={styles['card']}>
      <img className="cu-p" src="/img/heart-unliked.svg" alt="unliked" />
      <img width="133" height="112" src={url} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button">
          <img width="11" height="11" src="/img/plus.svg" alt="add" />
        </button>
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