import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import data from '../../../data/data'
import Typed from 'react-typed'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../Home/Init.module.css'

const Init = () => {
    const language = useSelector((state) => state.language)
    const ref = useRef(null)
    const myTags = [
        'JavaScript',
        'CSS',
        'HTML',
        'C',
        'C++',
        'React',
        'Python',
        'Java',
        'git',
        'django',
        'Node.js',
        'OpenCV',
        'GCP',
        'MySQL',
        'jQuery',
    ]

    setTimeout(() => {
        const el = ref.current?.children.length
        if (!el) {const tagCloud = TagCloud('#content', myTags, {
            // radius in px
            radius: 300,

            // animation speed
            // slow, normal, fast
            maxSpeed: 'fast',
            initSpeed: 'fast',
            containerClass: styles.content,
            itemClass: styles.tags,
            // 0 = top
            // 90 = left
            // 135 = right-bottom
            direction: 135,

            // interact with cursor move on mouse out
            keep: true,
        })
        } 
    }, 3000)

    return (
        <Flex flexDirection={{base:'column', xl:'row'}}>
            {/* <Script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js" /> */}
            <Flex
                pt={{ base: '120px', md: '90px' }}
                height={{ base: '700px', md: '800px' }}
                pl={{ base: '2rem', md: '6rem' }}
                pr={{ base: '2rem', md: '6rem' }}
                as={motion.div}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
                id="home"
            >
                <Flex
                    flexDirection="column"
                    mt={{ base: '0', md: '4rem', lg: '6rem' }}
                    ml={{ base: '3', md: '6rem', lg: '8rem', xl:'6rem', xxxl:'15rem'}}
                    mr={{ base: '0' }}
                    w={{ base: '300px', md: '500px', lg: '600px', xl: '700px' }}
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
                {/* <World/> */}
            </Flex>
            <Box ref={ref} className={styles.content} id="content" display={{ base: 'none', xml:'flex'}}></Box>
        </Flex>
    )
}

export default Init
