import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      main: '#0f0f0f',
      secondary: '#4d4d4d',
      border: '#808080',
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
})
