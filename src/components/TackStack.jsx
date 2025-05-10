import { Card, CardBody,  Flex, GridItem, Heading, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from '@chakra-ui/react'
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
<<<<<<< HEAD
    
=======
    <Tab fontSize={['sm','md']} >Database</Tab>
>>>>>>> 42b2c0fc569056a94c5b755bec75fcacda6e85fb
    <Tab fontSize={['sm','md']} >CSS Library</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Flex justifyContent={['center','flex-start']} align={'center'}>
      <SimpleGrid columns={[1,3,3,4]} columnGap={10} rowGap={4} >
        <GridItem>
        <Card  cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
<<<<<<< HEAD
            <Text>HTML</Text>
=======
            <Text>Node Js</Text>
>>>>>>> 42b2c0fc569056a94c5b755bec75fcacda6e85fb
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
<<<<<<< HEAD
            <Text>CSS</Text>
=======
            <Text>Express js</Text>
>>>>>>> 42b2c0fc569056a94c5b755bec75fcacda6e85fb
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
<<<<<<< HEAD
    
=======
    <TabPanel>
    <Flex justifyContent={['center','flex-start']} align={'center'}>
      <SimpleGrid columns={[1,3,3,4]} columnGap={7} rowGap={4} >
        <GridItem>
        <Card cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
            <Text>MySql</Text>
        </CardBody>
      </Card>
        </GridItem>
        <GridItem>
        <Card cursor={'pointer'} bg={'none'} borderWidth={'1px'} borderColor={'gray.600'} _hover={{borderColor:"#39FF14"}} >
        <CardBody>
            <Text>MongoDB</Text>
        </CardBody>
      </Card>
        </GridItem>
      </SimpleGrid>
      
      </Flex>
    </TabPanel>
>>>>>>> 42b2c0fc569056a94c5b755bec75fcacda6e85fb
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
