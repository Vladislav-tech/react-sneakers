import React, { useContext } from 'react'
import { AppContext } from '../../context';
import styles from './Info.module.scss'

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className={styles['greenButton']}>
        <img src="/img/arrow.svg" alt="Arrow" style={{ transform: 'rotate(-180deg)', marginLeft: '30px' }} />
        Вернуться назад
      </button>
    </div>

  )
}

export default Info;