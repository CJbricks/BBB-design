import React from 'react'
import { Grid, GridItem, Spacer, Text, Link, Image, Container } from '@chakra-ui/react'
import styles from '@/styles/Imagegrid.module.css'
import SGrid from './SGrid.js'
import FormGrid from './FormGrid.js'
import Loom from './Loom.js'
import DevSection from './DevSection.js'
import BotAd from './BotAd.js'

export default function Body() {
  return (
    <>
      <DevSection />
      <BotAd />
      <FormGrid />
      <Loom />
      
    </>
  )
}
