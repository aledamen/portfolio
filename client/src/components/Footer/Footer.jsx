import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import data from '../../../data/data'

const Footer = () => {
    const language = useSelector((state) => state.language)
    return (
        <Flex
            flexDirection="column"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            mt={{ base: '5rem', md: '10rem' }}
            pb="2rem"
            h={{base:'120px'}}
        >
            <Text
                as={motion.p}
                transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                textAlign="center"
                fontSize={{ base: '1rem', md: '1.2rem' }}
                opacity="0.3"
                fontFamily="heading"
                color="rgba(255,255,255,0.5)"
            >
                {data[language].footer.title}
            </Text>
            <Box
                as={motion.div}
                transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <Image
                    alt='next.js'
                    src="/assets/skills/next2.png"
                    w={{ base: '137px', m: '171px', md: '211px' }}
                    h={{ base: '59px', m: '73px', md: '91px' }}
                />
            </Box>

            <Text
                as={motion.p}
                transition="opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.15s"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                textAlign="center"
                fontSize='.7rem'
                mt='.35rem'
                opacity="0.3"
                fontFamily="heading"
                color="rgba(255,255,255,0.5)"
            >
                {data[language].footer.copyright}
            </Text>
        </Flex>
    )
}

export default Footer
