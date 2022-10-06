import { Box, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import data from '../../../data/data'
import { Github } from '../../../public/assets/icons/github'
import { Website } from '../../../public/assets/icons/website'
import ProjectsCard from '../../commons/ProjectsCard/ProjectsCard'
// import styles from './Project.module.scss'

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
                mb={{ base: '0rem', md: '2rem' }}
            >
                {data[language].projects.title}
            </Text>
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
                gap={{ base: '8', md: '10', lg: '12' }}
                mt='3rem'
                ml={{ base: '2rem', md: '6rem', lg: '6rem' }}
                mr={{ base: '2rem', md: '6rem', lg: '6rem' }}
                pl={{ base: '.5rem' }}
                pr={{ base: '.5rem' }}
                mb={{base:'6rem', md:'8rem'}}
            >
                {data[language].projects.projects.map((ele, i) => {
                    return (
                        <ProjectsCard data={ele} key={i} />
                    )
                })}
            </Grid>
        </Flex>
    )
}

export default Projects
