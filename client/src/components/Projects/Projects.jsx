import { Box, Button, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import data from '../../../data/data'
import { Github } from '../../../public/assets/icons/github'
import { Website } from '../../../public/assets/icons/website'
import styles from './Project.module.scss'

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
                mt="3rem"
                ml={{ base: '2rem', md: '6rem', lg: '6rem' }}
                mr={{ base: '2rem', md: '6rem', lg: '6rem' }}
                pl={{ base: '.5rem' }}
                pr={{ base: '.5rem' }}
                mb="2rem"
            >
                {/* <Box
                    // boxShadow="0px 7px 10px rgba(black, 0.5)"
                    // position="relative"
                    // _hover={{ transform: 'translateY(20px)', transition: '0.4s ease' }}
                    // _before={{ opacity: '1' }}
                    className={styles.card}
                >
                    <Image
                        alt="Project portfolio Alejandro D'Amen"
                        as={motion.img}
                        src="/assets/images/portfolio.png"
                        width={{ lg: '500px', xxl: '650px' }}
                        height={{ lg: '270px', xxl: '320px' }}
                        border="1px solid #1E90FF"
                        borderRadius="7px"
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={styles.mainImg}
                    />
                    <Box
                        // p="1.5rem"
                        // position="absolute"
                        // left="0"
                        // top="2"
                        // zIndex="2"
                        // opacity="0"
                        // height='auto'
                        // _hover={{
                        //     opacity: '1',
                        //     backdropFilter: 'blur(8px)',
                        //     transform: 'translateY(-8px)',
                        //     borderRadius: '7px',
                        //     transition: '0.4s ease',
                        // }}
                        // width='auto'
                        // pt='80px'
                        className={styles.info}
                    >
                        <Box
                            as="p"
                            maxW="500px"
                            color="white"
                            fontFamily="body"
                            fontSize={{ base: '0.8rem', md: '1rem' }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga. Repellendus molestias
                            eos, illum vero dolore amet temporibus odit eligendi.
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Image
                        alt="Project revistaWOW Alejandro D'Amen"
                        as={motion.img}
                        src="/assets/images/revistaWOW.png"
                        width={{ lg: '500px', xxl: '650px' }}
                        height={{ lg: '270px', xxl: '320px' }}
                        border="1px solid #1E90FF"
                        borderRadius="7px"
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={styles.mainImg}
                    />
                    <Box
                        // p="1.5rem"
                        // position="absolute"
                        // left="0"
                        // top="2"
                        // zIndex="2"
                        // opacity="0"
                        // height='auto'
                        // _hover={{
                        //     opacity: '1',
                        //     backdropFilter: 'blur(8px)',
                        //     transform: 'translateY(-8px)',
                        //     borderRadius: '7px',
                        //     transition: '0.4s ease',
                        // }}
                        // width='auto'
                        // pt='80px'
                        className={styles.info}
                    >
                        <Box
                            as="p"
                            maxW="500px"
                            color="white"
                            fontFamily="body"
                            fontSize={{ base: '0.8rem', md: '1rem' }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga. Repellendus molestias
                            eos, illum vero dolore amet temporibus odit eligendi.
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Image
                        alt="Project e-commerce Alejandro D'Amen"
                        as={motion.img}
                        src="/assets/images/e-commerce.png"
                        width={{ lg: '500px', xxl: '650px' }}
                        height={{ lg: '270px', xxl: '320px' }}
                        border="1px solid #1E90FF"
                        borderRadius="7px"
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    />
                </Box>
                <Box>
                    <Image
                        alt="Project TMDB Alejandro D'Amen"
                        as={motion.img}
                        src="/assets/images/TMDB.png"
                        width={{ lg: '500px', xxl: '650px' }}
                        height={{ lg: '270px', xxl: '320px' }}
                        border="1px solid #1E90FF"
                        borderRadius="7px"
                        transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.20s"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    />
                </Box> */}
                {data[language].projects.projects.map((ele, i) => {
                    return (
                        <Box
                            className={styles.card}
                            as={motion.div}
                            transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            key={i}
                        >
                            <Image
                                alt="Project portfolio Alejandro D'Amen"
                                as={motion.img}
                                src={ele.path}
                                width={{ lg: '500px', xxl: '650px' }}
                                height={{ lg: '270px', xxl: '320px' }}
                                border="1px solid #1E90FF"
                                borderRadius="7px"
                                transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className={styles.mainImg}
                            />
                            <Box className={styles.info}>
                                <Text
                                    className={styles.title}
                                    fontSize={{ base: '1.1rem', md: '1.3rem' }}
                                    fontWeight="500"
                                    fontFamily="heading"
                                >
                                    {ele.name}
                                </Text>
                                <Text
                                    as="p"
                                    maxW="500px"
                                    color="white"
                                    fontFamily="body"
                                    fontSize={{ base: '0.8rem', md: '1rem' }}
                                    className={styles.description}
                                >
                                    {ele.description}
                                </Text>
                                <Box mt="1rem" >
                                    {ele.skills.map((skill, i) => {
                                        return (
                                            <Text
                                                key={i}
                                                as="span"
                                                mr="1rem"
                                                maxW="500px"
                                                color="primary"
                                                fontSize={{ base: '1.1rem', md: '1.3rem' }}
                                                className={styles.description}
                                                fontFamily='body'
                                                fontWeight='600'
                                            >
                                                {skill}
                                            </Text>
                                        )
                                    })}
                                </Box>
                                <Flex w="30px" h="30px" fill="primary" cursor="pointer" mt="2rem" ml="5px">
                                    <Box mr="2rem">
                                        <Link href={ele.linkGit}>
                                            <a target="_blank">
                                                <Github w="25px" h="25px" fill="white" _hover={{ fill: 'primary' }} />
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link href={ele.linkWeb}>
                                            <a target="_blank">
                                                <Website w="25px" h="24px" fill="white" _hover={{ fill: 'primary' }} />
                                            </a>
                                        </Link>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    )
                })}
            </Grid>
        </Flex>
    )
}

export default Projects
