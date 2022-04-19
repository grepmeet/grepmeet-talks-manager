import React from 'react';
import type { NextPage } from 'next';
import speakingurl from 'speakingurl';
import {
  Wrap,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Grid,
  Progress,
  Avatar,
  AvatarGroup,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';

import { Talk } from 'shared';

import Author from '../../../components/atoms/Author';
import Tag from '../../../components/atoms/Tag';

// Mocks
const talk: Talk = {
  id: 'AZTDGHYETUYASLKQJQSHFG5672',
  title:
    "DNA DRIVE : Une nouvelle technologie de stockage ! 450 millions téraoctets par gramme d'ADN.",
  nbVotes: 12,
  speaker: {
    id: '56gh678lkjh',
    fullName: 'John Doe',
    subtitle: 'Lead Dev @ Microsoft',
    photoURL: 'https://avatars0.githubusercontent.com/u/1164541?v=4',
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium eveniet excepturi incidunt, ipsa ipsam ipsum itaque labore numquam provident qui quo saepe velit! A distinctio minus nulla praesentium vero?',
  },
  tags: [
    { id: 'technology', label: '#technology' },
    { id: 'stockage', label: '#stockage' },
    { id: 'reactjs', label: '#reactjs' },
    { id: 'reactjs', label: '#reactjs' },
    { id: 'reactjs', label: '#reactjs' },
    { id: 'reactjs', label: '#reactjs' },
    { id: 'reactjs', label: '#reactjs' },
    { id: 'reactjs', label: '#reactjs' },
  ],
  language: 'as',
  date: null,
};

const TalkDetails: NextPage = () => {
  return (
    <div>
      <Container as="section" py={{ base: 5, md: 10 }} maxW="5xl">
        <Stack spacing={5}>
          <Heading as="h1">{talk.title}</Heading>

          <Stack
            spacing="10"
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
          >
            {talk.tags && (
              <Wrap>
                {talk.tags.map((tag) => (
                  <Tag
                    key={`tag-${tag.id}`}
                    label={tag.label}
                    href={`/talks?tag=${tag.id}`}
                  />
                ))}
              </Wrap>
            )}

            <Author
              fullName={talk.speaker.fullName}
              photoURL={talk.speaker.photoURL}
              subtitle={talk.speaker.subtitle}
              href={`#/speaker/${talk.speaker.id}/${speakingurl(
                talk.speaker.fullName,
              )}`}
            />
          </Stack>
        </Stack>

        <Grid
          mt="20"
          templateColumns={{ base: '1fr', md: '5fr 3fr' }}
          gap="10"
          alignItems="flex-start"
        >
          <Box as="article" order={{ base: 2, md: 1 }} py="5">
            <Heading as="h2" size="lg" mb="5">
              Description
            </Heading>
            <Text as="div" mb={{ base: 10, md: 20 }}>
              <p>
                Lorem ipsum dolor <strong>sit amet</strong>, consectetur
                adipisicing elit.{' '}
                <a href="#">Ab accusantium eveniet excepturi</a> incidunt, ipsa
                ipsam ipsum itaque labore numquam provident qui quo saepe velit!
                A distinctio minus nulla praesentium vero?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                accusantium eveniet excepturi incidunt, ipsa ipsam ipsum itaque
                labore numquam provident qui quo saepe velit! A distinctio minus
                nulla praesentium vero?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                accusantium eveniet excepturi incidunt, ipsa ipsam ipsum itaque
                labore numquam provident qui quo saepe velit! A distinctio minus
                nulla praesentium vero?
              </p>
            </Text>

            <Heading as="h2" size="lg" mb="5">
              Speaker
            </Heading>
            <Author
              photoURL={talk.speaker.photoURL}
              fullName={talk.speaker.fullName}
              subtitle={talk.speaker.subtitle}
              size="xl"
              mb={5}
              href={`#/speakers/${talk.speaker.id}/${speakingurl(
                talk.speaker.fullName,
              )}`}
            />
            <Text as="div" mb="5">
              <p>{talk.speaker.biography}</p>
            </Text>
          </Box>

          <Box
            as="aside"
            order={{ base: 1, md: 2 }}
            bg="gray.50"
            p="5"
            marginY={{ base: '-5', md: 0 }}
          >
            <Heading as="h2" size="lg" mb="5">
              Stats
            </Heading>

            <Stack spacing="5">
              <Progress
                colorScheme="secondary"
                borderRadius="base"
                value={(talk.nbVotes / 20) * 100}
              />
              <AvatarGroup size="md" max={5} spacing={-2}>
                <Avatar src="https://i.pravatar.cc/300?u=1" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=2" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=3" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=4" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=5" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=6" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=7" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=8" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=9" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=10" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=11" alt="John Doe" />
                <Avatar src="https://i.pravatar.cc/300?u=12" alt="John Doe" />
              </AvatarGroup>
              <Text fontWeight="bold" align="center">
                {talk.nbVotes} / 20 votes
              </Text>
              <Button
                colorScheme="primary"
                leftIcon={<TriangleUpIcon />}
                isFullWidth
              >
                <span>Voter pour ce grepmeet</span>
              </Button>

              <Menu>
                <MenuButton as={Button} colorScheme="gray" isFullWidth>
                  Partager ce grepmeet
                </MenuButton>
                <MenuList>
                  <MenuItem>Partager sur Twitter</MenuItem>
                  <MenuItem>Partager sur LinkedIn</MenuItem>
                  <MenuItem>Copier le lien</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default TalkDetails;
