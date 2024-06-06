import { Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillLinkedin, AiFillMail, AiOutlineGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <Container maxW={'container.2xl'} p={5}>
        <Flex justifyContent={'space-around'} alignItems={'center'} py={5} >
            <Text as={'p'} fontSize={['x-small','medium','large']} >© 2024 Deepak Malakar</Text>
                <HStack spacing={0}>
                    <Link target='_blank' to={'https://www.linkedin.com/in/deepak-malakar-355061214/'}>
            <IconButton variant={'ghost'} fontSize={[null,'medium','x-large']}  _hover={{bg:"#39FF14", color:"black"}} borderRadius={50}>
                    <AiFillLinkedin/>
            </IconButton>
                    </Link>
            <Link to={'https://github.com/deepak10100'} target='_blank'>
            <IconButton _hover={{bg:"#39FF14", color:"black"}} variant={'ghost'} fontSize={[null,'medium','x-large']} borderRadius={50} >
            <AiOutlineGithub/>
            </IconButton>
            </Link>
            <Link to={'mailto:deepakmalakar98185@gmail.com'}>
            <IconButton _hover={{bg:"#39FF14", color:"black"}} variant={'ghost'} fontSize={[null,'medium','x-large']} borderRadius={50} >
            <AiFillMail/>
            </IconButton>
            </Link>
           
                </HStack>
        </Flex>
        </Container> 
    </>
  )
}

export default Footer
