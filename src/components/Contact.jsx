import { Button, Container, FormControl, FormLabel, Heading, Input, Stack, Textarea, VStack, color } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6i7pcq7', 'template_vk1u3js', form.current, {
        publicKey: 'mq2h-fxZ3VAqdFq9J',
      })
      .then(
        () => {
          alert('Email Send Successfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      document.querySelector('form').reset()
  };
  return (
    <>
      <Container maxW={'container.xl'} h={'100vh'} py={20} >
       
        <VStack>
        <Stack as={'form'} ref={form} onSubmit={sendEmail} borderWidth={'1px'} borderColor={'A0AEC0'}  p={7} borderRadius={7} spacing={7} >
            <Heading  fontSize={['large','x-large','xx-large']} color={'#39FF14'} >Let's get in touch. Leave me your message. 💬</Heading>
          
            <FormControl>
                <FormLabel  >Name</FormLabel>
                <Input name='user_name' size={'lg'} placeholder='Enter Your Name' type="text" />
            </FormControl>
            <FormControl>
                <FormLabel  >Gmail</FormLabel>
                <Input name='user_email' placeholder='Enter Your Gmail' size={'lg'} type="text" />
            </FormControl>
            <FormControl>
                <FormLabel >Message</FormLabel>
                <Textarea name='message' placeholder='Enter Your Message' size={'lg'} type="text" />
            </FormControl>
            <Button type='submit'   _hover={'none'} size={['sm','md']} color={'black'} bg={'#39FF14'}  rightIcon={ <AiOutlineSend/>} >Send Message</Button>
        </Stack>
            </VStack>
       
      </Container>
    </>
  )
}

export default Contact
