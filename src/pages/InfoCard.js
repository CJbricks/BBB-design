import React from 'react';
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Link,
    Highlight,
    Box
  } from '@chakra-ui/react';
  import styles from '@/styles/Home.module.css'
  
  export default function InfoCard() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={'brand.600'} pt={10} pb={2}>
        <Flex p={2} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '25%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'brand.900',
                  zIndex: -1,
                  rounded: 'full'
                }}>
                
              </Text>
              <br />{' '}
              <Text color={'brand.900'} as={'span'}>
                “The downfall of order brings good to none.”
              </Text>{' '}
            </Heading>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href='mailto:cj.christian.web@gmail.com' target='_blank'>
              <Button
                rounded={'full'}
                bg={'brand.900'}
                color={'black'}
                _hover={{
                  bg: 'brand.800',
                }}>
                Get Started
              </Button>
            </Link>
            {/*
            <Link href='/About'>
              <Button rounded={'full'} bg={'blue.100'} _hover={{
                  bg: 'brand.300'}}>More about Bricks...</Button>
            </Link>
              */}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
            mr={[0, 8]}
            >
          <Box
           position={'relative'}
           height={'full'}
           borderTopRadius={'500px'}
           width={'full'}
           overflow={'hidden'}>
          <Image
            alt={'bricks-computer-image'}
            src='/images/bricks-design.jpg'
            className={styles.fade}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'90%'}
            
          />
          </Box>
        </Flex>
      </Stack>
    );
  }
