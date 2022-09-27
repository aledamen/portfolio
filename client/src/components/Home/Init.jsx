import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import data from '../../../data/data'
import Typed from 'react-typed'
import { motion } from 'framer-motion'

const Init = () => {
    const language = useSelector((state) => state.language)
    return (
        <Flex
            mt="90px"
            height={{base:'600px',md:'700px'}}
            ml={{ base: '2rem', md: '6rem' }}
            mr={{ base: '2rem', md: '6rem' }}
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
        >
            <Flex flexDirection="column" mt={{ base: '0', md: '4rem', lg: '6rem' }} ml={{ base: '0', md: '4rem', lg: '6rem' }} mr={{ base: '0', md: '4rem', lg: '6rem' }} >
                <Text as="p" fontSize={{ base: '1.2rem', md: '1.5rem' }} fontWeight="700" color="primary" mt="0.4rem 0">
                    {data[language].init[0]}
                </Text>
                <Text as="p" fontSize={{ base: '4rem', md: '5rem' }} fontWeight="700" mt="0.4rem 0">
                    {data[language].init[1]}
                </Text>
                <Text as="p" fontSize={{ base: '1.4rem', md: '2rem' }} m="0.4rem 0" fontWeight="700">
                    {data[language].init[2]}
                    <Typed strings={data[language].init[3]} typeSpeed={150} backSpeed={50} loop />
                </Text>
                <Text
                    as="p"
                    fontSize={{ base: '1.2rem', md: '1.5rem' }}
                    m="0.4rem 0"
                    color="primary"
                    fontWeight="700"
                    w="70%"
                >
                    {data[language].init[4]}
                </Text>
                <Button
                    color="primary"
                    bg="none"
                    _hover={{ bg: 'rgba(104,179,173,.4)' }}
                    m="2rem 0"
                    w="300px"
                    h="40px"
                    border="1px solid #00f8ae"
                >
                    {data[language].init[5]}
                </Button>
            </Flex>
        </Flex>
    )
}

export default Init
