import React from 'react'
import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';

  function StatsCard(props) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} fontSize={'xl'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'3xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function Programs() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} mb={10}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          What can we offer you?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Web Development'} stat={'Responsive modern website and custom web pages that actually work! More than just a visual experience a fully immersive location on the web.'} />
          <StatsCard title={'Web Design'} stat={'We will work with you to develop and design your own style across your products. Powered by modern frameworks such as Chakra and Tailwind.'} />
          <StatsCard title={'Graphic Design'} stat={'Custom graphics, fonts, and typefaces designed by hand and powered by Adobe tools.'} />
        </SimpleGrid>
      </Box>
    );
  }
