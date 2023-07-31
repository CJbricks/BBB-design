import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/archivo-black/400.css';
import '@fontsource/open-sans/400.css';


export default function App({ Component, pageProps }) {

  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    },
  }

  const fonts = {
      heading: `'Archivo Black', sans-serif`,
      body: `'Open Sans', sans-serif `,

  }


  const theme = extendTheme({ colors, fonts })
  
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
   
  )
}