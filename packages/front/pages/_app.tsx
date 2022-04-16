import type {AppProps} from 'next/app';
import Head from 'next/head';
import {DefaultSeo} from 'next-seo';
import {ChakraProvider} from '@chakra-ui/react';

import '../styles/globals.css';

import theme from '../utils/theme';

import {Header} from "../components/organisms/Header";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Grepmeet • Talks communautaires</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
                <meta name="theme-color" content="#000000"/>
            </Head>

            <DefaultSeo
                defaultTitle="Grepmeet • Talks communautaires"
                titleTemplate="%s • Grepmeet"
                description="Plateforme communautaire permettant de proposer un meetup par semaine, où les talks sont sélectionnées avec soin par la communauté."
                openGraph={{
                    type: 'website',
                    locale: 'fr_FR',
                    url: process.env.NEXT_PUBLIC_BASE_URL,
                    site_name: 'Grepmeet • Talks communautaires',
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-cover.png`,
                            width: 800,
                            height: 600,
                            alt: 'Grepmeet • Des talks proposés par les techs pour les techs.',
                            type: 'image/png',
                        },
                    ]
                }}>
            </DefaultSeo>

            <Header/>

            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp
