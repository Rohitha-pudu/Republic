import Articles from '@/components/Articles'
import CardWhole from '@/components/CardWhole'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import History from '@/components/History'
import NavBar from '@/components/NavBar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Articles/> 
       <Footer/>
       
    </div>
   
  )
}

export default Home