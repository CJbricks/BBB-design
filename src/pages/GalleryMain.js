import { React } from 'react'
import { Flex, Stack, Container, Text, Heading, Highlight, Button, Box } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import gov from '../../public/images/gallery/tax-guy copy.jpg'
import ohsix from '../../public/images/gallery/ohsix copy.jpg'
import nights from '../../public/images/gallery/nights copy.jpg'
import offline from '../../public/images/gallery/offlineguy copy.jpg'
import Navbar from './Navbar.js'
import Footer from './Footer.js'


export default function GalleryMain() {
    const imageArr = [gov, ohsix, nights, offline];
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
          </Flex>
      </Stack>
    <Footer />
    </>
  )
}