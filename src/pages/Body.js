import React from 'react'
import { Grid, GridItem, Spacer, Text, Link, Image } from '@chakra-ui/react'
import styles from '@/styles/Imagegrid.module.css'

export default function Body() {
  return (
    <>
        <Grid
            m={'50px'}
            h='600px'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={4}>
            <GridItem colSpan={4} bg='tomato'></GridItem>
            <GridItem colSpan={2} bg='papayawhip'></GridItem>
            <GridItem colSpan={2} bg='papayawhip'></GridItem>
            <GridItem colSpan={4} bg='tomato'></GridItem>
            
         </Grid>
         <Spacer />
         <Grid
            m={'50px'}
            h='200px'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}>
            <GridItem rowSpan={2} colSpan={1} >
              <Image src="/images/brands-people-0adHvNJu-Zo-unsplash.jpeg" alt="graphic-design-image"  />
              <Image src="/images/print.jpg" alt="print-design" className={styles.vertbox} />
            </GridItem>
            <GridItem colSpan={2} bg='papayawhip'>
              <Image src="/images/jackson-sophat-_t-l5FFH8VA-unsplash.jpeg" alt="web-design-image" />
            </GridItem>
            <GridItem colSpan={2} bg='papayawhip'>
              <Image src="/images/nick-adams-yTWq8n3-4k0-unsplash.jpeg" alt="print-design-image" />
            </GridItem>
            <GridItem colSpan={4} bg='papayawhip'>
              <Image src="/images/detail2.jpeg" alt="fine-art-image" />
            </GridItem>
         </Grid>
    </>
  )
}
