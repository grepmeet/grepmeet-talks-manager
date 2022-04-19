import React, {FC} from 'react';
import NextLink from 'next/link';
import {Avatar, Stack, Text, Link} from '@chakra-ui/react';

export interface AuthorProps {
    photoURL: string;
    fullName: string;
    subtitle?: string;
    href?: string;
    size?: 'xl'|'sm';
    mb?:number;
}

const Author: FC<AuthorProps> = ({photoURL, fullName, subtitle, href, size = 'sm', mb}) => (
    <Stack direction="row" spacing={4} align="center" mb={mb}>
        <Avatar
            src={photoURL}
            alt={fullName}
            size={'xl' === size ? 'xl' : 'md'}
        />
        <Stack direction="column" spacing={0}>
            {href ? (
                <NextLink href={href} passHref>
                    <Link><Text as="span" fontSize={size} fontWeight={600} isTruncated>{fullName}</Text></Link>
                </NextLink>
            ) : <Text as="span" fontSize={size} fontWeight={600} isTruncated>{fullName}</Text>}

            {subtitle && (
                <Text as="span" fontSize={'xl' === size ? 'lg' : 'sm'} color={'gray.500'} isTruncated>{subtitle}</Text>
            )}
        </Stack>
    </Stack>
);

export default Author;
