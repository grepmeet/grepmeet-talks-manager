import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react';

import theme from '../utils/theme';

import {Header} from "../components/organisms/Header";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Header/>

            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp
