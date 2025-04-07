// import { toast } from 'react-toastify'
import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Landing_Page from './pages/Landing_Page';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './pages/About';
import FAQAccordion from './pages/FAQ';
import Footer from './components/footer';
import WhyChoose from './pages/Why';
import ContactUs from './pages/contact';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/Policy';
const App = () => {
  return (
    <div className='relative md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Routes>
      <Route path='/' element={<Landing_Page/>}/>
      <Route path='/home' element={<Landing_Page/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/Faq' element={<FAQAccordion/>}/>
      <Route path='/Why' element={<WhyChoose/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>

      </Routes>
      <Footer/>      
    </div>
  )
}

export default App