import React, {FC} from 'react';
import {Avatar, Stack, Text} from '@chakra-ui/react';

export interface AuthorProps {
    photoURL: string;
    fullName: string;
    date?: string;
}

const Author: FC<AuthorProps> = ({photoURL, fullName, date}) => (
    <Stack direction="row" spacing={4} align="center">
        <Avatar
            src={photoURL}
            alt={fullName}
        />
        <Stack direction="column" spacing={0} fontSize="sm">
            <Text fontWeight={600}>{fullName}</Text>
            {date && (
                <Text color={'gray.500'}>{date}</Text>
            )}
        </Stack>
    </Stack>
);

export default Author;
