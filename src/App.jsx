import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Landing_Page from './pages/Landing_Page';
import AboutUs from './pages/About';
import FAQAccordion from './pages/FAQ';
import Footer from './components/footer';
import WhyChoose from './pages/Why';
import ContactUs from './pages/contact';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/Policy';
import CancellationAndRefund from './pages/CancellationAndRefund';
import ShippingAndDelivery from './pages/ShippingAndDelivery';
import TermsAndConditions from './pages/TermsAndConditions';
import LaptopServiceCenter from './pages/LaptopServiceCenter';
// brand pages here
import DellLaptopService from './brand_pages/DellLaptopService';
import HpLaptopServiceCenter from './brand_pages/HpLaptopServiceCenter';
import LenovoLaptopService from './brand_pages/LenovoLaptopService';
import AppleLaptopService from './brand_pages/AppleLaptopService';
import AcerLaptopService from './brand_pages/AcerLaptopService';
import AssusLaptopService from './brand_pages/AssusLaptopService';
import ProjectorService from './brand_pages/ProjectorService';
import SamsungLaptopService from './brand_pages/SamsungLaptopService';
import TosibaLaptopService from './brand_pages/TosibaLaptopService';
import PrinterService from './brand_pages/PrinterService';
import DataRecoveryService from './brand_pages/DataRecoveryService';
// E_CART AREA
import Collection from './pages/Collection';
import Product from './pages/Product';

// Gptx
import ZxFashion from './GPTX/zxfashion';

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
      <Route path='/refund-policy' element={<CancellationAndRefund/>}/>
      <Route path='/shipping-policy' element={<ShippingAndDelivery/>}/>
      <Route path='/terms-policy' element={<TermsAndConditions/>}/> 
      <Route path='/laptop-repair' element={<LaptopServiceCenter/>}/>
      {/* laptop services... here */}
      <Route path='/Dell-laptop-service' element={<DellLaptopService/>}/>
      <Route path='/Hp-laptop-service' element={<HpLaptopServiceCenter/>}/>
      <Route path='/Lenovo-laptop-service' element={<LenovoLaptopService/>}/>
      <Route path='/Apple-laptop-service' element={<AppleLaptopService/>}/>
      <Route path='/Acer-laptop-service' element={<AcerLaptopService/>}/>
      <Route path='/Assus-laptop-service' element={<AssusLaptopService/>}/>
      <Route path='/Samsung-laptop-service' element={<SamsungLaptopService/>}/>
      <Route path='/Toshiba-laptop-service' element={<TosibaLaptopService/>}/>
      <Route path='/Projectors-laptop-service' element={<ProjectorService/>}/>  
      <Route path='/Printer-service' element={<PrinterService/>}/>
      <Route path='/Datarecover-service' element={<DataRecoveryService/>}/>
      {/* E-cart sevice */}
      <Route path='/refurbished' element={<Collection />} />
      <Route path='/product/:productId' element={<Product />} />
      {/* Gptx pages */}
      <Route path='/zxfashion' element={<ZxFashion />} />

      </Routes>
      <Footer/>      
    </div>
  )
}

export default App