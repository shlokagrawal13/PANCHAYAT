import React from 'react'
import LandingPage from '../components/LandingPage'
import PanchayatiRajOverview from '../components/PanchayatiRajOverview'
import OurMember from '../components/OurMember'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Banner from '../components/banner'





function Home() { 
  return (
    <div className='overflow-hidden'>
    <Navbar/>
      <LandingPage/>
       <Banner/>
      <PanchayatiRajOverview/> 
      <OurMember/>
      <Gallery/>
    <Footer/>
    </div>
  )
}

export default Home