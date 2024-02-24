import React, { FC } from 'react';
import NextLink from 'next/link';

import {
  Box,
  Button,
  Container,
  Collapse,
  Flex,
  Image,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export interface HeaderProps {
}

interface NavProps {
}

const Nav: FC<NavProps> = () => (
  <Stack as="nav" direction={{ base: 'column', md: 'row' }} align={{ base: 'auto', md: 'center' }} spacing={{ base: 4, md: 5 }}>
    <Link as={NextLink} href="/talks">
      Parcourir les grepmeets
    </Link>
    <Link as={NextLink} href="/talks/proposer-un-grepmeet" fontWeight={400}>
      Proposer un grepmeet
    </Link>
    <Button as={NextLink} href="#/login" fontSize="sm" fontWeight={400} colorScheme="gray">
      Connexion
    </Button>
    <Button as={NextLink} href="#/signin" fontSize="sm" fontWeight={600} colorScheme="primary">
      Inscription
    </Button>
  </Stack>
);

export const Header: FC<HeaderProps> = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box height={{ base: 65, md: 122 }}>
      <Box width="100%" position="fixed" zIndex={999}>
        <Flex
          bg="white"
          color="black"
          py={{ base: 3, md: 10 }}
          px={{ base: 3, md: 10 }}
          borderBottom={1}
          borderStyle="solid"
          borderColor="gray.100"
          align="center"
          justify="space-between">
          <Link as={NextLink} href="/">
            <Image src="/grepmeet.png" alt="GrepMeet" width={{ base: 100, md: 150 }}/>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Nav/>
          </Flex>

          <Stack display={{ base: 'flex', md: 'none' }} direction="row" spacing={2}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Stack>
        </Flex>

        <Collapse in={isOpen}>
          <Container py={5} bg="white">
            <Nav/>
          </Container>
        </Collapse>
      </Box>
    </Box>
  );
};
