import React from 'react';
import type {NextPage} from 'next';
import speakingurl from 'speakingurl';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import {Wrap, Container, Heading, Text, ButtonGroup, Button, SimpleGrid} from '@chakra-ui/react';
import {RepeatClockIcon, TriangleUpIcon} from '@chakra-ui/icons';

import {Talk} from '../../types';

import TalkCard from '../../components/molecules/TalkCard';

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

const Talks: NextPage = () => {
    const {query: {section = 'trend'}} = useRouter();

    return (
        <div>
            <Container as="section" py={{base: 5, md: 10}} maxW="5xl">
                <Wrap spacing={2} justify="space-between" align="center">
                    <Heading as="h1">Tous les <Text as="span" color="secondary.500">talks.</Text></Heading>
                    <ButtonGroup>
                        <NextLink href="/talks?section=trend" passHref>
                            <Button
                                as="a"
                                colorScheme={'trend' === section ? 'secondary' : 'gray'}
                                size="sm"
                                leftIcon={<TriangleUpIcon />}>
                                Tendance
                            </Button>
                        </NextLink>
                        <NextLink href="/talks?section=recent" passHref>
                            <Button
                                colorScheme={'recent' === section ? 'secondary' : 'gray'}
                                size="sm"
                                leftIcon={<RepeatClockIcon />}>
                                Récents
                            </Button>
                        </NextLink>
                    </ButtonGroup>
                </Wrap>

                <SimpleGrid mt={5} columns={{base: 1, md: 2}} spacing='8'>
                    {talks.map(({id, title, speaker, nbVotes}, index) => (
                        <TalkCard
                            key={`talk-${id}`}
                            href={`#/talks/${id}/${speakingurl(title)}`}
                            votes={nbVotes}
                            isVoted={index === 1}
                            title={title}
                            author={speaker ? {
                                fullName: speaker.fullName,
                                photoURL: speaker.photoURL,
                                subtitle: speaker.subtitle,
                                href: `#/speakers/${speaker.id}/${speakingurl(speaker.fullName)}`
                            } : null}
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default Talks;
