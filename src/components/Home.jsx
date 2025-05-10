import { Avatar, Button, ButtonGroup, Container, Flex, HStack, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import TackStack from './TackStack'
import Project from './Project'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <Container maxW={'container.lg'} zIndex={1} py={20}  >
        <Flex justifyContent={'space-between'} align={'center'} zIndex={0} >
        <HStack py={[7,5]} >
        <Heading as={'h1'} fontSize={['large','x-large','xxx-large']} >Hello I'm <Text color={'#39FF14'} as={"span"}>Deepak Malakar</Text>👋 </Heading>
       
        </HStack>
        <Avatar size={['sm','md','xl']} src='profile.png' cursor={'pointer'} />
        </Flex>
        <Stack>
<<<<<<< HEAD
            <Text as={'p'} fontSize={['small','medium','x-large']} lineHeight={['.3rem','1rem']}  >Frontend Developer From India MY</Text>
=======
            <Text as={'p'} fontSize={['small','medium','x-large']} lineHeight={['.3rem','1rem']}  >Mern Stack Developer From India MY</Text>
>>>>>>> 42b2c0fc569056a94c5b755bec75fcacda6e85fb
            <Text as={'p'} fontSize={['small','medium','x-large']} >Focused on Web Development. Passion in Website Develop. 🔥</Text>
            <ButtonGroup py={4}>
            <Button color={'blackAlpha.800'} bg={'#39FF14'} as={'a'} href='cv.pdf' download  _hover={{borderColor:"#39FF14", color:"blackAlpha.800", bg:"#39FF14",}} size={'sm'} >
          Resume
            </Button>

            <Link to={'/contact-us'}>
            <Button color={'blackAlpha.800'} bg={'#39FF14'}   _hover={{borderColor:"blue.500", bg:"#39FF14", color:"blackAlpha.800"}}  size={'sm'}>Contact Me</Button>
            </Link>
            </ButtonGroup>
        </Stack>
        <TackStack/>
        <Project/>
    </Container>
    </>
  )
}

export default Home
