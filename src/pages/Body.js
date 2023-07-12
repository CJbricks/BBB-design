import React from 'react'
import { Grid, GridItem, Spacer, Text, Link, Image, Container } from '@chakra-ui/react'
import styles from '@/styles/Imagegrid.module.css'
import SGrid from './SGrid.js'
import FormGrid from './FormGrid.js'
import Loom from './Loom.js'
import DevSection from './DevSection.js'
import BotAd from './BotAd.js'
import Programs from './Programs.js'
import Navbar from './Navbar.js'
import Header from './Header.js'
import Footer from './Footer.js'
import GalleryMain from './GalleryMain.js'

export default function Body() {
  return (
    <>
    <Navbar />
    <Header />
      <DevSection />
      {/* Carousel with web pages */}
      <Programs />
      <BotAd />
      <GalleryMain />
      <Loom />
    <Footer />
    </>
  )
}
