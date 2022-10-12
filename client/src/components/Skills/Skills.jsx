import { Box, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../../data/data'
import React from 'react'
import { useSelector } from 'react-redux'

const Skills = () => {
    const language = useSelector((state) => state.language)
    return (
        <Flex flexDirection="column" alignItems="center" id="skills">
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
                {data[language].skills.title}
            </Text>
            <Grid
                templateColumns={{ base: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                gap={{ base: '8', md: '12', lg: '20' }}
                mt="3rem"
                ml={{ base: '2rem', md: '6rem', lg: '6rem' }}
                mr={{ base: '2rem', md: '6rem', lg: '6rem' }}
                pl={{ base: '.5rem' }}
                pr={{ base: '.5rem' }}
                mb={{ base: '6rem', md: '8rem' }}
            >
                {data[language].skills.skills.map((skill,i) => {
                    return (
                        <Box
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            key={i}
                            filter='grayscale(2)'
                            transition='all .4s ease-in-out'
                            _hover={{ filter: 'grayscale(0)', transform:'scale(1.25)',  }}
                        >
                            <Image
                                src={skill}
                                alt='skill'
                                w={{ sm: '137px', m: '190px', md: '211px', xml: '235px' }}
                                h={{ sm: '65px', m: '81px', md: '91px', xml: '101px' }}
                            />
                        </Box>
                    )
                })}
            </Grid>
        </Flex>
    )
}

export default Skills
