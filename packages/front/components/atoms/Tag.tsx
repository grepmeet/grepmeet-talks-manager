import React, {FC} from 'react';
import NextLink from 'next/link';
import {Text, Link} from '@chakra-ui/react';

export type TagProps = {
    label: string;
    href?: string;
};

const Tag: FC<TagProps> = ({label, href}) => {
    if (href) {
        return (
            <NextLink href={href} passHref>
                <Link color="secondary.500">{label}</Link>
            </NextLink>
        );
    }

    return (
        <Text as="span" color="secondary.500">{label}</Text>
    );
};

export default Tag;
