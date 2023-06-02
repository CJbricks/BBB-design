import React from 'react'
import styles from '@/styles/Menu.module.css'
import { Text, Spacer, Box, SimpleGrid } from '@chakra-ui/react'


export default function FlatMenu() {
  return (
    <>
        <Box ml={'25px'} textAlign={'left'}>

        {/* Heading Text */}

            <Text as={'h1'} color={'alphBlack.100'} fontSize={['18px', '24px', '42px']}  fontWeight={700}>CJ Christian</Text>
            <Text as={'h2'} color={'red.600'}fontSize={['18px', '24px', '42px']} fontWeight={700}>Design Development</Text>
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
