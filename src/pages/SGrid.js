import React from 'react'
import { SimpleGrid, Text, Link, Box, } from '@chakra-ui/react'

export default function SGrid() {
  return (
    <>
        <SimpleGrid 
            justifyContent={'center'} alignItems={'center'}
            columns={[1, 2, 4]} rows={1} 
            mt={'100px'} mb={'50px'} ml={'20px'} mr={'20px'} 
            w={['400px', '550px', '100%']}>
                <Box bg='papayawhip' w='100px' h='100px'></Box>
                <Box bg='papayawhip' w='100px' h='100px'></Box>
                <Box bg='papayawhip' w='100px' h='100px'></Box>
                <Box bg='papayawhip' w='100px' h='100px'></Box>
        </SimpleGrid>
    </>
  )
}
