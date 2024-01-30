import React from 'react'
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">PRICING</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
    </div>
  )
}

export default Navbar