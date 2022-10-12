import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { Github } from '../../../public/assets/icons/github'
import { Website } from '../../../public/assets/icons/website'
import styles from './ProjectsCard.module.scss'

const ProjectsCard = ({data, key}) => {
    return (
        <Box
            className={styles.card}
            as={motion.div}
            transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={key}
        >
            <Image
                alt="Project portfolio Alejandro D'Amen"
                as={motion.img}
                src={data.path}
                width={{lg: '500px', xxl: '650px' }}
                height={{lg: '270px', xxl: '320px' }}
                border="1px solid #1E90FF"
                borderRadius="7px"
                transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={styles.mainImg}
            />
            <Box className={styles.info} mt={{ base: '3rem' }}>
                <Text
                    className={styles.title}
                    fontSize={{ base:'.9rem',sm: '1.1rem', md: '1.3rem' }}
                    fontWeight="500"
                    fontFamily="heading"
                >
                    {data.name}
                </Text>
                <Text
                    as="p"
                    maxW="500px"
                    color="white"
                    fontFamily="body"
                    fontSize={{ base:'.6rem',sm: '0.8rem', md: '1rem' }}
                    className={styles.description}
                    mt={{ base: '.5rem', md: '.5rem' }}
                >
                    {data.description}
                </Text>
                <Box mt={{ base: '.5rem', md: '.8rem' }} display={{base:'none', sm:'flex'}}>
                    {data.skills.map((skill, i) => {
                        return (
                            <Text
                                key={i}
                                as="span"
                                mr=".8rem"
                                maxW="500px"
                                color="primary"
                                fontSize={{ base: '0.8rem', md: '1rem' }}
                                className={styles.description}
                                fontFamily="body"
                                fontWeight="600"
                            >
                                {skill}
                            </Text>
                        )
                    })}
                </Box>
                <Flex w="30px" h="30px" fill="primary" cursor="pointer" mt="1rem" ml="5px">
                    <Box mr="2rem">
                        <Link href={data.linkGit}>
                            <a target="_blank">
                                <Github
                                    w={{ base: '21px', md: '25px' }}
                                    h={{ base: '21px', md: '25px' }}
                                    fill="white"
                                    _hover={{ fill: 'primary' }}
                                />
                            </a>
                        </Link>
                    </Box>
                    <Box>
                        <Link href={data.linkWeb}>
                            <a target="_blank">
                                <Website
                                    w={{ base: '20px', md: '25px' }}
                                    h={{ base: '19px', md: '24px' }}
                                    fill="white"
                                    _hover={{ fill: 'primary' }}
                                />
                            </a>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default ProjectsCard
