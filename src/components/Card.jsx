import React from "react";

function Card(props) {
  return (
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
  );
}

export default Card;