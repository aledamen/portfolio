import { Box, Drawer, Flex, FormControl, Grid, GridItem, Switch } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../Navbar/Navbar.module.css'
import DrawerMenu from './DrawerMenu/DrawerMenu'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../store/language'
import data from '../../../data/data'
import { motion } from 'framer-motion'
import ProgressBar from 'react-progressbar-on-scroll'
import styled from '../../../styles/Fonts.module.css'

const Navbar = () => {
    const str = '< Ad />'
    const dispatch = useDispatch()
    const language = useSelector((state) => state.language)
    const handleLanguage = () => {
        language === 'es' ? dispatch(setLanguage('en')) : dispatch(setLanguage('es'))
    }
    return (
        <Flex
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition="background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s"
        >
            <Flex
                as="nav"
                justifyContent="space-between"
                alignItems="center"
                padding="1.5rem 3rem"
                position="fixed"
                width="100vw"
                top={0}
                backdropFilter="blur(20px)"
                bg="transparent"
                zIndex="999"
            >
                <ProgressBar  color='#1E90FF'/>
                <Link href="#init" color='primary'>
                    <a className={styles.logo}>{str}</a>
                </Link>
                <Flex display={{ base: 'none', lg: 'flex' }} justifyContent="space-between" fontFamily='heading'>
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary'}}
                    >
                        <Link href="#home">
                            <a>{data[language].navbar[0]}</a>
                        </Link>
                    </Box>
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary'}}
                    >
                        <Link href="#aboutMe">
                            <a>{data[language].navbar[1]}</a>
                        </Link>
                    </Box>
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary'}}
                    >
                        <Link href="#projects">
                            <a>{data[language].navbar[2]}</a>
                        </Link>
                    </Box>
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary'}}
                    >
                        <Link href="#skills">
                            <a>{data[language].navbar[3]}</a>
                        </Link>
                    </Box>
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary'}}
                    >
                        <Link href="#contact">
                            <a>{data[language].navbar[4]}</a>
                        </Link>
                    </Box>
                    <Box as="span" display="flex" fontSize="1.1rem" fontWeight="500" _hover={{ color: 'primary' }}>
                        <FormControl display="flex" alignItems="center">
                            ES
                            <Switch mr="7px" ml="7px" colorScheme="facebook" onChange={() => handleLanguage()} />
                            EN
                        </FormControl>
                    </Box>                       
                </Flex>
                <DrawerMenu />
            </Flex>
        </Flex>
    )
}

export default Navbar
