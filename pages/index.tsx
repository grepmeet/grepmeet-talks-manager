import React from 'react';
import type {NextPage} from 'next';
import {Box} from '@chakra-ui/react';

import {Session, Talk} from '../types';

import {Hero} from '../components/organisms/Hero';

import TrendingTalks from '../containers/TrendingTalks';
import NextSessions from '../containers/NextSessions';

// Mocks
const talks: Talk[] = [
    {
        id: 'AZTDGHYETUYASLKQJQSHFG5672',
        title: "DNA DRIVE : Une nouvelle technologie de stockage ! 450 millions téraoctets par gramme d'ADN.",
        nbVotes: 45678989,
        speaker: {
            id: '56gh678lkjh',
            fullName: "John Doe",
            subtitle: "Lead Dev @ Microsoft",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
        },
        tags: [
            {id: '1', label: '#technology'},
            {id: '2', label: '#stockage'},
            {id: '3', label: '#dna'},
        ],
    },
    {
        id: 'AZTDGHYETUYASLKQJQSHFG5672',
        title: "DNA DRIVE : Une nouvelle technologie !",
        nbVotes: 12345,
        speaker: {
            id: '56gh678lkjh',
            fullName: "John Doe",
            subtitle: "Lead Dev @ Microsoft",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
        },
        tags: [
            {id: '1', label: '#technology'},
        ],
    },
    {
        id: 'AZTDGHYETUYASLKQJQSHFG5672',
        title: "DNA DRIVE : Une nouvelle technologie !",
        speaker: {
            id: '56gh678lkjh',
            fullName: "John Doe",
            subtitle: "Lead Dev @ Microsoft",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
        },
        nbVotes: 12345,
    },
];
const sessions: Session[] = [
    {
        title: "DNA DRIVE : Une nouvelle technologie de stockage ! 450 millions téraoctets par gramme d'ADN.",
        date: new Date(),
        speaker: {
            id: '56gh678lkjh',
            fullName: "John Doe",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
            subtitle: "Lead Dev @ Microsoft",
        },
        tags: [
            {id: '1', label: '#technology'},
            {id: '2', label: '#stockage'},
            {id: '3', label: '#dna'},
        ],
    },
    {
        title: "DNA DRIVE : Une nouvelle technologie !",
        date: new Date(),
        speaker: {
            id: '56gh678lkjh',
            fullName: "John Doe",
            subtitle: "Lead Dev @ Microsoft",
            photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
        },
        tags: [
            {id: '1', label: '#technology'},
        ],
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
