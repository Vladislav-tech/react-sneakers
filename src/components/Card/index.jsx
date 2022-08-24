import React from "react";
import { useState } from "react";
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';


function Card({
  title,
  price,
  url,
  id,
  onPlus,
  onAddToFavorite,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, price, url, id });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onAddToFavorite({ title, price, url, id })
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles['card']}>
      {loading ? (
        <ContentLoader
          rtl
          speed={2}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <img className="cu-p"
            src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
            alt="favorite"
            onClick={onClickFavorite}
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
        </>
      )}

    </div>
  );
}

export default Card;