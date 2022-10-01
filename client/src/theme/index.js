import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: `'Roboto Mono', monospace`,
        body: `'Rubik', sans-serif`,
        footer:`Eiko-medium`
    },
    colors: {
        primary: '#1E90FF',
    },
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '990px',
        xl: '1200px',
        xml:'1300px',
        xxl: '1536px',
        xxxl: '1700px'
    },
    components: {
        Drawer: {
            variants: {
                xxs: {
                    dialog: {
                        maxW: '45%',
                        background: 'rgba(30, 144, 255, 0.5)',
                    },
                },
            },
        },
    },
})

export default theme
