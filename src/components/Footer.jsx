import { Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillLinkedin, AiFillMail, AiOutlineGithub } from 'react-icons/ai'

function Footer() {
  return (
    <>
     <Container maxW={'container.2xl'}>
        <Flex justifyContent={'space-around'} alignItems={'center'} py={5}>
            <Text fontSize={['x-small','medium','large']} >© 2024 Deepak Malakar</Text>
                <HStack spacing={0}>
            <IconButton variant={'ghost'} fontSize={[null,'medium','x-large']} _hover={{bg:"blue.500", color:"white"}} borderRadius={50}>
                    <AiFillLinkedin/>
            </IconButton>
            <IconButton _hover={{bg:"blackAlpha.800", color:"white"}} variant={'ghost'} fontSize={[null,'medium','x-large']} borderRadius={50} >
            <AiOutlineGithub/>
            </IconButton>
            <IconButton _hover={{bg:"red.500", color:"white"}} variant={'ghost'} fontSize={[null,'medium','x-large']} borderRadius={50} >
            <AiFillMail/>
            </IconButton>
                   
                </HStack>
        </Flex>
        </Container> 
    </>
  )
}

export default Footer
