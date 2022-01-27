import React, {FC} from 'react';
import NextLink from 'next/link';
import {Avatar, Stack, Text, Link} from '@chakra-ui/react';

export interface AuthorProps {
    photoURL: string;
    fullName: string;
    subtitle?: string;
    href?: string;
}

const Author: FC<AuthorProps> = ({photoURL, fullName, subtitle, href}) => (
    <Stack direction="row" spacing={4} align="center">
        <Avatar
            src={photoURL}
            alt={fullName}
        />
        <Stack direction="column" spacing={0} fontSize="sm">
            {href ? (
                <NextLink href={href} passHref>
                    <Link><Text fontWeight={600} isTruncated>{fullName}</Text></Link>
                </NextLink>
            ) : <Text fontWeight={600} isTruncated>{fullName}</Text>}

            {subtitle && (
                <Text color={'gray.500'} isTruncated>{subtitle}</Text>
            )}
        </Stack>
    </Stack>
);

export default Author;
