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
                mb={{ base: '1rem', md: '2rem' }}
            >
                {data[language].projects[0]}
            </Text>
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
                gap={{ base: '8', md: '10', lg: '12' }}
                mt="3rem"
                ml={{ base: '2rem', md: '6rem', lg: '6rem' }}
                mr={{ base: '2rem', md: '6rem', lg: '6rem' }}
            >
                <Box>
                    <Image
                        alt="Project portfolio Alejandro D'Amen" 
                        as={motion.img}
                        src="/assets/images/portfolio.png"
                        width={{ lg: '500px', xxl: '650px' }}
                        height={{ lg: '260px', xxl: '320px' }}
                        border="1px solid #1E90FF"
                        borderRadius="7px"
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    />
                </Box>
                <Image
                    alt="Project revistaWOW Alejandro D'Amen" 
                    as={motion.img}
                    src="/assets/images/revistaWOW.png"
                    width={{ lg: '500px', xxl: '650px' }}
                    height={{ lg: '260px', xxl: '320px' }}
                    border="1px solid #1E90FF"
                    borderRadius="7px"
                    transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                />
                <Image
                    alt="Project e-commerce Alejandro D'Amen" 
                    as={motion.img}
                    src="/assets/images/e-commerce.png"
                    width={{ lg: '500px', xxl: '650px' }}
                    height={{ lg: '260px', xxl: '320px' }}
                    border="1px solid #1E90FF"
                    borderRadius="7px"
                    transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                />
                <Image
                    alt="Project TMDB Alejandro D'Amen"
                    as={motion.img}
                    src="/assets/images/TMDB.png"
                    width={{ lg: '500px', xxl: '650px' }}
                    height={{ lg: '260px', xxl: '320px' }}
                    border="1px solid #1E90FF"
                    borderRadius="7px"
                    transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                />
            </Grid>
        </Flex>
    )
}

export default Projects
