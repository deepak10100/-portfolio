import { Badge, Card, CardBody, CardFooter, CardHeader, Flex, GridItem, Heading, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function AboutCard({heading,text, year,per}) {
  return (
    <>
      <Stack py={3}>
            <Card bg={'none'} borderWidth={'1px'} borderColor={useColorModeValue("gray.100", "gray.700")} cursor={'pointer'} _hover={{borderColor:"#39FF14"}} >
                <CardBody>
                    <CardHeader p={0} pb={1}>
                       <Flex  justifyContent={'space-between'} direction={['column','row']} >
                       <Heading as={'h1'} fontSize={['medium','large','x-large','xx-large']} > {heading}</Heading>
                       <Text as={'p'}>{year}</Text>
                       </Flex>
                    </CardHeader>
                    <Text as={'p'} >
                    {text}
                    </Text>
                </CardBody>
                <CardFooter>
                    <SimpleGrid columns={[2,4,6,8]} gridGap={2}>
                       
                        
                        <GridItem>
                        <Badge as={'p'} borderRadius={5}>{per}</Badge>
                        </GridItem>
                    </SimpleGrid>
                </CardFooter>
            </Card>
            </Stack>
    </>
  )
}

export default AboutCard
