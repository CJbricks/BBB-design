import React from 'react'
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Image,
  Heading,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'


function Sites(props) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
   
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} my={8}>
      <Heading textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'} color={'brand.600'}>
        Sites We Develop
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Box>
            <Heading align={'center'} color={'brand.700'} my={4}>
                Daybreak Books
            </Heading>
            <Image 
                src='/images/daybreak-docs.jpg'
                alt='daybreak-site-image'
                w={'full'}
                borderTopRadius={'500px'}
                />
            <Text color={'gray.500'} p={2}>
              Daybreak is an art book company run out of Denver Colorado.
            </Text>
            <Text color={'gray.900'} p={2}>
            Visit <Link href="https://daybreak-beta.vercel.app" target="_blank">Daybreak</Link>.
            </Text>
        </Box>
        <Box>
        <Heading align={'center'} color={'brand.700'} my={4}>
                CJ Christian Art
            </Heading>
            <Image 
                src='/images/cj-docs.jpg'
                alt='daybreak-site-image'
                w={'full'}
                borderTopRadius={'500px'}
                />
            <Text color={'gray.500'} p={2}>
              CJ Christian is a fine artist and designer from Austin Texas.
              </Text>
              <Text color={'gray.900'} p={2}>
              Visit <Link href="https://cjchristian.com" target="_blank">Here</Link>.
            
              </Text>
        </Box>
        <Box>
        <Heading align={'center'} color={'brand.700'} my={4}>
               Stat Sheet 2.0 
            </Heading>
            <Image 
                src='/images/stat-docs.jpg'
                alt='daybreak-site-image'
                w={'full'}
                borderTopRadius={'500px'}
                />
            <Text color={'gray.500'} p={2}>
             Stat Sheet is a Javascript based trivia game. 
            </Text>
            <Text color={'gray.900'} p={2}>
            Old version Visit <Link href="https://tay-game.surge.sh" target="_blank">here</Link>.
            </Text>
        </Box>
        <Box>
        <Heading align={'center'} color={'brand.700'} my={4}>
                Mario Gonz Mods
            </Heading>
            <Image 
                src='/images/mario-docs.jpg'
                alt='daybreak-site-image'
                w={'full'}
                borderTopRadius={'500px'}
                />
            <Text color={'gray.500'} p={2} >
              Mario Gonzalez is a body modification artist from Denver Colorado.
            </Text>
        </Box>
        <Box>
        <Heading align={'center'} color={'brand.700'} my={4}>
                Happy Monkey IV
            </Heading>
            <Image 
                src='/images/iv-docs.jpg'
                alt='daybreak-site-image'
                w={'full'}
                borderTopRadius={'500px'}
                />
            <Text color={'gray.500'} p={2}>
              Happy Monkey is a mobile Iv Hydration company serving various events such as athletic events, music festivals, and home calls.
            </Text>
            <Text color={'gray.900'} p={2}>
            Visit <Link href="https://happymonkeyiv.com" target="_blank">Happy Monkey</Link>.
            </Text>
        </Box>
        
        <Box>
        <Heading align={'center'} color={'brand.700'} my={4}>
                Woofies K9
            </Heading>
            <Image 
                src='/images/woof-docs.jpg'
                alt='daybreak-site-image'
                w={'full'}
                borderTopRadius={'500px'}
                />
        <Text color={'gray.500'} p={2}>
              Woofies K9 is a Dog training and boarding facility in Parker Colorado.
            </Text>
            <Text color={'gray.900'} p={2}> Visit <Link href="https://woofiesk9.com" target="_blank">Woofies K9!</Link>.</Text>
        </Box>

    </SimpleGrid>
        
    </Box>
  )
}