import '../styles/globals.css'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Loader from '../src/components/Loader/Loader'
import theme from '../src/theme'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2200)
    }, [])

    return (
        <div style={{ backgroundColor: '#052b64' }}>
            <Head>
                <title>Alejandro DAmen</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            {!loading ? (
                <Provider store={store}>
                    <ChakraProvider theme={theme}>
                        <Component {...pageProps} />
                    </ChakraProvider>
                </Provider>
            ) : (
                <Loader />
            )}
        </div>
    )
}

export default MyApp
