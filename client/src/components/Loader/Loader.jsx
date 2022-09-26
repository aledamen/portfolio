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
                initial={{ opacity: 0.5, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
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
