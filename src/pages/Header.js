import React from 'react'
import FlatMenu from './FlatMenu.js'
import { Image, Text, Box, SimpleGrid, Spacer, Link, GridItem, Container } from '@chakra-ui/react'

export default function () {
  return (
    <>
        <SimpleGrid columns={[1, 2, 2]} justifyContent={'center'} alignItems={'center'} >
            <Box bg={'red.500'} opacity={2} width="50%" boxSize={['240px', '300px', '800px']} overflow={'hidden'}>

                    <Image src='/images/bbb-logo.png'
                     alt="header-image-logo"
                      />
                
            </Box>
            <Box bg={'whiteAlpha.200'} width="50%">
                <Container>
                    <FlatMenu />
                </Container>
            </Box>
        </SimpleGrid>
    </>
  )
}
