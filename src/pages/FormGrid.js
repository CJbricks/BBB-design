import React from 'react'
import styles from '@/styles/Form.module.css'
import { SimpleGrid, Text, Box, FormControl, FormLabel, FormHelperText, Input, Button, Highlight } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'

 


export default function FormGrid() {

   //Empty array to store array of input info
   const stateArr = [];

   // state for all input fields
   const [email, setEmail] = useState("")
   const [name, setName] = useState("")
   const [comment, setComment] = useState("")
 
   // Push to array
   stateArr.push([email, name, comment])

  return (
    <>
    <SimpleGrid columns={[1, 1, 2]} w="100%" alignItems={'center'} justifyContent={'center'} textAlign={'center'} ml={2} mr={2} mt={10} mb={10}>
        <Box w={['240px', '300px', '710px']} fontWeight={700} fontSize={['14px', '18px', '28px']} p={5} border="1px solid red" ml={5}>
        <FormControl>
              <FormLabel>
                Email Address
              </FormLabel>
                    <Input 
                    type='email'
                    size="sm"
                    onChange={(e) => setEmail(e.target.value)}
                    
                     />
              <FormLabel>
                Name
              </FormLabel>
                <Input 
                type="name"
                size="sm"
                onChange={(e) => setName(e.target.value)} />
              <FormLabel>
                Describe your site or project:
              </FormLabel>
                <Input type="name" 
                size="lg" 
                onChange={(e) => setComment(e.target.value)}
                />
            </FormControl>
              <Button colorScheme="red"
              mt={6}
              size="md" 
              variant="outline"
              onClick={(e) => console.log(stateArr[0], stateArr[1], stateArr[2] )}
              >Submit</Button>
        </Box>
        <Box w={['240px', '300px', '710px']} border="1px solid red" p={5}>
          <Text color={'alphaBlack.1000'} fontWeight={700} fontSize={['18px', '28px', '48px']}>
          <Highlight
            query={['your', 'business', 'ideas']}
            styles={{ px: '1', py: '1', rounded: 'full', bg: 'red.500', opacity: '85%' }}
          >
                Developing and designing responsive sites, graphics,
                
                and applications that fit
                
                your business and ideas.
            </Highlight>
          </Text>
        </Box>
    </SimpleGrid>
  </>
  )
}
