import { Box, Button, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../../data/data'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Contact = () => {
    const language = useSelector((state) => state.language)
    return (
        <Flex flexDirection="column" alignItems="center" id="contact">
            <Divider
                as={motion.hr}
                borderColor="primary"
                width="72%"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 1.15s"
            />
            <Text
                as={motion.p}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 1.15s"
                fontSize={{ base: '1.6rem', md: '1.9rem' }}
                fontWeight="700"
                color="primary"
                fontFamily="heading"
                mt={{ base: '2rem', md: '4rem' }}
                mb={{ base: '0rem', md: '1rem' }}
            >
                {data[language].contact.title}
            </Text>
            <Flex justifyContent="center" alignItems="center" flexDirection="column">
                <Text
                    mt='2rem'
                    as={motion.p}
                    transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    textAlign="center"
                    w="60%"
                    fontSize={{ base: '1rem', md: '1.2rem' }}
                >
                    {data[language].contact.description[0]}
                </Text>
                <Text
                    as={motion.p}
                    transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    textAlign="center"
                    // w="100%"
                    mt='1.5rem'
                    fontFamily='heading'
                    fontSize={{ base: '1.2rem', md: '1.4rem' }}
                    opacity="0.3"
                >
                    {data[language].contact.description[1]}
                </Text>
                <Button
                    as={motion.button}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
                    color="primary"
                    bg="none"
                    _hover={{ bg: 'rgba(30, 144, 255, 0.3)' }}
                    m="3rem 0"
                    w={{ base: '230px', md: '230px' }}
                    h="40px"
                    border="1px solid #1E90FF"
                    fontFamily="heading"
                    fontSize={{ base: '1rem', md: '1.2rem' }}
                >
                    <Link href="mailto:alejandrodamen3@gmail.com">
                        <a target="_blank">{data[language].contact.button}</a>
                    </Link>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Contact
