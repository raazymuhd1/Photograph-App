import Head from 'next/head'
import Image from 'next/image'
import { Hero, About, Services, Portfolio, Testimonial, Newsletter } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.app}>
       <Hero />
       <About />
       <Services />
       <Portfolio />
       <Testimonial />
       <Newsletter />
    </div>
  )
}
