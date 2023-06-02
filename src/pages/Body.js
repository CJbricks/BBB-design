import React from 'react'
import { Grid, GridItem, Spacer, Text, Link } from '@chakra-ui/react'
import styles from '@/styles/Imagegrid.module.css'

export default function Body() {
  return (
    <>
        <Grid
            m={'50px'}
            h='600px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}>
            <GridItem rowSpan={2} colSpan={1} bg='tomato'></GridItem>
            <GridItem colSpan={2} bg='papayawhip'></GridItem>
            <GridItem colSpan={2} bg='papayawhip'></GridItem>
            <GridItem colSpan={4} bg='tomato'></GridItem>
            
         </Grid>
         <Spacer />
         <Grid
            m={'50px'}
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}>
            <GridItem rowSpan={2} colSpan={1} bg='tomato'></GridItem>
            <GridItem colSpan={2} bg='papayawhip'></GridItem>
            <GridItem colSpan={2} bg='papayawhip'></GridItem>
            <GridItem colSpan={4} bg='tomato'></GridItem>
            
         </Grid>
    </>
  )
}
