import React from 'react'
import { Grid, GridItem, Spacer, Text, Link, Image, Container } from '@chakra-ui/react'
import styles from '@/styles/Imagegrid.module.css'

export default function Grid() {
  return (
    <>
    <Grid
            columns={[1, 1, 3]}
            mt={'200px'}
            mb={'50'}
            ml={'20px'}
            mr={'20px'}
            h='200px'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}>
            
            <GridItem rowSpan={2} colSpan={1} >
              <Image src="/images/print-two.jpg" alt="print-design-image"className={styles.scale} />
                <Container textAlign='center'>
                    <Text color={'red.500'} fontWeight={'700'} fontSize={['12px', '24px', '30px']}>PRINT DESIGN</Text>
                </Container>
              <Image src="/images/print.jpg" alt="print-design"  mt={['2px', '2px', '2px']} className={styles.scale} />
               
            </GridItem>

            <GridItem colSpan={2}  >
              <Container textAlign='center'>
                  <Text  position={'absolute'} color={'red.500'} fontWeight={'700'} fontSize={['12px', '32px', '48px']}>WEB DEV</Text>
              </Container>
                <Image src="/images/jackson-sophat-_t-l5FFH8VA-unsplash.jpeg" alt="web-design-image" className={styles.scale} />
                <Image src="/images/brands-people-0adHvNJu-Zo-unsplash.jpeg" alt="web-design-image"  mt={'10px'} className={styles.scale} />
               
            </GridItem>

            <GridItem colSpan={2} >
              <Container alignItems={'center'} justifyContent={'center'} textAlign={'center'} position={'absolute'} mt={'100px'}>
                <Text color={'red.500'} fontWeight={'700'} fontSize={['10px', '32px', '48px']}>DIGITAL DESIGN</Text>
              </Container>
                <Image src="/images/nick-adams-yTWq8n3-4k0-unsplash.jpeg" alt="graphic-design-image" className={styles.scale}/>
            </GridItem>
         </Grid>
         </>
  )
}
