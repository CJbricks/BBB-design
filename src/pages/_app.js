import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/archivo-black/400.css';
import '@fontsource/open-sans/400.css';


export default function App({ Component, pageProps }) {

  const colors = {
    brand: {
      900: '#fceec5',
      800: '#367ad3',
      700: '#00b2ff',
      600: '#a8501a',
      500: '#a8501a'
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