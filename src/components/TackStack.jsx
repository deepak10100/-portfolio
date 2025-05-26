import { Card, CardBody,  Flex, GridItem, Heading, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

function TackStack() {
  return (
    <>
      
        <Stack py={8}>
            <Heading as={'h1'} fontSize={['x-large','xx-large','xxx-large']}>Tech Stack</Heading>
            <Text as={'p'} >A list of my favorite tools and technologies that I use on a regular basis.</Text>
            <Tabs size='md' colorScheme='green'  variant='enclosed'>
  <TabList py={5}>
    <Tab   fontSize={['sm','md']} >Programming Languages</Tab>
    <Tab fontSize={['sm','md']} >CSS Library</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Flex justifyContent={['center','flex-start']} align={'center'}>
      <SimpleGrid columns={[1,3,3,4]} columnGap={10} rowGap={4} >
        <GridItem>
        <Card  cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
            <Text>HTML</Text>
        </CardBody>
      </Card>
        </GridItem>
        <GridItem>
        <Card cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
            <Text>Reac Js</Text>
        </CardBody>
      </Card>
        </GridItem>
        <GridItem>
        <Card cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
            <Text>CSS</Text>
        </CardBody>
      </Card>
        </GridItem>
        <GridItem>
        <Card cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
            <Text>Javascript</Text>
        </CardBody>
      </Card>
        </GridItem>
       
      </SimpleGrid>
      
      </Flex>
    </TabPanel>
   
    <TabPanel>
    <Flex justifyContent={['center','flex-start']} align={'center'}>
      <SimpleGrid columns={[1,3,3,4]} columnGap={7} rowGap={4} >
        <GridItem>
        <Card cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
            <Text>Get Bootstrap</Text>
        </CardBody>
      </Card>
        </GridItem>
        <GridItem>
        <Card cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
            <Text>Chakra UI</Text>
        </CardBody>
      </Card>
        </GridItem>
        <GridItem>
        <Card cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
            <Text>Tailwind CSS</Text>
        </CardBody>
      </Card>
        </GridItem>
      </SimpleGrid>
      
      </Flex>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Stack>


    </>
  )
}

export default TackStack
