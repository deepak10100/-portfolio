import { Card, CardBody, CardHeader, Container, Flex, HStack, Heading, IconButton, Stack, Text, border, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import AboutCard from './AboutCard'
// import { MdCastForEducation } from "react-icons/md";
import { FaUniversity } from 'react-icons/fa';
function About() {
  return (
    <>
     <Container maxW={'container.lg'} p={5}>
        <Stack py={20}>
          <HStack spacing={22} pb={5} >
         <IconButton _hover={{bg:"none"}} bg={'none'} fontSize={['smaller','medium','large','xxx-large']} icon={<FaUniversity />}/>  
            <Heading fontSize={['smaller','medium','large','xxx-large']}>  Education</Heading>
          </HStack>
            <AboutCard heading={"Shiban S Tyagi S S"} text={'Hign School (10 class)'} year={'2017'} per={'Presentage 70%'}  />
            <AboutCard heading={"Shamnhu Dayal Inter College"} text={'InterMedidate School (12 class)'} per={"Presentage 50%"} year={'2019'}  />
            <AboutCard heading={"Chodhary Charan Singh University College"} text={'Bachelor Of Commerce (B.Com)'} per={"Result Not Declered"} year={'2024'}  />
        </Stack>
     </Container>
    </>
  )
}

export default About
