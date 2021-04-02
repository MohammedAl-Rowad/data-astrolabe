import { extendTheme, ThemeOverride } from '@chakra-ui/react'

const customTheme: ThemeOverride = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
}

const theme = extendTheme({ config: customTheme.config })

export default theme
