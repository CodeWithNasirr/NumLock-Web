import React from 'react'
import Slider from '../components/slider';
import Hero from '../components/Hero';
import RepairGadgets from '../components/steps';
import WhyChooseUs from '../components/Trust_Us';
import OurInsights from '../components/insights';
import ExclusiveStores from '../components/stores';
import Testimonials from '../components/testimonials';
import { Helmet } from 'react-helmet-async'
import SEOAccordion from './SeoAordion';
import FeaturedCourses from '../components/FeaturedCourses';
function Landing_Page() {
  return (
    <div>
      <SEOAccordion/>
       {/* SEO Meta Tags */}
       <Helmet>
        <title>Laptop Repair in Bhubaneswar | NumLock IT Solutions 💻 Fast Service</title>
        <meta name="description" content="Need urgent laptop repair in Bhubaneswar? NumLock IT Solutions offers fast, reliable service for Dell, HP, Apple, Lenovo & more. Call now!" />
        <meta name="keywords" content="laptop service, NumLock IT Solutions, laptop repair, computer service, IT support,Best laptop repair service in bhubaneswar by Numlock IT Solutions. Apple, Dell, HP, Lenovo, Acer,Laptop repairing near me,Laptop repair center near me,Laptop service center near me.Apple, Dell, HP, Lenovo, Acer,Laptop repairing near me,Laptop repair center near me,Laptop service center near me." />
        <meta property="og:title" content="NumLock IT Solutions - Laptop Service Center" />
        <meta property="og:description" content="Professional laptop repair services you can trust. Book today!" />
        <meta property="og:image" content="https://numlockitsolutions.co.in/numlock1.png" />
        <meta property="og:url" content="https://numlockitsolutions.co.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NumLock IT Solutions - Laptop Service Center" />
        <meta name="twitter:description" content="Professional laptop repair services you can trust. Book today!" />
        <meta name="twitter:image" content="https://numlockitsolutions.co.in/numlock1.png" />
      </Helmet>
      <Slider/>
      <FeaturedCourses/>
      {/* <Hero/> */}
      <RepairGadgets/>
      <WhyChooseUs/>
      <Testimonials/> 
      <OurInsights/>
      <ExclusiveStores/>
      
    </div>
  )
}

export default Landing_Page