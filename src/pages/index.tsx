import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { About } from '../components/About'
import { Product } from '../components/Product'
import { Qualities } from '../components/Qualities'
import { Gallery } from '../components/Gallery'
import { Testimonials } from '../components/Testimonials'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coffe</title>
        <meta name="description" content="Coffe App" />
      </Head>
      <Header/> 
      <About/>
      <Product/>
      <Qualities/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
