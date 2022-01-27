import React, {FC} from 'react';
import NextLink from 'next/link';
import {Button, Container, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react';

import SessionCard, {SessionCardProps} from '../components/molecules/SessionCard';

export type NextSessionsProps = {
    sessions: SessionCardProps[];
};

const NextSessions: FC<NextSessionsProps> = ({sessions}) => {
    return (
        <Container as="section" py={{base: 10, md: 20}} maxW="5xl">
            <Heading mb='10'>Prochains <Text as="span" color="secondary.500">meetups.</Text></Heading>

            <SimpleGrid bg='gray.50' columns={{base: 1, md: 2}} spacing='8'>
                {sessions.map((session, index) => (
                    <SessionCard
                        key={`session-${index}`}
                        {...session}
                    />
                ))}
            </SimpleGrid>

            <Flex mt="10" justify="center">
                <NextLink href="#/sessions" passHref>
                    <Button as="a" size="lg" colorScheme="secondary">Voir toutes les sessions</Button>
                </NextLink>
            </Flex>
        </Container>
    );
};

export default NextSessions;
