import React, {FC, MouseEvent} from 'react';
import NextLink from 'next/link';
import {TriangleUpIcon} from '@chakra-ui/icons';
import {Box, Wrap, Heading, Button, Stack, Text} from '@chakra-ui/react';

import { nFormatter } from '../../utils/number';

import Author, {AuthorProps} from '../atoms/Author';

export type TalkCardProps = {
    title: string;
    href: string;
    votes: number;
    isVoted?: boolean;
    onVote?: (e: MouseEvent<HTMLButtonElement>) => void;
    author?: AuthorProps;
    hashtags?: string[];
};

export const TalkCard: FC<TalkCardProps> = ({title, href, votes, isVoted = false, onVote, author, hashtags}) => (
    <Stack spacing={10} justify="space-between" py="8" px="5" boxShadow="lg" rounded="md" bg="white">
        <Box>
            {hashtags &&  <Text mb="1" color="secondary.500">{hashtags.join(' ')}</Text>}

            <Heading as="h3" size='md' noOfLines={3} fontFamily='body'>{title}</Heading>
        </Box>

        <Wrap direction={{base: 'column', sm: 'row'}} spacing={5} justify="space-between" align="center">
            {author && <Author {...author}/>}

            <Stack direction="row" spacing={2} alignItems="center">
                <NextLink href={href} passHref>
                    <Button colorScheme="primary">En savoir plus</Button>
                </NextLink>
                <Button onClick={onVote} leftIcon={<TriangleUpIcon />} colorScheme={isVoted ? 'secondary' : 'gray'} size="sm">
                    {nFormatter(votes, 2)}
                </Button>
            </Stack>
        </Wrap>
    </Stack>
);
