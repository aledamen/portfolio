import { Box, Divider, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { Github } from '../../../public/assets/icons/github'
import { Linkedin } from '../../../public/assets/icons/linkedin'
import { Mail } from '../../../public/assets/icons/mail'
import { Whatsapp } from '../../../public/assets/icons/whatsapp'

const ContactLine = () => {
    return (
        <Flex
            display={{ base: 'none', lg: 'flex' }}
            flexDirection="column"
            position="fixed"
            left="3rem"
            top="18rem"
            alignItems="center"
            zIndex="999"
            color="primary"
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
        >
            <Box w="30px" h="30px" fill="primary" cursor="pointer" mb="2.5rem" ml="5px">
                <Link href="https://github.com/aledamen?tab=repositories">
                    <a target="_blank">
                        <Github w="25px" h="25px" fill="primary" />
                    </a>
                </Link>
            </Box>
            <Box w="30px" h="30px" fill="primary" cursor="pointer" mb="2.5rem" ml="5px">
                <Link href="https://www.linkedin.com/in/alejandro-d-amen-982630174/">
                    <a target="_blank">
                        <Linkedin w="25px" h="25px" fill="primary" />
                    </a>
                </Link>
            </Box>
            <Box w="30px" h="30px" cursor="pointer" mb="2.5rem" ml="5px">
                <Link href="https://wa.me/+5491126306505">
                    <a target="_blank">
                        <Whatsapp w="25px" h="25px" fill="primary" />
                    </a>
                </Link>
            </Box>
            <Box w="30px" h="30px" cursor="pointer" mb="2.5rem" ml="5px">
                <Link href="mailto:alejandrodamen3@gmail.com">
                    <a target="_blank">
                        <Mail w="25px" h="25px" fill="primary"/>
                    </a>
                </Link>
            </Box>
            <Divider borderColor="primary" orientation="vertical" height="100vh" borderWidth="1px" />
        </Flex>
    )
}

export default ContactLine
