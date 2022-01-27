import React, {FC} from 'react';
import NextLink from 'next/link';
import {
    Wrap,
    Heading,
    Button,
    Stack,
    Link,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    Menu,
    MenuList,
    MenuButton,
    MenuItem
} from '@chakra-ui/react';

import Author, {AuthorProps} from '../atoms/Author';
import Tag, {TagProps} from "../atoms/Tag";
import {CalendarIcon, LinkIcon} from "@chakra-ui/icons";

export type SessionCardProps = {
    title: string;
    href: string;
    date: Date;
    author?: AuthorProps|null;
    hashtags?: TagProps[];
    isRegistered?: boolean;
};

const SessionCard: FC<SessionCardProps> = ({title, href, date, author, hashtags, isRegistered = false}) => (
    <Stack spacing={5} justify="space-between" py="6" px="5" boxShadow="lg" rounded="md" bg="white">
        <Stack spacing={4}>
            <Heading as="h4" size="sm" fontFamily='body' color="secondary.500">
                {date.toLocaleDateString()}
            </Heading>
            <Heading as="h3" size='md' noOfLines={3} fontFamily='body'>
                <NextLink href={href} passHref>
                    <Link>
                        {title}
                    </Link>
                </NextLink>
            </Heading>

            {hashtags && (
                <Wrap>{hashtags.slice(0, 3).map(hashtag => <Tag key={hashtag.label} {...hashtag} />)}</Wrap>
            )}

            {author && <Author {...author}/>}
        </Stack>

        <Stack alignSelf="flex-end" direction="row" spacing={2} alignItems="center">
            <NextLink href={href} passHref>
                <Button as="a" colorScheme="primary">En savoir plus</Button>
            </NextLink>

            {isRegistered ? (
                <Menu>
                    <MenuButton as={Button} colorScheme="secondary" size="sm" leftIcon={<LinkIcon />}>Partager</MenuButton>
                    <MenuList>
                        <MenuItem>Ajouter à votre agenda</MenuItem>
                        <MenuItem>Partager sur Twitter</MenuItem>
                        <MenuItem>Partager sur LinkedIn</MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <Button leftIcon={<CalendarIcon/>} colorScheme="gray" size="sm">S&apos;inscrire</Button>
            )}
        </Stack>
    </Stack>
);

export default SessionCard;
