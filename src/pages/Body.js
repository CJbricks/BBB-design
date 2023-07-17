import React from 'react'
import DevSection from './DevSection.js'
import Navbar from './Navbar.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Contact from './Contact.js'
import Carousel from './Carousel.js'

export default function Body() {
  return (
    <>
    <Navbar />
    <Header />
      <DevSection />
      {/* Carousel with web pages */}
      <Carousel />
      <Contact />
    <Footer />
    </>
  )
}
