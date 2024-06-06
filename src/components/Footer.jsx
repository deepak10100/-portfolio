import { Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillLinkedin, AiFillMail, AiOutlineGithub } from 'react-icons/ai'

function Footer() {
  return (
    <>
     <Container maxW={'container.2xl'}>
        <Flex justifyContent={'space-around'} alignItems={'center'} py={5}>
            <Text as={'p'} fontSize={['x-small','medium','large']} >© 2024 Deepak Malakar</Text>
                <HStack spacing={0}>
            <IconButton variant={'ghost'} fontSize={[null,'medium','x-large']} _hover={{bg:"#39FF14", color:"black"}} borderRadius={50}>
                    <AiFillLinkedin/>
            </IconButton>
            <IconButton _hover={{bg:"#39FF14", color:"black"}} variant={'ghost'} fontSize={[null,'medium','x-large']} borderRadius={50} >
            <AiOutlineGithub/>
            </IconButton>
            <IconButton _hover={{bg:"#39FF14", color:"black"}} variant={'ghost'} fontSize={[null,'medium','x-large']} borderRadius={50} >
            <AiFillMail/>
            </IconButton>
           
                </HStack>
        </Flex>
        </Container> 
    </>
  )
}

export default Footer
