import { Box, Drawer, Flex, FormControl, Switch } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../Navbar/Navbar.module.css'
import DrawerMenu from './DrawerMenu/DrawerMenu'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../store/language'

const Navbar = () => {
    const str = '< Ad />'
    const dispatch = useDispatch()
    const language = useSelector((state) => state.language)
    const handleLanguage = () => {
        language ? dispatch(setLanguage(false)) : dispatch(setLanguage(true))
    }
    return (
        <Flex>
            {' '}
            <Flex
                as="nav"
                justifyContent="space-between"
                alignItems="center"
                padding="1.5rem 3rem"
                position="fixed"
                width="100vw"
                top={1}
                backdropFilter="blur(20px)"
                bg="transparent"
                zIndex="999"
            >
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
                            <a>{language ? <>Sobre mi</> : <>About me</>}</a>
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
                            <a>{language ? <>Proyectos</> : <>Projects</>}</a>
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
                            <a>{language ? <>Tecnologías</> : <>Skills</>}</a>
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
                            <a>{language ? <>Curriculum</> : <>Resume</>}</a>
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
                            <a>{language ? <>Contacto</> : <>Contact</>}</a>
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
