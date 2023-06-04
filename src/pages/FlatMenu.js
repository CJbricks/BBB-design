import React from 'react'
import styles from '@/styles/Menu.module.css'
import { Text, Spacer, Box, SimpleGrid } from '@chakra-ui/react'


export default function FlatMenu() {
  return (
    <>
    {/* Heading Text */}

        <Box ml={'25px'} textAlign={'left'}>
            <Text rows={2} color={'blackAlpha.1000'} fontSize={['18px', '24px', '38px']}  fontWeight={700}>Brick By Brick</Text>
            <Text color={'red.600'}fontSize={['12px', '18px', '32px']} fontWeight={700}>Web Design / Development</Text>
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
