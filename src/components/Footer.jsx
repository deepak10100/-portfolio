import { Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillLinkedin, AiFillMail, AiOutlineGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <Container maxW={'container.2xl'} p={5}>
        <Flex justifyContent={'space-around'} alignItems={'center'} py={5} >
<<<<<<< HEAD
            <Text as={'p'} fontSize={['x-small','medium','large']} >© {new Date().getFullYear()} Deepak Malakar</Text>
=======
            <Text as={'p'} fontSize={['x-small','medium','large']} >© 2024 Deepak Malakar</Text>
>>>>>>> 42b2c0fc569056a94c5b755bec75fcacda6e85fb
                <HStack spacing={0}>
            <IconButton variant={'ghost'} fontSize={[null,'medium','x-large']}  _hover={{bg:"#39FF14", color:"black"}} borderRadius={50}>
                    <Link target='_blank' to={'https://www.linkedin.com/in/deepak-malakar-355061214/'}>
                    <AiFillLinkedin/>
                    </Link>
            </IconButton>
            <IconButton _hover={{bg:"#39FF14", color:"black"}} variant={'ghost'} fontSize={[null,'medium','x-large']} borderRadius={50} >
            <Link to={'https://github.com/deepak10100'} target='_blank'>
            <AiOutlineGithub/>
            </Link>
            </IconButton>
            <IconButton _hover={{bg:"#39FF14", color:"black"}} variant={'ghost'} fontSize={[null,'medium','x-large']} borderRadius={50} >
            <Link to={'mailto:deepakmalakar98185@gmail.com'}>
            <AiFillMail/>
            </Link>
            </IconButton>
           
                </HStack>
        </Flex>
        </Container> 
    </>
  )
}

export default Footer
