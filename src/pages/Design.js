import React from 'react'
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Highlight
  } from '@chakra-ui/react'
  import Link from 'next/link'
  
  export default function Design() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>

        <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
            mr={[0, 8]}>

        {/* -- Blob behind image -- 

            <Blob
              w={'110%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.400', 'red.400')}
            />
            {/* Unused attributes
              rounded={'2xl'}
              boxShadow={'2xl'} */} 
            <Box
              position={'relative'}
              height={'full'}
              borderTopRadius={'500px'}
              width={'full'}
              overflow={'hidden'}
              >
            
              <Image
                alt={'bbb-logo-hero-image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={'/images/merch-example-picture.jpg'
                }
              />
            </Box>
          </Flex>

          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                >
                  <Highlight query={'design'} styles={{ px: '5', py: '.5', rounded: 'full', bg: 'brand.900', opacity: '85%' }}>
                    Bold Graphic Design
                  </Highlight>
              </Text>
              <br />
              <Text as={'span'} color={'brand.600'}>
                Custom merchandise, web pages, books, logos, and more.
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Creating custom designs to print, produce, market, and brand any project. 
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Link href='/ContactPage'>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={700}
                px={6}
                bg={'brand.800'}
                _hover={{ bg: 'brand.700' }}>
                Get A Quote!
              </Button>
              </Link>
              <Link href="mailto:cj.christian.web@gmail.com" target="_blank">
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  >
                  Custom Inquiry
                </Button>
              </Link>
            </Stack>
          </Stack>
          
        </Stack>
      </Container>
    );
  }
  
  export const Blob = (props, IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };