import React from 'react'
import {  GridItem, Heading, SimpleGrid, Stack,  Text } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import blogImage from '../assets/projectimages/Screenshot 2024-06-12 151343.png'
import weather from '../assets/projectimages/weather.png'
function Project() {
  return (
    <>
      <>
      
      <Stack py={0}>
          <Heading as={'h1'} fontSize={['x-large','xx-large','xxx-large']}>Project</Heading>
          <Text as={'p'}>List of projects that I involved or have made in the past.</Text>
          <SimpleGrid py={7} alignItems={'center'} justifyContent={'center'} columns={[1,null,3]} columnGap={2} rowGap={5}  >
            <GridItem color={'red'}>
            <ProjectCard image={blogImage} blogUrl={'https://blog-seven-lyart-60.vercel.app/'} title={'Blog Site'} desc={'Here a blog site is created, name description and image are uploaded in the database. Here is a simple blog website'} bedge1={'vite+react'} bedge2={'mongodb'} bedge3={'express'} bedge4={'rtk query'} />
            </GridItem>
            <GridItem color={'red'}>
            <ProjectCard image={weather} blogUrl={'https://weather-app-six-green-76.vercel.app/'} title={'Weather Site'} desc={'Here is a weather site which gives us weather status. Here is a simple weather site which gives some general weather details.'} bedge1={'vite+react'} bedge2={'chakraui'}  bedge3={'axios'} />
            </GridItem>
            
            
            
          </SimpleGrid>
      </Stack>


  </>
    </>
  )
}

export default Project
