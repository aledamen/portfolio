import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../../data/data'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const AboutMe = () => {
    const language = useSelector((state) => state.language)
    return (
        <Flex flexDirection="column" alignItems="center" id="aboutMe">
            <Divider
                as={motion.hr}
                borderColor="primary"
                width="72%"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
            />
            <Text
                as={motion.p}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
                fontSize={{ base: '1.6rem', md: '1.9rem' }}
                fontWeight="700"
                color="primary"
                fontFamily="heading"
                mt={{ base: '2rem', md: '4rem' }}
            >
                {data[language].aboutMe[0]}
            </Text>
            <Flex justifyContent="center" flexDirection={{ base: 'column', lg: 'row' }} mb="3rem">
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    mt={{ base: '2rem', md: '4.5rem' }}
                    ml={{ base: '0', lg: '10rem' }}
                >
                    <Box height={{ base: '270px', lg: '300px' }} >
                        <Image
                            alt="Alejandro D'Amen"
                            as={motion.img}
                            src="/assets/images/me.jpeg"
                            width={{ base: '180px', lg: '230px' }}
                            height={{ base: '240px', lg: '300px' }}
                            border="1px solid #1E90FF"
                            borderRadius="7px"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
                        />
                    </Box>
                    <Button
                        as={motion.button}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
                        color="primary"
                        bg="none"
                        _hover={{ bg: 'rgba(30, 144, 255, 0.3)' }}
                        m="3rem 0"
                        w={{ base: '230px', md: '230px' }}
                        h="40px"
                        border="1px solid #1E90FF"
                        fontFamily="heading"
                        fontSize={{ base: '1rem', md: '1.2rem' }}
                        display={{ base: 'none', lg: 'flex' }}
                    >
                        <Link href="https://drive.google.com/uc?id=1MW6ALdK_VvTtxZ72J450UWBjkMGoB_xm&export=download"> 
                            <a> {data[language].aboutMe[4]}</a>
                        </Link>
                    </Button>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={{ base: '2rem', lg: '0rem' }}
                    fontSize={{ base: '1rem', md: '1.1rem' }}
                    fontWeight="500"
                    width={{ base: '100%', lg: '40%' }}
                    pl={{ base: '1rem', md: '2rem', lg: '5rem' }}
                    pr={{ base: '.5rem' }}
                >
                    <Text
                        as={motion.p}
                        width="80%"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                        fontWeight="400"
                    >
                        {data[language].aboutMe[1]}
                    </Text>
                    <Text
                        as={motion.p}
                        width="80%"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
                        fontWeight="400"
                    >
                        {data[language].aboutMe[2]}
                    </Text>
                    <Text
                        as={motion.p}
                        width="80%"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
                        fontWeight="400"
                    >
                        {data[language].aboutMe[3]}
                    </Text>
                    <Button
                        as={motion.button}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.30s"
                        color="primary"
                        bg="none"
                        _hover={{ bg: 'rgba(30, 144, 255, 0.3)' }}
                        m="3rem 0"
                        w={{ base: '230px', md: '230px' }}
                        h="40px"
                        border="1px solid #1E90FF"
                        fontFamily="heading"
                        fontSize={{ base: '1rem', md: '1.2rem' }}
                        display={{ base: 'flex', lg: 'none' }}
                    >
                        <Link href="https://drive.google.com/uc?id=1MW6ALdK_VvTtxZ72J450UWBjkMGoB_xm&export=download">
                            <a> {data[language].aboutMe[4]}</a>
                        </Link>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AboutMe
