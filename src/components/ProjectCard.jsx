import React from 'react'
import { Badge,  Card, CardBody, CardFooter, CardHeader, GridItem, Heading, Image,  SimpleGrid, Text } from '@chakra-ui/react'
import projectimages from '../assets/projectimages/Screenshot 2024-06-12 151343.png'
import { Link } from 'react-router-dom'

function ProjectCard() {
  return (
    <>
     <Card maxW={'sm'} cursor={"pointer"} _hover={{ borderWidth:"1px",borderColor:"#39FF14"}}>
     <Link to={'https://blog-seven-lyart-60.vercel.app/'}>
                <CardBody>
                <Image
      src={projectimages}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <CardHeader px={0}>
        <Heading as={'h1'} fontSize={[null,'large','large']}>Blog Site </Heading>
    </CardHeader>
    <Text as={'p'} >Here a blog site is created, name description and image are uploaded in the database. Here is a simple blog website:</Text>
                </CardBody>
                <CardFooter>
                
                {/* <Stack direction={['row','column','row']} width={'sm'}> */}
    <SimpleGrid columns={['3','4']} gap={4} >

   
 <GridItem colSpan={1}>
 <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>vite+react</Badge>
 </GridItem>
 <GridItem colSpan={1}>
 <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>mongodb</Badge>
 </GridItem>
 <GridItem colSpan={1}>
 <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>express</Badge>
 </GridItem>
 <GridItem colSpan={1}>
 <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>rtk query</Badge>
 </GridItem>
{/* </Stack> */}
</SimpleGrid>
</CardFooter>
     </Link>
      </Card>
    </>
  )
}


export default ProjectCard
