import React, {FC} from 'react';
import NextLink from 'next/link';
import {Flex, Container, Stack, Heading, Text, Image, Button} from '@chakra-ui/react';

export interface HeroProps {
}

export const Hero: FC<HeroProps> = () => (
    <Container maxW={680} py={{base: 10, md: 20}} textAlign="center">
        <Flex alignItems="center" flexDirection="column">
            <Heading
                position="relative"
                zIndex={100}
                fontWeight="normal"
                fontSize={{base: '3xl', sm: '4xl', md: '5xl'}}
                lineHeight={'110%'}>
                Des talks proposés par les techs <Text as={'span'} color="secondary.500">pour les techs.</Text>
            </Heading>

            <Image mt="-80px" width={365} height={273} src="/illustration_talks.svg" alt=""/>
        </Flex>

        <Stack mt={5} spacing={5} textAlign="center" alignItems="center">
            <Text fontWeight="200">
                Grepmeet est une <Text as="strong" fontWeight="bold" color="secondary.500">plateforme communautaire</Text>{' '}
                permettant de proposer <Text as="strong" fontWeight="bold" color="secondary.500">un meetup par semaine</Text>,{' '}
                où les talks sont <Text as="strong" fontWeight="bold" color="secondary.500">sélectionnées avec soin</Text> par toi et la communauté.
            </Text>

            <Text fontWeight="200">
                Les talks Grepmeet durent <Text as="strong" fontWeight="bold" color="secondary.500">environ 17mn</Text>.{' '}
                Ils sont ouverts et accessibles à tous les techs. Que tu sois <Text as="strong" fontWeight="bold" color="secondary.500">débutant ou expert</Text>,{' '}
                tu peux proposer un talk !
            </Text>
        </Stack>

        <Stack direction={{base: 'column', sm: 'row'}} mt={10} justifyContent="center" spacing={5}>
            <NextLink href="#/talks/proposer-un-talk" passHref>
                <Button size="lg" colorScheme="primary">Proposer un talk</Button>
            </NextLink>
            <NextLink href="#/about">
                <Button size="lg" colorScheme="gray" fontWeight="200">En savoir plus</Button>
            </NextLink>
        </Stack>
    </Container>
);
