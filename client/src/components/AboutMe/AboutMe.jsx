import { Divider, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../../data/data'
import React from 'react'
import { useSelector } from 'react-redux'

const AboutMe = () => {
    const language = useSelector((state) => state.language)
    return (
        <Flex flexDirection="column" alignItems={{ md: 'center' }} ml={{ base: '2rem' }}>
            <Divider
                as={motion.hr}
                borderColor="primary"
                width="70%"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
            />
            <Flex flexDirection="column" alignItems={{ md: 'center' }} mt="4rem">
                <Text
                    as={motion.p}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
                    fontSize={{ base: '1.8rem', md: '2.1rem' }}
                    fontWeight="700"
                    color="primary"
                >
                    {data[language].aboutMe[0]}
                </Text>

                <Flex
                    flexDirection="column"
                    alignItems={{ md: 'center' }}
                    mt="4rem"
                    fontSize={{ base: '1.2rem', md: '1.5rem' }}
                    fontWeight="500"
                >
                    <Text
                        as={motion.p}
                        width="80%"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
                    >
                        {data[language].aboutMe[1]}
                    </Text>
                    <Text
                        as={motion.p}
                        width="80%"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.35s"
                    >
                        {data[language].aboutMe[2]}
                    </Text>
                    <Text
                        as={motion.p}
                        width="80%"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.45s"
                    >
                        {data[language].aboutMe[3]}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AboutMe
