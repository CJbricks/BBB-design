import React from 'react'
import styles from '@/styles/Menu.module.css'
import { Text, Spacer, Box, SimpleGrid, Image, Center } from '@chakra-ui/react'
import { Noto_Sans_JP } from 'next/font/google'

export default function FlatMenu() {
  
  return (
    <>
    {/* Heading Text */}

        <Box ml={'25px'} textAlign={'left'}>
            <Text color={'blackAlpha.1000'} fontSize={['12px', '14px', '18px']}  fontWeight={700}>Brick By Brick</Text>
            <Text color={'red.600'}fontSize={['10px', '14px', '18px']} fontWeight={700}>Web Development & Design</Text>
        </Box> 

        <Box display="inline-flex" ml={'25px'}>
          <Image src="/images/icons/ig-icon.png" alt="instagram-logo-icon" width={30} height={30} m={1} className={styles.icons}  />
          <Image src="/images/icons/gh-icon.png" alt="github-logo-icon" width={30} height={30} m={1} className={styles.icons} />
        </Box>
            
        <Spacer />
        
        {/* Flat Menu */}
        
         <div className={styles.body} id="body">
                <div className={styles.work}>Work
                </div>
                <div className={styles.contact}>Contact
                </div>
                <div className={styles.store}>Blog
                </div>
        </div>
    </>
  )
}
