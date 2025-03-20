// import { toast } from 'react-toastify'
import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Slider from './components/slider';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/Hero';
import RepairGadgets from './components/steps';
import WhyChooseUs from './components/Trust_Us';
import OurInsights from './components/insights';
import ExclusiveStores from './components/stores';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
const App = () => {
  return (
    <div className='relative md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <Slider/>
      <Hero/>
      <RepairGadgets/>
      <WhyChooseUs/>
      <Testimonials/> 
      <OurInsights/>
      <ExclusiveStores/>
      <Footer/>      
    </div>
  )
}

export default App