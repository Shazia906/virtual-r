import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection';
import FeaturesSection from './Components/FeaturesSection';
import WorkFlow from './Components/WorkFlow';
import PriceSection from './Components/PriceSection/index';
import Testimonials from './Components/TestimonialSection';
import Fotter from './Components/Footer';

export const App = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <FeaturesSection/>
    <WorkFlow/>
    <PriceSection/>
    <Testimonials/>
    <Fotter/>
    </>
  )
}

export default App;
