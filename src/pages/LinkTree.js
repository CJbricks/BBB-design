import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import { Box, Button, Center, Stack, Text, Heading, Link } from '@chakra-ui/react';

export default function Contact() {
  return (
    <>
    
    <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'} m={8}>
      <Heading as='h1' m={5}>Find us on the web</Heading>
        {/* Instagram */}
        <Button w={'full'} colorScheme={'red'} variant={'outline'} leftIcon={<FaInstagram />}>
          <Center>
            <Link href='https://instagram.com/oreo.blizman' target="_blank">
              <Text>Instagram</Text>
            </Link>
          </Center>
        </Button>

        {/* Facebook */}
        <Button w={'full'} colorScheme={'twitter'} variant={'outline'} leftIcon={<FaFacebook />}>
          <Center>
            <Link href='https://twitter.com/' target="_blank">
              <Text>Twitter</Text>
            </Link>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} colorScheme={'black'} leftIcon={<FcGoogle />}>
          <Center>
            <Link href='https://github.com/CJbricks' target="_blank">
              <Text>Github</Text>
            </Link>
          </Center>
        </Button>

        {/* Messenger */}
        <Button w={'full'} variant={'outline'} colorScheme={'red'} leftIcon={<SiMessenger />}>
          <Center>
            <Link href='mailto:cj.christian.web@gmail.com' target="_blank">
              <Text>Send Us A Message</Text>
            </Link>
          </Center>
        </Button>
        
        {/* Jotform */}
        <Button w={'full'} variant={'outline'} colorScheme={'black'} leftIcon={<SiMessenger />}>
          <Center>
            <Link href='#' target="_blank">
              <Text>Get A Quote</Text>
            </Link>
          </Center>
        </Button>
      </Stack>
    </Center>
    
    </>
  );
}