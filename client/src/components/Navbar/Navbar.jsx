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
                <ProgressBar  color='#00f8ae'/>
                <Link href="/">
                    <a className={styles.logo}>{str}</a>
                </Link>
                <Flex display={{ base: 'none', md: 'flex' }} justifyContent="space-between">
              
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary' }}
                    >
                        <Link href="/">
                            <a>{data[language].navbar[0]}</a>
                        </Link>
                    </Box>
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary' }}
                    >
                        <Link href="/">
                            <a>{data[language].navbar[1]}</a>
                        </Link>
                    </Box>
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary' }}
                    >
                        <Link href="/">
                            <a>{data[language].navbar[2]}</a>
                        </Link>
                    </Box>
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary' }}
                    >
                        <Link href="/">
                            <a>{data[language].navbar[3]}</a>
                        </Link>
                    </Box>
                    <Box
                        as="span"
                        fontSize="1.1rem"
                        mr={{ base: '20px', lg: '50px' }}
                        fontWeight="500"
                        _hover={{ color: 'primary' }}
                    >
                        <Link href="/">
                            <a>{data[language].navbar[4]}</a>
                        </Link>
                    </Box>
                    <Box as="span" display="flex" fontSize="1.1rem" fontWeight="500" _hover={{ color: 'primary' }}>
                        <FormControl display="flex" alignItems="center">
                            EN
                            <Switch mr="5px" ml="5px" colorScheme="whatsapp" onChange={() => handleLanguage()} />
                            ES
                        </FormControl>
                        </Box>                       
                </Flex>
                <DrawerMenu />
            </Flex>
        </Flex>
    )
}

export default Navbar
