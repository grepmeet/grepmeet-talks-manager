import React from 'react';
import type { InferGetStaticPropsType } from 'next';
import speakingurl from 'speakingurl';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Wrap, Container, Heading, Text, ButtonGroup, Button, SimpleGrid } from '@chakra-ui/react';
import { RepeatClockIcon, TriangleUpIcon } from '@chakra-ui/icons';


import TalkCard from '../../components/molecules/TalkCard';
import { PrismaClient } from '@prisma/client';

export default function TalksPage({ talks }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { query: { section = 'trend' } } = useRouter();

  return (
    <div>
      <Container as="section" py={{ base: 5, md: 10 }} maxW="5xl">
        <Wrap spacing={2} justify="space-between" align="center">
          <Heading as="h1">Tous les <Text as="span" color="secondary.500">talks.</Text></Heading>
          <ButtonGroup>
            <Button as={NextLink} href="/talks?section=trend" colorScheme={'trend' === section ? 'secondary' : 'gray'} size="sm" leftIcon={<TriangleUpIcon/>}>
              Tendance
            </Button>
            <Button as={NextLink} href="/talks?section=recent" colorScheme={'recent' === section ? 'secondary' : 'gray'} size="sm" leftIcon={<RepeatClockIcon/>}>
              Récents
            </Button>
          </ButtonGroup>
        </Wrap>

        <SimpleGrid mt={5} columns={{ base: 1, md: 2 }} spacing="8">
          {talks.map(({ id, title, speaker/*, nbVotes*/ }, index) => (
            <TalkCard
              key={`talk-${id}`}
              href={`/talks/${id}/${speakingurl(title)}`}
              votes={/*nbVotes*/0}
              isVoted={index === 1}
              title={title}
              author={speaker ? {
                fullName: speaker.fullName,
                photoURL: speaker.photoUrl ?? '',
                subtitle: speaker.bio ?? '',
                href: `#/speakers/${speaker.id}/${speakingurl(speaker.fullName)}`
              } : null}
            />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const talks = await prisma.talk.findMany({
    include: {
      speaker: true,
    },
  });

  return {
    props: { talks }
  };
}
