import { Box, Button, Divider, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import data from '../../../data/data'

const Projects = () => {
    const language = useSelector((state) => state.language)
    return (
        <Flex flexDirection="column" alignItems="center" id="projects">
            <Divider
                as={motion.hr}
                borderColor="primary"
                width="72%"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
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
                {data[language].projects[0]}
            </Text>
            {/* <Flex justifyContent="center" flexDirection={{ base: 'column', lg: 'row' }}>
               
            </Flex> */}
            <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)"}} gap={{base:'6', md:'12',lg:'16'}} mt='3rem'>
            <Image
                        src="/assets/images/me.jpeg"
                        width={{base:'200px',lg:"230px"}}
                        height={{base:'270px',lg:"300px"}}
                        border="1px solid #1E90FF"
                        borderRadius="7px"
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.35s"
                />
                                    <Image
                        src="/assets/images/me.jpeg"
                        width={{base:'200px',lg:"230px"}}
                        height={{base:'270px',lg:"300px"}}
                        border="1px solid #1E90FF"
                        borderRadius="7px"
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.35s"
                />
                                    <Image
                        src="/assets/images/me.jpeg"
                        width={{base:'200px',lg:"230px"}}
                        height={{base:'270px',lg:"300px"}}
                        border="1px solid #1E90FF"
                        borderRadius="7px"
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.35s"
                />
                                    <Image
                        src="/assets/images/me.jpeg"
                        width={{base:'200px',lg:"230px"}}
                        height={{base:'270px',lg:"300px"}}
                        border="1px solid #1E90FF"
                        borderRadius="7px"
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.35s"
                    />
            </Grid>
        </Flex>
    )
}

export default Projects
