import React from 'react'
import Slider from '../components/Slider';
import Hero from '../components/Hero';
import RepairGadgets from '../components/steps';
import WhyChooseUs from '../components/Trust_Us';
import OurInsights from '../components/insights';
import ExclusiveStores from '../components/stores';
import Testimonials from '../components/testimonials';
function Landing_Page() {
  return (
    <div>
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