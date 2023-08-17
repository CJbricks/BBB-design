import React from 'react'
import DevSection from './DevSection.js'
import Navbar from './Navbar.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Contact from './Contact.js'
import Carousel from './Carousel.js'
import Design from './Design.js'
import Mobile from './Mobile'
import InfoCard from './InfoCard.js'

export default function Body() {
  return (
    <>
    <Navbar />
    <Header />
      <DevSection />
      <Design />
      <Mobile />
      <InfoCard />
      <Contact />
    <Footer />
    </>
  )
}
