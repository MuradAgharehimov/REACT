import React from 'react'
import styles from './button.module.css'
const Button = ({text, wth}) => {
  return (
    <button style={{width:wth}} className={styles.buttonx}>{text}</button>
  )
}

export default Button