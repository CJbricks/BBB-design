import { React } from 'react'
import { Flex, Stack, Container, Text, Heading, Highlight, Button, Box, Link } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import gov from '../../public/images/gallery/tax-guy copy.jpg'
import ohsix from '../../public/images/gallery/ohsix copy.jpg'
import nights from '../../public/images/gallery/nights copy.jpg'
import offline from '../../public/images/gallery/offlineguy copy.jpg'
import dad from '../../public/images/dad.jpg'
import npc from '../../public/images/npc.jpg'
import shed from '../../public/images/shed.jpg'
import stocks from '../../public/images/stocks.jpg'
import trash from '../../public/images/trashman.jpg'
import Navbar from './Navbar.js'
import Footer from './Footer.js'


export default function GalleryMain() {
    const imageArr = [gov, ohsix, nights, offline, dad, npc, shed, stocks, trash];
  return (
    <>
    <Navbar />
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
          <Flex flex={1} wrap={'wrap'} align={'center'} justify={'center'} width={'full'} height={'full'} m={2}>
              { imageArr.map((image) => (
                  <Image 
                    key="image"
                    src={image}
                    width={380}
                    heigth={'auto'}
                    alt="archived-image" 
                    className={styles.map} 
                    />
                  ))
              }
            
          </Flex>
      </Stack>
      <Stack align={'center'} mb={10}>
      <Link href='https://daybreak-beta.vercel.app' target='_blank'>
              <Button
                  mt={8}
                colorScheme={'red'}
                bg={'red.400'}
                rounded={'full'}
                _hover={{
                  bg: 'red.500',
                }}>
                See More
              </Button>
            </Link>
      </Stack>
    <Footer />
    </>
  )
}