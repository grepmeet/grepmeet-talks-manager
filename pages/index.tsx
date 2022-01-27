import React from 'react';
import type {NextPage} from 'next';
import {Box} from '@chakra-ui/react';

import {TalkCardProps} from '../components/molecules/TalkCard';
import {SessionCardProps} from '../components/molecules/SessionCard';
import {Hero} from '../components/organisms/Hero';

import TrendingTalks from '../containers/TrendingTalks';
import NextSessions from '../containers/NextSessions';

// Mocks
const talks: TalkCardProps[] = [
    {
        title: "DNA DRIVE : Une nouvelle technologie de stockage ! 450 millions téraoctets par gramme d'ADN.",
        href: "#/talks/1234/dna-drive-une-nouvelle-technologie",
        votes: 45678989,
        author: {
            fullName: "John Doe",
            subtitle: "Lead Dev @ Microsoft",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
            href: "#/speakers/3456712/john-doe",
        },
        hashtags: [
            {label: '#technology', href: '#/talks?tag=technology'},
            {label: '#stockage', href: '#/talks?tag=stockage'},
            {label: '#stockage', href: '#/talks?tag=stockage'},
            {label: '#stockage', href: '#/talks?tag=stockage'},
            {label: '#stockage', href: '#/talks?tag=stockage'},
            {label: '#dna', href: '#/talks?tag=dna'},
            {label: '#dna', href: '#/talks?tag=dna'},
            {label: '#dna', href: '#/talks?tag=dna'},
            {label: '#dna', href: '#/talks?tag=dna'},
            {label: '#dna', href: '#/talks?tag=dna'},
        ]
    },
    {
        title: "DNA DRIVE : Une nouvelle technologie !",
        href: "#/talks/1234/dna-drive-une-nouvelle-technologie",
        votes: 12345,
        author: {
            fullName: "John Doe",
            subtitle: "Lead Dev @ Microsoft",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
            href: "#/speakers/3456712/john-doe",
        },
        hashtags: [
            {label: '#technology', href: '#/talks?tag=technology'},
        ],
        isVoted: true,
    },
    {
        title: "DNA DRIVE : Une nouvelle technologie !",
        href: "#/talks/1234/dna-drive-une-nouvelle-technologie",
        votes: 12345,
        isVoted: true,
    },
    {
        title: "DNA DRIVE : Une nouvelle technologie !",
        href: "#/talks/1234/dna-drive-une-nouvelle-technologie",
        votes: 12345,
        author: {
            fullName: "John Doe",
            subtitle: "Lead Dev @ Microsoft",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
            href: "#/speakers/3456712/john-doe",
        },
        isVoted: false,
    },
];
const sessions: SessionCardProps[] = [
    {
        title: "DNA DRIVE : Une nouvelle technologie de stockage ! 450 millions téraoctets par gramme d'ADN.",
        href: "#/talks/1234/dna-drive-une-nouvelle-technologie",
        date: new Date(),
        author: {
            fullName: "John Doe",
            subtitle: "Lead Dev @ Microsoft",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
            href: "#/speakers/3456712/john-doe",
        },
        hashtags: [
            {label: '#technology', href: '#/talks?tag=technology'},
            {label: '#stockage', href: '#/talks?tag=stockage'},
            {label: '#stockage', href: '#/talks?tag=stockage'},
            {label: '#stockage', href: '#/talks?tag=stockage'},
            {label: '#stockage', href: '#/talks?tag=stockage'},
            {label: '#dna', href: '#/talks?tag=dna'},
            {label: '#dna', href: '#/talks?tag=dna'},
            {label: '#dna', href: '#/talks?tag=dna'},
            {label: '#dna', href: '#/talks?tag=dna'},
            {label: '#dna', href: '#/talks?tag=dna'},
        ]
    },
    {
        title: "DNA DRIVE : Une nouvelle technologie !",
        href: "#/talks/1234/dna-drive-une-nouvelle-technologie",
        date: new Date(),
        author: {
            fullName: "John Doe",
            subtitle: "Lead Dev @ Microsoft",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
            href: "#/speakers/3456712/john-doe",
        },
        hashtags: [
            {label: '#technology', href: '#/talks?tag=technology'},
        ],
        isRegistered: true,
    },
];

const Home: NextPage = () => {
    return (
        <div>
            <Hero/>

            <Box bg='gray.50'>
                <NextSessions sessions={sessions}/>
            </Box>

            <Box bg='white'>
                <TrendingTalks talks={talks}/>
            </Box>
        </div>
    );
}

export default Home;
