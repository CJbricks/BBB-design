import React from 'react'
import { Grid, GridItem, Spacer, Text, Link, Image, Container } from '@chakra-ui/react'
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
              <Image src="/images/brands-people-0adHvNJu-Zo-unsplash.jpeg" alt="print-design-image"/>
                <Container textAlign='center'>
                    <Text color={'red.500'} fontWeight={'700'} fontSize={['18px', '24px', '30px']}>PRINT DESIGN</Text>
                </Container>
              <Image src="/images/print.jpg" alt="print-design"  mt={'10px'} />
               
            </GridItem>

            <GridItem colSpan={2} overflow='hidden'>
              <Container textAlign='center'>
                  <Text  position={'absolute'} color={'red.500'} fontWeight={'700'} fontSize={['28px', '32px', '48px']}>WEB DEV</Text>
              </Container>
                <Image src="/images/jackson-sophat-_t-l5FFH8VA-unsplash.jpeg" alt="web-design-image" />
                <Image src="/images/code.png" alt="web-design-image"  mt={'10px'} />
               
            </GridItem>

            <GridItem colSpan={2} >
              <Text position={'absolute'} color={'red.500'} fontWeight={'700'} fontSize={['28px', '32px', '48px']}>GRAPHIC DESIGN</Text>
                <Image src="/images/nick-adams-yTWq8n3-4k0-unsplash.jpeg" alt="graphic-design-image" />
            </GridItem>
         </Grid>
    </>
  )
}
