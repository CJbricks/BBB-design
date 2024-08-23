import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/archivo-black/400.css';
import '@fontsource/open-sans/400.css';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function App({ Component, pageProps }) {

  const colors = {
    brand: {
      900: '#fceec5',
      800: '#367ad3',
      700: '#285E61',
      600: '#a8501a',
      500: '#C53030',
      400: '#e2e8f0'
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