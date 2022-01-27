import React, {FC} from 'react';
import {Box, Button, Container, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import {TalkCard, TalkCardProps} from "../components/molecules/TalkCard";
import NextLink from "next/link";

export type TrendingTalksProps = {
    talks: TalkCardProps[];
};

const TrendingTalks: FC<TrendingTalksProps> = ({talks}) => {
    return (
        <Box bg='gray.50'>
            <Container py={{base: 5, md: 10}} maxW="5xl">
                <Heading mb='10'>Talks en <Text as="span" color="secondary.500">tendance.</Text></Heading>

                <SimpleGrid bg='gray.50' columns={{base: 1, md: 2}} spacing='8'>
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
        </Box>
    );
};

export default TrendingTalks;
