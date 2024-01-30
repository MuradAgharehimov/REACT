import React from 'react'
import { Button } from '../Button'
import styles from './section.module.css'
const Section = () => {
  return (
    <div className={styles.section}>
      <div className={styles.pagecontainer}>
        <h1>GET PAGE DONE</h1>
        <h3>lt take efforts</h3>
        <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
        <Button wth="250px" text='DOWNLOAD THIS THEME NOW!'/>
      </div>
    </div>
  )
}

export default Section