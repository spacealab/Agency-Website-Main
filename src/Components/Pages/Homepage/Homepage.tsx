import CallToAction from '../../CalltoAction/CallToAction.tsx'
import CardComponent from '../Price/CardComponent.tsx'
import Features from '../../../Features/Features.tsx'
import HeroSection from '../../HeroSection/HeroSection.tsx'
import Navbar from '../../Navigation/Navbar.tsx'
import React from 'react'
import Review from '../Review/review.tsx'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <CardComponent />
      <CallToAction />
      <Review />
    </>
  )
}

export default Homepage
