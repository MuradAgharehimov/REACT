import React from 'react'
import { Header } from '../../Components/Header'
import { Section } from '../../Components/Section'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <Section/>
    </div>
  )
}

export default Home