import { React } from 'react'
import { Flex, Stack, Container, Text, Heading, Highlight, Button, Box } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import gov from '../../public/Images/gallery/tax-guy copy.jpg'
import ohsix from '../../public/Images/gallery/ohsix copy.jpg'
import nights from '../../public/Images/gallery/nights copy.jpg'
import offline from '../../public/Images/gallery/offlineguy copy.jpg'


export default function GalleryMain() {
    const imageArr = [gov, ohsix, nights, offline];
  return (
    <>
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
    </>
  )
}