import { Button, Container, FormControl, FormLabel, Heading, Input, Stack, Textarea, VStack, color } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

function Contact() {
  return (
    <>
      <Container maxW={'container.xl'} h={'100vh'} py={20} >
       
        <VStack>
        <Stack borderWidth={'1px'} borderColor={'A0AEC0'}  p={7} borderRadius={7} spacing={7} >
            <Heading  fontSize={'xx-large'} color={'#39FF14'} >Let's get in touch. Leave me your message. 💬</Heading>
          
            <FormControl>
                <FormLabel  >Name</FormLabel>
                <Input size={'lg'} placeholder='Enter Your Name' type="text" />
            </FormControl>
            <FormControl>
                <FormLabel  >Gmail</FormLabel>
                <Input placeholder='Enter Your Gmail' size={'lg'} type="text" />
            </FormControl>
            <FormControl>
                <FormLabel >Message</FormLabel>
                <Textarea placeholder='Enter Your Message' size={'lg'} type="text" />
            </FormControl>
            <Button  _hover={'none'} fontSize={'large'} color={'black'} bg={'#39FF14'}  rightIcon={ <AiOutlineSend/>} >Send Message</Button>
        </Stack>
            </VStack>
       
      </Container>
    </>
  )
}

export default Contact
