import React, { FC } from "react";
import NextLink from "next/link";
import {
  Wrap,
  Heading,
  Button,
  Stack,
  Link,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";

import Author, { AuthorProps } from "../atoms/Author";
import Tag, { TagProps } from "../atoms/Tag";
import { CalendarIcon, LinkIcon } from "@chakra-ui/icons";

export type ScheduledTalkCardProps = {
  title: string;
  href: string;
  date: Date | null;
  author?: AuthorProps | null;
  hashtags?: TagProps[];
  isRegistered?: boolean;
};

const ScheduledTalkCard: FC<ScheduledTalkCardProps> = ({
  title,
  href,
  date,
  author,
  hashtags,
  isRegistered = false,
}) => (
  <Stack
    spacing={5}
    justify="space-between"
    py="6"
    px="5"
    boxShadow="lg"
    rounded="md"
    bg="white"
  >
    <Stack spacing={4}>
      <Heading as="h4" size="sm" fontFamily="body" color="secondary.500">
        {date && date.toLocaleDateString('fr-FR')}
      </Heading>
      <Heading as="h3" size="md" noOfLines={3} fontFamily="body">
        <Link as={NextLink} href={href}>
          {title}
        </Link>
      </Heading>

      {hashtags && (
        <Wrap>
          {hashtags.slice(0, 3).map((hashtag) => (
            <Tag key={hashtag.label} {...hashtag} />
          ))}
        </Wrap>
      )}

      {author && <Author {...author} />}
    </Stack>

    <Stack alignSelf="flex-end" direction="row" spacing={2} alignItems="center">
      <Button as={NextLink} href={href} colorScheme="primary">
        En savoir plus
      </Button>

      {isRegistered ? (
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="secondary"
            size="sm"
            leftIcon={<LinkIcon />}
          >
            Partager
          </MenuButton>
          <MenuList>
            <MenuItem>Ajouter à votre agenda</MenuItem>
            <MenuItem>Partager sur Twitter</MenuItem>
            <MenuItem>Partager sur LinkedIn</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button leftIcon={<CalendarIcon />} colorScheme="gray" size="sm">
          S&apos;inscrire
        </Button>
      )}
    </Stack>
  </Stack>
);

export default ScheduledTalkCard;
