import React from 'react'
import styles from '@/styles/Menu.module.css'
import { Text, Spacer, Box, SimpleGrid } from '@chakra-ui/react'


export default function FlatMenu() {
  return (
    <>
        <Box ml={'25px'} textAlign={'left'}>

        {/* Heading Text */}
        
            <Text as={'h1'} color={'red.500'} fontSize={['18px', '24px', '42px']} fontFamily={'helvetica'} fontWeight={600}>CJ Christian</Text>
            <Text as={'h2'} color={'red.400'}fontSize={['18px', '24px', '42px']} fontFamily={'helvetica'} fontWeight={600}>Design Development</Text>
        </Box> 
            
        <Spacer />

         <div className={styles.body}>

        {/* Flat Menu */}

                <div className={styles.work}>Work
                </div>
                <div className={styles.contact}>Contact
                </div>
                <div className={styles.store}>Store
                </div>
        </div>
    </>
  )
}
