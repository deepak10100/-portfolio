import { Avatar, Button, ButtonGroup, Container, Flex, HStack, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import TackStack from './TackStack'
import Project from './Project'
import { Link } from 'react-router-dom'
import { MdOutlineCastForEducation } from "react-icons/md";

function Home() {
  return (
    <>
      <Container maxW={'container.lg'} zIndex={1} py={12}  >
        <Flex justifyContent={'space-between'} align={'center'} zIndex={0} >
        <HStack py={[7,5]} >
        <Heading fontSize={['small','medium','xxx-large']} >Hey I am Deepak</Heading>
        <Text as={'span'} fontSize={['small','medium','xxx-large']} >👋</Text>
        </HStack>
        <Avatar size={['sm','md','xl']} src='profile.png' cursor={'pointer'} />
        </Flex>
        <Stack>
            <Text fontSize={['small','medium','x-large']} lineHeight={'2rem'}  >Mern Stack Devloper From India MY</Text>
            <Text fontSize={['small','medium','x-large']} >Focused on Web Development. Passion in Website Develop. 🔥</Text>
            <ButtonGroup py={4}>
            <Button as={'a'} href='cv.pdf' download  _hover={{borderColor:"blue.500", color:"white", bg:"blue.500",}} size={'sm'} >
          Resume
            </Button>

            <Link to={'/contact-us'}>
            <Button color={'white'} bg={'blue.500'}   _hover={{borderColor:"blue.500", bg:"gray.500"}}  size={'sm'}>Contact Me</Button>
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
