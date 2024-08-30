import Features from '../../../Features/Features.tsx'
import HeroSection from '../../HeroSection/HeroSection.tsx'
import Navbar from '../../Navigation/Navbar.tsx'
import React from 'react'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
    </>
  )
}

export default Homepage
