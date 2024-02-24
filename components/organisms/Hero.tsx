import React, { FC } from 'react';
import NextLink from 'next/link';
import { Flex, Container, Stack, Heading, Text, Image, Button } from '@chakra-ui/react';

export interface HeroProps {
}

export const Hero: FC<HeroProps> = () => (
  <Container as="section" maxW={680} py={{ base: 10, md: 20 }} textAlign="center">
    <Flex alignItems="center" flexDirection="column">
      <Heading
        as="h1"
        position="relative"
        zIndex={100}
        fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
        lineHeight={'110%'}>
        Des talks proposés par les techs <Text as={'span'} color="secondary.500">pour les techs.</Text>
      </Heading>

      <Image mt="-80px" width={365} height={273} src="/illustration_talks.svg" alt=""/>
    </Flex>

    <Stack mt={5} spacing={5} textAlign="center" alignItems="center">
      <Text fontWeight="200">
        Grepmeet.org est une <Text as="strong" fontWeight="bold" color="secondary.500">plateforme communautaire</Text>{' '}
        permettant de proposer <Text as="strong" fontWeight="bold" color="secondary.500">un talk par semaine</Text>,{' '}
        sélectionné avec soin <Text as="strong" fontWeight="bold" color="secondary.500">par la communauté et toi</Text>.
      </Text>

      <Text fontWeight="200">
        Un grepmeet dure <Text as="strong" fontWeight="bold" color="secondary.500">environ 17mn</Text>{' '}
        et est suivi d&apos;un <Text as="strong" fontWeight="bold" color="secondary.500">temps d&apos;échange avec le speaker</Text> et la communauté.{' '}
      </Text>

      <Text fontWeight="200">
        <Text as="strong" fontWeight="bold" color="secondary.500">Que tu sois débutant ou expert</Text>,{' '}
        tu peux proposer un grepmeet !
      </Text>
    </Stack>

    <Stack direction={{ base: 'column', sm: 'row' }} mt={10} justifyContent="center" spacing={5}>
      <Button as={NextLink} href="#/talks/proposer-un-grepmeet" size="lg" colorScheme="secondary">
        Proposer un grepmeet
      </Button>
      <Button as={NextLink} href="#/about" size="lg" colorScheme="gray" fontWeight="200">
        En savoir plus
      </Button>
    </Stack>
  </Container>
);
