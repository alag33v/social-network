import React from 'react'
import style from '../../Users/Users.module.css'
import preloader from '../../../assets/images/preloader.svg'

const Preloader = (props) => {
  return <img className={style.preloader} src={preloader} alt=''/>
}

export default Preloader
