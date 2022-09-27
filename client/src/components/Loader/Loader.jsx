import { Container, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const Loader = () => {
    const logo = '<Ad/>'
    return (
        <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
            <ChakraBox
                initial={{ opacity: 1, scale: 3 }}
                animate={{ opacity: 1, scale: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    'ease-in-out': [0, 0.71, 0.2, 1.01],
                }}
                padding="5px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border='2px solid #00f8ae'
                fontSize='1.5rem'
                color='#00f8ae'
                fontWeight='500'
            >
                {logo}
            </ChakraBox>
        </Container>
    )
}

export default Loader
