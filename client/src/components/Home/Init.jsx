import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import data from '../../../data/data'
import Typed from 'react-typed'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Tag from '../TagCloud/Tag'

const Init = () => {
    const language = useSelector((state) => state.language)
    return (
        <Flex
            id="home"
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
            h={{base:'900px', md:'1000px'}}
        >
            <Flex
                pt={{ base: '200px', md: '150px', lg:'170px' }}
                height={{ base: '700px', md: '800px' }}
                width={{ base: '350px', md: '700px', lg: '900px', xl: '1200px' }}
                pl={{ base: '2rem', md: '6rem' }}
                pr={{ base: '2rem', md: '6rem' }}
            >
                <Flex
                    flexDirection="column"
                    mt={{ base: '0', md: '4rem', lg: '6rem' }}
                    ml={{ base: '2rem', m: '6rem', md: '8rem', lg: '8rem', xl: '6rem', xxxl: '16rem' }}
                    mr={{ base: '0' }}
                    w={{ base: '400px', md: '500px', lg: '500px', xl: '700px' }}
                >
                    <Text
                        as="p"
                        fontSize={{ base: '1.2rem', md: '1.4rem' }}
                        fontWeight="500"
                        color="primary"
                        mt="0.4rem 0"
                        fontFamily="heading"
                    >
                        {data[language].init[0]}
                    </Text>
                    <Text as="p" fontSize={{ base: '3rem', md: '4rem' }} fontWeight="500" mt="0.4rem 0">
                        {data[language].init[1]}
                    </Text>
                    <Text as="p" fontSize={{ base: '1.2rem', md: '1.8rem' }} m="0.4rem 0" fontWeight="500">
                        {data[language].init[2]}
                        <Typed strings={data[language].init[3]} typeSpeed={150} backSpeed={50} loop />
                    </Text>
                    <Text
                        as="p"
                        fontSize={{ base: '1.2rem', md: '1.5rem' }}
                        m="0.4rem 0"
                        color="primary"
                        fontWeight="500"
                    >
                        {data[language].init[4]}
                    </Text>
                    <Button
                        color="primary"
                        bg="none"
                        _hover={{ bg: 'rgba(30, 144, 255, 0.3)' }}
                        m="2rem 0"
                        w={{ base: '200px', md: '300px' }}
                        h="40px"
                        border="1px solid #1E90FF"
                        fontFamily="heading"
                        fontSize={{ base: '1rem', md: '1.2rem' }}
                    >
                        <Link href="#projects">
                            <a>{data[language].init[5]}</a>
                        </Link>
                    </Button>
                </Flex>
            </Flex>
            <Tag />
        </Flex>
    )
}

export default Init
