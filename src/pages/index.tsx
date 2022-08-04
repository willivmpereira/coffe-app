import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { About } from '../components/About'
import { Product } from '../components/Product'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Qualities } from '../components/Qualities'
import { Testimonials } from '../components/Testimonials'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'

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
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
