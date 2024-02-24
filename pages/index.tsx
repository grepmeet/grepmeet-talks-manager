import React from "react";
import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";

import { Talk } from "../types";

import { Hero } from "../components/organisms/Hero";

import TrendingTalks from "../containers/TrendingTalks";
import NextScheduledTalks from "../containers/NextScheduledTalks";

// Mocks
const talks: Talk[] = [
  {
    id: "AZTDGHYETUYASLKQJQSHFG5672",
    title:
      "DNA DRIVE : Une nouvelle technologie de stockage ! 450 millions téraoctets par gramme d'ADN.",
    nbVotes: 45678989,
    speaker: {
      id: "56gh678lkjh",
      fullName: "John Doe",
      subtitle: "Lead Dev @ Microsoft",
      photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
    },
    tags: [
      { id: "1", label: "#technology" },
      { id: "2", label: "#stockage" },
      { id: "3", label: "#dna" },
    ],
    language: "fr",
    date: null,
  },
  {
    id: "AZTDGHYETUYASLKQJQSHFG5672",
    title: "DNA DRIVE : Une nouvelle technologie !",
    nbVotes: 12345,
    speaker: {
      id: "56gh678lkjh",
      fullName: "John Doe",
      subtitle: "Lead Dev @ Microsoft",
      photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
    },
    tags: [{ id: "1", label: "#technology" }],
    language: "fr",
    date: null,
  },
  {
    id: "AZTDGHYETUYASLKQJQSHFG5672",
    title: "DNA DRIVE : Une nouvelle technologie !",
    speaker: {
      id: "56gh678lkjh",
      fullName: "John Doe",
      subtitle: "Lead Dev @ Microsoft",
      photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
    },
    tags: [
      { id: "1", label: "#technology" },
      { id: "2", label: "#stockage" },
      { id: "3", label: "#dna" },
    ],
    nbVotes: 12345,
    language: "fr",
    date: null,
  },
];
const scheduledTalks: Talk[] = [
  {
    id: "AZTDGHYETUYASLKQJQSHFG5672",
    title:
      "DNA DRIVE : Une nouvelle technologie de stockage ! 450 millions téraoctets par gramme d'ADN.",
    date: new Date(),
    speaker: {
      id: "56gh678lkjh",
      fullName: "John Doe",
      photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
      subtitle: "Lead Dev @ Microsoft",
    },
    tags: [
      { id: "1", label: "#technology" },
      { id: "2", label: "#stockage" },
      { id: "3", label: "#dna" },
    ],
    nbVotes: 12345,
    language: "fr",
  },
  {
    id: "AZTDGHYETUYASLgfdgdfg672",
    title: "DNA DRIVE : Une nouvelle technologie !",
    date: new Date(),
    speaker: {
      id: "56gh678lkjh",
      fullName: "John Doe",
      subtitle: "Lead Dev @ Microsoft",
      photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
    },
    tags: [{ id: "1", label: "#technology" }],
    nbVotes: 12345,
    language: "fr",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Hero />

      <Box bg="gray.50">
        <NextScheduledTalks scheduledTalks={scheduledTalks} />
      </Box>

      <Box bg="white">
        <TrendingTalks talks={talks} />
      </Box>
    </div>
  );
};

export default Home;
