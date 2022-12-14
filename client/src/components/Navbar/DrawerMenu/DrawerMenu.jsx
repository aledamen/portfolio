import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Flex,
    Box,
    FormControl,
    Switch,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../../store/language'
import data from '../../../../data/data'

const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const aboutMe = useRef()
    const dispatch = useDispatch()
    const language = useSelector((state) => state.language)

    const handleLanguage = () => {
        language === 'es' ? dispatch(setLanguage('en')) : dispatch(setLanguage('es'))
    }

    return (
        <Flex display={{ base: 'block', lg: 'none' }} as="nav" bg="none">
            {!isOpen && <HamburgerIcon ref={btnRef} onClick={onOpen} cursor="pointer" w="30px" h="30px" />}
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                variant="xxs"
                initialFocusRef={aboutMe}
            >
                <DrawerOverlay />

                <DrawerContent fontFamily='heading'>
                    <DrawerCloseButton fontSize="1rem" fontWeight="500" />
                    <Flex flexDirection="column" alignItems="center">
                        <Box mt="50px" fontSize="1.1rem" fontWeight="500">
                            <Link href="#home" >
                            <a>{data[language].navbar[0]}</a>
                            </Link>
                        </Box>
                        <Box mt={{base:"50px", md:"70px"}} fontSize="1.1rem" fontWeight="500">
                            <Link href="#aboutMe">
                            <a>{data[language].navbar[1]}</a>
                            </Link>
                        </Box>
                        <Box mt={{base:"50px", md:"70px"}} fontSize="1.1rem" fontWeight="500">
                            <Link href="#projects">
                            <a>{data[language].navbar[2]}</a>
                            </Link>
                        </Box>
                        <Box mt={{base:"50px", md:"70px"}} fontSize="1.1rem" fontWeight="500">
                            <Link href="#skills">
                                <a style={{ target: '_blank' }}>{data[language].navbar[3]}</a>
                            </Link>
                        </Box>
                        <Box mt={{base:"50px", md:"70px"}} fontSize="1.1rem" fontWeight="500">
                            <Link href="#contact">
                            <a>{data[language].navbar[4]}</a>
                            </Link>
                        </Box>
                        <Box
                            as="span"
                            mt={{base:"50px", md:"70px"}}
                            display="flex"
                            fontSize="1.1rem"
                            fontWeight="500"
                            _hover={{ color: 'primary' }}
                        >
                            <FormControl display="flex" alignItems="center">
                                ES
                                <Switch mr="5px" ml="5px" colorScheme="facebook" onChange={() => handleLanguage()} />
                                EN
                            </FormControl>
                        </Box>
                    </Flex>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default DrawerMenu
