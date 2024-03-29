import React, {FC, MouseEvent} from 'react';
import NextLink from 'next/link';
import {TriangleUpIcon} from '@chakra-ui/icons';
import {Wrap, Heading, Button, Stack, Link} from '@chakra-ui/react';

import {nFormatter} from '../../utils/number';

import Author, {AuthorProps} from '../atoms/Author';
import Tag, {TagProps} from "../atoms/Tag";

export type TalkCardProps = {
    title: string;
    href: string;
    votes: number;
    isVoted?: boolean;
    onVote?: (e: MouseEvent<HTMLButtonElement>) => void;
    author?: AuthorProps|null;
    hashtags?: TagProps[];
};

const TalkCard: FC<TalkCardProps> = ({title, href, votes, isVoted = false, onVote, author, hashtags}) => (
    <Stack as="article" spacing={5} justify="space-between" py="6" px="5" boxShadow="lg" rounded="md" bg="white">
        <Stack spacing={4}>
            <Heading as="h3" size='md' noOfLines={3} fontFamily='body'>
                <Link as={NextLink} href={href} _hover={{textDecoration: 'underline'}}>{title}</Link>
            </Heading>

            {hashtags && (
                <Wrap>{hashtags.slice(0, 3).map(hashtag => <Tag key={hashtag.label} {...hashtag} />)}</Wrap>
            )}

            {author && <Author {...author}/>}
        </Stack>

        <Stack alignSelf="flex-end" direction="row" spacing={2} alignItems="center">
            <Button as={NextLink} href={href} colorScheme="primary">En savoir plus</Button>
            <Button onClick={onVote} leftIcon={<TriangleUpIcon/>} colorScheme={isVoted ? 'secondary' : 'gray'}
                    size="sm">
                {nFormatter(votes, 2)}
            </Button>
        </Stack>
    </Stack>
);

export default TalkCard;
