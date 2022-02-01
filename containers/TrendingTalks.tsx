import React, {FC} from 'react';
import NextLink from 'next/link';
import speakingurl from 'speakingurl';
import {Button, Container, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react';

import {Talk} from '../types';

import TalkCard from '../components/molecules/TalkCard';

export type TrendingTalksProps = {
    talks: Talk[];
};

const TrendingTalks: FC<TrendingTalksProps> = ({talks}) => {
    return (
        <Container as="section" py={{base: 10, md: 20}} maxW="5xl">
            <Heading mb='10'>Grepmeets en <Text as="span" color="secondary.500">tendance.</Text></Heading>

            <SimpleGrid columns={{base: 1, md: 2}} spacing='8'>
                {talks.map(({id, title, speaker, nbVotes}, index) => (
                    <TalkCard
                        key={`talk-${id}`}
                        href={`/talks/${id}/${speakingurl(title)}`}
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

            <Flex mt="10" justify="center">
                <NextLink href="/talks" passHref>
                    <Button as="a" size="lg" colorScheme="secondary">Parcourir tous les grepmeets</Button>
                </NextLink>
            </Flex>
        </Container>
    );
};

export default TrendingTalks;
