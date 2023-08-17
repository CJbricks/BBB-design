import React from 'react'

export default function About() {
  return (
    <div>
    {/* Second Blob Image */}
    <Hide below='md'>
    <Flex
      flex={1}
      justify={'center'}
      align={'center'}
      position={'relative'}
      w={'90%'}
      height={'90%'}>
     
        <Blob
        w={'90%'}
        h={'150%'}
        position={'absolute'}
        top={'-20%'}
        left={0}
        zIndex={-1}
        opacity={'80%'}
        color={'brand.900'}
      />
      <Blob
        w={'80%'}
        h={'120%'}
        position={'absolute'}
        top={'-25%'}
        left={0}
        zIndex={-1}
        
        color={'brand.700'}
      />
      
      {/* Unused attributes
        rounded={'2xl'}
        boxShadow={'2xl'} */}
      <Box
        position={'relative'}
        height={'full'}
        p={8}
        width={'full'}
        overflow={'hidden'}
        >
      
        <Image
          alt={'Hero Image'}
          fit={'cover'}
          align={'center'}
          w={'85%'}
          h={'100%'}
          src={'/images/nav-logo.png'
          }
        />
      </Box>
      
    </Flex>
    </Hide>
    About</div>
  )
}
