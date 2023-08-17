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
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={'brand.600'} p={10}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
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
                About Me
              </Text>
              <br />{' '}
              <Text color={'brand.900'} as={'span'}>
                And My Mission
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.800'}>
                <Highlight query={'your vision.'} styles={{ bg: 'brand.900', px: '.5', py: '.5', rounded: 'full' }}>
                Hi, My name is Cody and I am a Web Developer and Designer from Austin Tx.
                Bricks Design and Development is a company dedicated to implementing beautiful design and functional development for your
                business or project. My background lies in fine art and sculpture which is where I learned to use my hands and mind to problem
                solve to find creative and beautiful ways to express my own vision. Since moving into the world of web development I started using new tools
                such as Javascript, Typescript, React, HTML, CSS, and Node.js to explore creative ways to solve problems and build projects online. Now my goal 
                is to amplify your vision.
                I would love to hear from you if you have a project proposal or job inquiry click the Get Started button and send me a direct email. 
                </Highlight>
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href='mailto:cj.christian.web@gmail.com' target='_blank'>
              <Button
                rounded={'full'}
                bg={'brand.600'}
                color={'white'}
                _hover={{
                  bg: 'brand.500',
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
            h={'100%'}
            
          />
          </Box>
        </Flex>
      </Stack>
    );
  }
