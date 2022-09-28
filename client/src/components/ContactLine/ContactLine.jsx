import { Box, Divider, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { Github } from '../../../public/assets/icons/github'
import { Linkedin } from '../../../public/assets/icons/linkedin'
import { Mail } from '../../../public/assets/icons/mail'
import { Whatsapp } from '../../../public/assets/icons/whatsapp'

const ContactLine = () => {
    return (
        <Flex
        display={{ base: 'none', md: 'flex' }}
            flexDirection="column"
            position="fixed"
            left="3rem"
            top="18rem"
            alignItems="center"
            zIndex='999'
            color="primary"
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
        >
            <Box w='30px' h='30px' fill='primary' cursor="pointer" mb="2.5rem" ml='5px'><Github w="25px" h="25px" _hover={{width:'27px', height:'27px'}}/></Box>
            <Box w='30px' h='30px' fill='primary' cursor="pointer" mb="2.5rem" ml='5px'><Linkedin w="25px" h="25px" _hover={{width:'27px', height:'27px'}} /></Box>
            <Box w='30px' h='30px' fill='primary' cursor="pointer" mb="2.5rem" ml='5px'><Whatsapp w="25px" h="25px" _hover={{width:'27px', height:'27px'}}/></Box>
            <Box w='30px' h='30px' fill='primary' cursor="pointer" mb="2.5rem" ml='5px'><Mail w="25px" h="25px" _hover={{width:'27px', height:'27px'}}/></Box>
            <Divider borderColor="primary" orientation="vertical" height="100vh" borderWidth="1px" />
        </Flex>
    )
}

export default ContactLine
