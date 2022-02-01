import React, {FC} from 'react';
import speakingurl from 'speakingurl';
import NextLink from 'next/link';
import {Button, Container, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react';

import {Session} from '../types';

import SessionCard from '../components/molecules/SessionCard';

export type NextSessionsProps = {
    sessions: Session[];
};

const NextSessions: FC<NextSessionsProps> = ({sessions}) => {
    return (
        <Container as="section" py={{base: 10, md: 20}} maxW="5xl">
            <Heading mb='10'>Prochains <Text as="span" color="secondary.500">grepmeets.</Text></Heading>

            <SimpleGrid bg='gray.50' columns={{base: 1, md: 2}} spacing='8'>
                {sessions.map(({id, title, speaker, date}, index) => (
                    <SessionCard
                        key={`session-${id}`}
                        title={title}
                        href={`/talks/${id}/${speakingurl(title)}`}
                        author={speaker ? {
                            fullName: speaker.fullName,
                            photoURL: speaker.photoURL,
                            subtitle: speaker.subtitle,
                            href: `#/speakers/${speaker.id}/${speakingurl(speaker.fullName)}`
                        } : null}
                        date={date}
                        isRegistered={index === 1}
                    />
                ))}
            </SimpleGrid>

            <Flex mt="10" justify="center">
                <NextLink href="#/sessions" passHref>
                    <Button as="a" size="lg" colorScheme="secondary">Voir les prochains grepmeets</Button>
                </NextLink>
            </Flex>
        </Container>
    );
};

export default NextSessions;
