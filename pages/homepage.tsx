
import Contribute from '../components/pages/contribute/contribute';
import Testimonials from '../components/pages/home/testimonials';
import Hero from '../components/pages/home/hero';
import React from 'react';
import Partners from '../components/pages/Partners';

const HomePage = () =>  {
  return <>
        <Hero />
        <Partners />
        <Contribute/>
        <Testimonials />

  </>
}


export default HomePage
