import React from 'react'
import FlatMenu from './FlatMenu.js'
import { Image, Text, Box, SimpleGrid, Spacer, Center, Container } from '@chakra-ui/react'

export default function Header() {
  return (
    <>

      <Box
            height={'full'}
            width={'full'}
            align={'center'}
            justify={'center'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            bg={'brand.900'}
            p={10}
            >

            <Image src='/images/brick-logo-stack.png' alt="BBB-logo-banner-image" />
        </Box>
    </>
  )
}
