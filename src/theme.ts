import { extendTheme, ThemeOverride } from '@chakra-ui/react'

const customTheme: ThemeOverride = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
}

const theme = extendTheme({ config: customTheme.config })

export default theme
