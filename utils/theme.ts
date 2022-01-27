import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        primary: {
            50: '#4b588a',
            100: '#394369',
            200: '#303858',
            300: '#272e48',
            400: '#1e2337',
            500: '#000000',
            600: '#1e2337',
            700: '#000000',
            800: '#000000',
            900: '#000000',
        },
        secondary: {
            50: '#EAE9FB',
            100: '#C4C3F4',
            200: '#9E9CED',
            300: '#7875E6',
            400: '#5956E0',
            500: '#514EDF',
            600: '#403DD5',
            700: '#1A1881',
            800: '#111056',
            900: '#09082B',
        },
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Playfair Display', serif",
        mono: "Menlo, monospace",
    },
});

export default theme;
