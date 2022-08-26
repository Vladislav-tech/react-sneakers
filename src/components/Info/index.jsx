import React, { useContext } from 'react'
import { AppContext } from '../../context';
import styles from './Info.module.scss'

const Info = ({ 
  title, 
  image, 
  description, 
  btnWidth = '100%', 
  imgWidth="120px", 
}) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={imgWidth} src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button style={{width: btnWidth}} onClick={() => setCartOpened(false)} className={styles['greenButton']}>
        <img src="img/arrow.svg" alt="Arrow" style={{ transform: 'rotate(-180deg)', marginLeft: '30px' }} />
        Вернуться назад
      </button>
    </div>

  )
}

export default Info;