import React from 'react'
import Slider from '../components/slider';
import Hero from '../components/Hero';
import RepairGadgets from '../components/steps';
import WhyChooseUs from '../components/Trust_Us';
import OurInsights from '../components/insights';
import ExclusiveStores from '../components/stores';
import Testimonials from '../components/testimonials';
import { Helmet } from 'react-helmet-async'
function Landing_Page() {
  return (
    <div>
       {/* SEO Meta Tags */}
       <Helmet>
        <title>NumLock IT Solutions - Best Laptop Service Center</title>
        <meta name="description" content="Fast, reliable laptop repair services at NumLock IT Solutions. Book now!" />
        <meta name="keywords" content="laptop service, NumLock IT Solutions, laptop repair, computer service, IT support" />
        <meta property="og:title" content="NumLock IT Solutions - Laptop Service Center" />
        <meta property="og:description" content="Professional laptop repair services you can trust. Book today!" />
        <meta property="og:image" content="https://numlockitsolutions.co.in/assets/Numlock-CYus4VHR.png" />
        <meta property="og:url" content="https://numlockitsolutions.co.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NumLock IT Solutions - Laptop Service Center" />
        <meta name="twitter:description" content="Professional laptop repair services you can trust. Book today!" />
        <meta name="twitter:image" content="https://numlockitsolutions.co.in/assets/Numlock-CYus4VHR.png" />
      </Helmet>
      <Slider/>
      <Hero/>
      <RepairGadgets/>
      <WhyChooseUs/>
      <Testimonials/> 
      <OurInsights/>
      <ExclusiveStores/>
    </div>
  )
}

export default Landing_Page