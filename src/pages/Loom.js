import React from 'react'
import { Container, Box } from '@chakra-ui/react'

export default function Loom() {
  return (
    <>
      <Box m={4}>
        <div style={{position: 'relative', paddingBottom: '62.5%', height: '0'}}>
            <iframe 
            src="https://www.loom.com/embed/04292413a01e4da39127811cf4bc8a0e?sid=da7e178d-6c71-47e5-bcbd-d401a353bed1" 
            frameborder="0" 
            webkitallowfullscreen 
            mozallowfullscreen="true"
            allowFullScreen 
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
        </div>
      </Box>
    </>
  )
}
