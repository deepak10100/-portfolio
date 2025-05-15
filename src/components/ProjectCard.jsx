import React from 'react'
import { Badge,  Card, CardBody, CardFooter, CardHeader, GridItem, Heading, Image,  SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function ProjectCard({title,desc, image,bedge1,bedge2,bedge3,bedge4,blogUrl}) {
  return (
    <>
     <Card maxW={'sm'}  cursor={"pointer"} _hover={{ borderWidth:"1px",borderColor:"#39FF14"}}>
     <Link to={blogUrl}>
      <CardBody>
      <Image src={image} width={'full'} height={'200px'} alt='Green double couch with wooden legs' borderRadius='lg'/>
    <CardHeader px={0}>
    <Heading as={'h1'} fontSize={[null,'large','large']}>{title} </Heading>
    </CardHeader>
    <Text as={'p'} >{desc}</Text>
    </CardBody>
    
  <CardFooter>
                         
    <SimpleGrid columns={['3','4']} gap={4} >
 <GridItem colSpan={1}>
 <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>{bedge1}</Badge>
 </GridItem>
 <GridItem colSpan={1}>
 <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>{bedge2}</Badge>
 </GridItem>
 <GridItem colSpan={1}>
 <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>{bedge3}</Badge>
 </GridItem>
 <GridItem colSpan={1}>
 <Badge as={'p'} borderRadius={7} fontSize={'x-small'} colorScheme='purple'>{bedge4}</Badge>
 </GridItem>
</SimpleGrid>
</CardFooter>
     </Link>

     
      </Card>

      
    </>
  )
}


export default ProjectCard
