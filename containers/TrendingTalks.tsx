import React, {FC} from 'react';
import NextLink from 'next/link';
import {Button, Container, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react';

import TalkCard, {TalkCardProps} from '../components/molecules/TalkCard';

export type TrendingTalksProps = {
    talks: TalkCardProps[];
};

const TrendingTalks: FC<TrendingTalksProps> = ({talks}) => {
    return (
        <Container as="section" py={{base: 10, md: 20}} maxW="5xl">
            <Heading mb='10'>Talks en <Text as="span" color="secondary.500">tendance.</Text></Heading>

            <SimpleGrid columns={{base: 1, md: 2}} spacing='8'>
                {talks.map((talk, index) => (
                    <TalkCard
                        key={`talk-${index}`}
                        {...talk}
                    />
                ))}
            </SimpleGrid>

            <Flex mt="10" justify="center">
                <NextLink href="#/talks" passHref>
                    <Button as="a" size="lg" colorScheme="secondary">Parcourir tous les talks</Button>
                </NextLink>
            </Flex>
        </Container>
    );
};

export default TrendingTalks;
