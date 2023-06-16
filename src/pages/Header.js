import React from 'react'
import FlatMenu from './FlatMenu.js'
import { Image, Text, Box, SimpleGrid, Spacer, Center, Container } from '@chakra-ui/react'

export default function () {
  return (
    <>
      <header>
        <SimpleGrid columns={[1, 1, 2]} justifyContent={'center'} alignItems={'center'} bg={"f2f2f2"} mt={[2, 2, 8]}>
            <Box bg={'red.500'} opacity={2} width={['100%', '50%', '50%']} boxSize={['200px', '300px', '800px']} overflow={'hidden'}>
                    <Image src='/images/bbb-logo.png'
                     alt="header-image-logo" />
            </Box>

            <Box mr={5} width={['100%', '50%', '50%']} boxSize={['240px', '300px', '800px']}  pt={'250px'}>
                <Container bg={'whiteAlpha.100'}>
                    <FlatMenu />
                </Container>
            </Box>
        </SimpleGrid>
      </header>
    </>
  )
}
