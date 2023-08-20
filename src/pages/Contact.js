import { React, useState } from 'react'
import axios from 'axios'
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
    Icon,
    Image
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson, BsInstagram, BsBook } from 'react-icons/bs';
  import styles from '@/styles/Menu.module.css'
  
  export default function contact() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const contactObj = {
          name,
          email, 
          message
        }
        console.log(contactObj);

        // send data over server
        try {
          const { data } = await axios({
            url: "./api/addcontact",
            method: "POST",
            data: contactObj
          })
          console.log("Worked", data)
        } catch (error) {
          console.log(error)
        }

    }

    return (
      <Container bg={''} maxW="full" m={6} p={4} centerContent overflow="hidden">
          <Flex>
        
         {/* Contact form */}       
          <Box
            bg={'brand.900'}
            color="white"
            borderRadius="lg"
            m={{ sm: 0, md: 16, lg: 8 }}
            p={{ sm: 5, md: 5, lg: 14 }}>
            <Box p={[8, 4]}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading textAlign={'left'} color={'brand.600'}>Let's get started!</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 3 }} color={'brand.600'}>
                      Fill out the form or directly contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={'brand.600'}
                          _hover={{ border: '2px solid #285E61' }}
                          leftIcon={<MdPhone color='black' size="20px" />}>
                          +13032293663
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="275px"
                          variant="ghost"
                          color={'brand.600'}
                          _hover={{ border: '2px solid #285E61' }}
                          leftIcon={<MdEmail color='black' size="20px" />}>
                          cj.christian.web@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={'brand.600'}
                          _hover={{ border: '2px solid #285E61' }}
                          leftIcon={<MdLocationOn color='black' size="20px" />}>
                          Austin, TX
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={8}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="Blog"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'gray.200' }}
                        icon={<BsBook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'gray.200' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'gray.200' }}
                        icon={<BsInstagram size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Full Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md"
                            onChange={(e) => {
                              setName(e.target.value)
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>E-Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md"
                            onChange={(e) => {
                              setEmail(e.target.value)
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                            onChange={(e) => {
                              setMessage(e.target.value)
                            }}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                            onClick={handleSubmit}>
                            Send
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
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