import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../../data/data'
import React from 'react'
import { useSelector } from 'react-redux'

const AboutMe = () => {
    const language = useSelector((state) => state.language)
    return (
        <Flex flexDirection="column" alignItems={{ md: 'center' }} pl={{ base: '3rem' }} id='aboutMe'>
            <Divider
                as={motion.hr}
                borderColor="primary"
                width="70%"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
            />
            <Flex flexDirection="column" alignItems={{ md: 'center' }} mt={{base:"2rem", md:"4rem"}}>
                <Text
                    as={motion.p}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
                    fontSize={{ base: '1.6rem', md: '1.9rem' }}
                    fontWeight="700"
                    color="primary"
                    fontFamily='heading'
                >
                    {data[language].aboutMe[0]}
                </Text>

                <Flex
                    flexDirection="column"
                    alignItems={{ md: 'center' }}
                    mt={{base:"2rem", md:"4rem"}}
                    fontSize={{ base: '1rem', md: '1.3rem' }}
                    fontWeight="500"
                >
                    <Text
                        as={motion.p}
                        width="80%"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
                        fontWeight="500"
                    >
                        {data[language].aboutMe[1]}
                    </Text>
                    <Text
                        as={motion.p}
                        width="80%"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.35s"
                        fontWeight="500"
                    >
                        {data[language].aboutMe[2]}
                    </Text>
                    <Text
                        as={motion.p}
                        width="80%"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.45s"
                        fontWeight="500"
                    >
                        {data[language].aboutMe[3]}
                    </Text>
                    <Button
                        as={motion.button}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.55s"
                        color="primary"
                        bg="none"
                        _hover={{ bg: 'rgba(30, 144, 255, 0.3)' }}
                        m="3rem 0"
                        w={{base:"200px",md:"300px"}}
                        h="40px"
                        border="1px solid #1E90FF"
                        fontFamily='heading'
                        fontSize={{base:'1rem', md:'1.2rem'}}
                    >
                        {data[language].aboutMe[4]}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AboutMe
