import { extendTheme,ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "50em",
    lg: "65em",
    xl: "91em",
    "2xl": "104em",
  })

  const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }

export const theme = extendTheme({
    breakpoints,
    fonts : {
        heading: 'Bellefair',
        body: 'Barlow'
    },
    styles: {
        global: (props) => ({
            body: {
                color: mode("white", "white")(props),
                bg: mode('#0B0D17', '#0B0D17')(props),
            }
        })
    },
    config
})