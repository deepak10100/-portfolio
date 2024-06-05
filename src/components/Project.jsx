import React from 'react'
import {  GridItem, Heading, SimpleGrid, Stack,  Text } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <>
      <>
      
      <Stack py={0}>
          <Heading fontSize={['small','medium','xxx-large']}>Project</Heading>
          <Text>List of projects that I involved or have made in the past.</Text>
          <SimpleGrid py={7} alignItems={'center'} justifyContent={'center'} columns={[1,null,3]} columnGap={2} rowGap={5}  >
            <GridItem>
            <ProjectCard/>
            </GridItem>
            <GridItem>
            <ProjectCard/>
            </GridItem>
            <GridItem>
            <ProjectCard/>
            </GridItem>
            <GridItem>
            <ProjectCard/>
            </GridItem>
            <GridItem>
            <ProjectCard/>
            </GridItem>
            
            
            
          </SimpleGrid>
      </Stack>


  </>
    </>
  )
}

export default Project