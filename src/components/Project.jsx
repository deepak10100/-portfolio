import React from 'react'
import {  GridItem, Heading, SimpleGrid, Stack,  Text } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import weather from '../assets/projectimages/weather.png'
import NoteApp from '../assets/projectimages/Noteapp.png'
import ProductPage from '../assets/projectimages/productpage.png'
import Todo from '../assets/projectimages/todo.png'
import Card from '../assets/projectimages/cart.png'
import Ecommerce from '../assets/projectimages/Ecommerce.png'
import Blog from '../assets/projectimages/blog.png'
import todoRedux from '../assets/projectimages/todoRedux.png'
function Project() {
  return (
    <>
      <>
      
      <Stack py={0}>
          <Heading as={'h1'} fontSize={['x-large','xx-large','xxx-large']}>Project</Heading>
          <Text as={'p'}>List of projects that I involved or have made in the past.</Text>
          <SimpleGrid py={7} alignItems={'center'} justifyContent={'center'} columns={[1,null,3]} columnGap={2} rowGap={5}  >
            <GridItem color={'red'}>
            <ProjectCard image={weather} blogUrl={'https://weather-app-six-green-76.vercel.app/'} title={'Weather Site'} bedge1={'vite+react'} bedge2={'chakraui'}  bedge3={'axios'} />
            </GridItem>
            <GridItem color={'red'}>
            <ProjectCard image={NoteApp} blogUrl={'https://deepak10100.github.io/my-website/Note.html'} title={"Note's Site"}  bedge1={'javascript'} bedge2={'CSS'}  bedge3={'HTML'} />
            </GridItem>
            <GridItem color={'red'}>
            <ProjectCard image={ProductPage} blogUrl={'https://deepak10100.github.io/my-website/ProductPage.html'} title={"Product Page"}  bedge1={'Tailwind Css'}   bedge3={'HTML'} />
            </GridItem>
            <GridItem color={'red'}>
            <ProjectCard image={Todo} blogUrl={'https://deepak10100.github.io/my-website/todo.html'} title={"Todo App"}  bedge1={'HTML'} bedge2={'CSS'}  bedge3={'Javascript'} />
            </GridItem>
            <GridItem color={'red'}>
            <ProjectCard image={Card} blogUrl={'https://deepak10100.github.io/my-website/newCard.html'} title={"Card"} bedge2={'CSS'}  bedge3={'HTML'} />
            </GridItem>
            <GridItem color={'red'}>
            <ProjectCard image={Blog} blogUrl={'https://deepak10100.github.io/my-website/blog.html'} title={"Blog Page"}  bedge1={'tailwind css'}  bedge3={'HTML'} />
            </GridItem>
            <GridItem color={'red'}>
            <ProjectCard image={Ecommerce} blogUrl={'https://react-project-one-wine.vercel.app/ecommerce'} title={"Ecommerce"}  bedge1={'tailwind css'}  bedge3={'HTML'} bedge4={'React'} bedge5={'JavaScript'} />
            </GridItem>
            <GridItem color={'red'}>
            <ProjectCard image={todoRedux} blogUrl={'https://react-project-one-wine.vercel.app/todo'} title={"Ecommerce"}  bedge1={'tailwind css'}  bedge3={'HTML'} bedge4={'React'} bedge5={'JavaScript'} />
            </GridItem>
            
    
          </SimpleGrid>
      </Stack>


  </>
    </>
  )
}

export default Project
