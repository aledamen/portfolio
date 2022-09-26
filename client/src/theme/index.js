import { background, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
     primary:'#00f8ae'   
    },
  breakpoints: {
    sm: "320px",
    md: "820px",
    lg: "990px",
    xl: "1200px",
    xxl: "1536px",
    },
    components: {
            Drawer: {
                variants: {
                    xxs: {
                        dialog: {
                            maxW: '45%',
                            background: 'rgba(104,179,173,.877)',
                        },
                    }
                },
            }
        },
});

export default theme;