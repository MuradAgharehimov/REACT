import React from 'react'
import { Logo } from '../Logo'
import { Navbar } from '../Navbar'
import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.peterna}>
            <Logo/>
            <Navbar/>
        </div>
    </div>
  )
}

export default Header