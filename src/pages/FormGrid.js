import React from 'react'
import styles from '@/styles/Form.module.css'
import { SimpleGrid, Text, Link, Box, } from '@chakra-ui/react'


export default function FormGrid() {
  return (
    <>
    <SimpleGrid columns={[1, 1, 2]} w="100%" alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
        <Box w={['100%', '100%', '50%']}>x</Box>
        <Box w={['100%', '100%', '50%']}>x</Box>
    </SimpleGrid>
    </>
  )
}
