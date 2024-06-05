import { Avatar, Button, ButtonGroup, Flex, IconButton, Input, VStack, useColorModeValue, useDisclosure, } from '@chakra-ui/react'
import React from 'react'
import {  AiOutlineMenuFold } from "react-icons/ai";
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import About from './About';
import { Link } from 'react-router-dom';
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <Flex padding={1} height={'50px'} justifyContent={'space-between'} bg={useColorModeValue("white", "gray.700")} alignItems={'center'} boxShadow={'lg'} width={'100vw'}  pos={'fixed'} top={0} zIndex={50} >
            <IconButton ref={btnRef}   onClick={onOpen} size={'md'} borderRadius={'50'} variant={'ghost'} fontSize={'lg'} ><AiOutlineMenuFold /></IconButton>
            <ColorModeSwitcher />
            
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> <Link onClick={onClose} to={'/'} ><Avatar  src='profile.png' /></Link> </DrawerHeader>

          <DrawerBody>
            <VStack>
           <ButtonGroup>
              <VStack>
              <Link to={'/about-me'}>
              <Button onClick={onClose} variant={'ghost'} >About Me</Button>
              </Link>
             <Link to={'contact-us'}>
             <Button onClick={onClose} variant={"ghost"} >Contact Me</Button>
             </Link>
              </VStack>
           </ButtonGroup>
            </VStack>
          </DrawerBody>

        
        </DrawerContent>
      </Drawer>
    
    </>
  )
}

export default Navbar
