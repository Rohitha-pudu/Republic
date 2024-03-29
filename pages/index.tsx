import CardWhole from '@/components/CardWhole'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import React from 'react'

const Home = () => {
  return (
    <div className='overflow-hidden'>
       <NavBar/>
       <Hero/>
       <CardWhole/>
       <Footer/>
    </div>
   
  )
}

export default Home
