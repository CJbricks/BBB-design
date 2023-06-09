import React from 'react'
import styles from '@/styles/Footer.module.css'
import { Box, Text, Image, SimpleGrid, Container, Spacer } from '@chakra-ui/react'
import Link from 'next/link'


export default function Footer() {
    return (
      <>
              <SimpleGrid columns={[1, 1, 4]} alignItems="center" justifyContent="center" bg="red.500" p={3} mt={['10px', '15px', '20px']}>
                  <Box width="50%" pl={50} mb={[6, 6, 0]}>
                    <Container>
                      <Link href='https://maps.google.com'>
                        <Text color='whiteAlpha.900'>
                          Visit us in person
                        </Text>
                        <Text color='whiteAlpha.900'>
                          303-229-3663
                        </Text>
                        <Text color='whiteAlpha.900'>
                        Location Icon
                        AUSTIN TX 78681
                        USA
                        <br />
                        
                        </Text>
                        
                      </Link>
                    </Container>
                  </Box>
                  <Box width="50%" pl={50} display="inline" mb={[6, 6, 0]}>
                    <Container>
                        <Text color='whiteAlpha.900'>
                        <Link href='https://www.instagram.com/oreo.blizman' target='_blank'>Instagram</Link>
                        <br />
                        <Link href='https://www.github.com/cjbricks' target='_blank'>Github</Link>
                        <br />
                        <Link href="./Blog" target="_blank">Blog</Link>
                        <br />
                        <Link href="https://www.cjchristian.com" target="_blank">Gallery Art</Link>
                        <br />
                        <Link href="https://google.com" target="_blank">Bot-Tester</Link>
                        <br />
                        <Link href="https://google.com" target="_blank">MG Body Mod</Link>
                        </Text>
                    </Container>
                  </Box>
                  <Box width="50%" pl={50} display="inline" mb={[6, 6, 0]}>
                    <Container>
                        <Text color='whiteAlpha.900'>
                        "Nov York"
                        
                        </Text>
                    </Container>
                  </Box>
                  <Box width="50%" pl={50} mb={[6, 6, 0]}>
                    <Text color='whiteAlpha.900'>
                    <Link href='https://www.earthbuddypet.com' target='_blank'>Earth Buddy Pet CBD</Link>
                        <br />
                    <Link href='https://www.happymonkeyiv.com' target='_blank'>Happy Monkey IV</Link>
                        <br />
                    <Link href='google.com' target="blank">Woofies K9</Link>
                        <br />
                    <Link href='https://www.daybreak-beta.vercel.app' target='_blank'>Cosmic Jail</Link>
                        <br />
                    <Link href='https://www.cjchristian.com' target='_blank'>Cj Christian Art</Link>
                        <br />
                    <Link href='https://www.bricks-ten.vercel.app' target='_blank'>Old Bricks Page</Link>
                      
                    </Text>
                  </Box>
                  
              </SimpleGrid>
              <Text textAlign='center' color='red.700' fontWeight='700' m={'2'}>Content property of Brick By Brick Design tm logo</Text>
         
      </>
    )
  }
  
