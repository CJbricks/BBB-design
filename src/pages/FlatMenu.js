import React from 'react'
import styles from '@/styles/Menu.module.css'
import { Text, Spacer, Box, SimpleGrid } from '@chakra-ui/react'
import { Noto_Sans_JP } from 'next/font/google'

export default function FlatMenu() {
  
  return (
    <>
    {/* Heading Text */}

        <Box ml={'25px'} textAlign={'left'}>
            <Text color={'blackAlpha.1000'} fontSize={['12px', '14px', '18px']}  fontWeight={700}>Brick By Brick</Text>
            <Text color={'red.600'}fontSize={['10px', '14px', '18px']} fontWeight={700}>Web Development & Design</Text>
            <Text mb={'80px'} color={'red.600'}fontSize={['10px', '14px', '18px']} fontWeight={700} className={styles.text} fontFamily={''}>Web Development & Design</Text>
        </Box> 
            
        <Spacer />

        {/* Flat Menu */}

         <div className={styles.body} id="body">
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
