import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Loader from '../src/components/Loader/Loader'
import theme from '../src/theme'
import {Provider} from 'react-redux'
import store from '../src/store/store'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, [])

  return (
      <>
      {!loading ? (
        <Provider store={store}>
              <ChakraProvider theme={theme}>
                  <Component {...pageProps} />
          </ChakraProvider>
        </Provider>
          ) : (
              <Loader/>
          )}
      </>
  )
}

export default MyApp
