import React from 'react'
import { Badge,  Card, CardBody, CardFooter, CardHeader, Heading, Image,  Stack, Text } from '@chakra-ui/react'

function ProjectCard() {
  return (
    <>
     <Card maxW={'sm'} cursor={"pointer"} _hover={{ borderWidth:"1px",borderColor:"#39FF14"}}>
                <CardBody>
                <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <CardHeader px={0}>
        <Heading as={'h1'} fontSize={[null,'large','large']}>ASTRO NEWS PORTALS (Demo) </Heading>
    </CardHeader>
    <Text as={'p'} >Discover Malaysia's premier news portals, offering comprehensive coverage of diverse topics and boasting over 2 million monthly active users (MAU)</Text>
                </CardBody>
                <CardFooter>
                
                <Stack direction={'row '}>
  <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>Default</Badge>
  <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>Success</Badge>
  <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>Removed</Badge>
  <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>New</Badge>
</Stack>
                </CardFooter>

            </Card>
    </>
  )
}


export default ProjectCard
