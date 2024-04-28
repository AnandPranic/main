import React from 'react';
import {
    Box,
    Flex,
    Avatar,
    IconButton,
    useDisclosure,
    useColorModeValue,
    HStack,
    Stack,
    useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import headerLogo from '../../../assets/logo.png';

const Links = ['Home', 'About US', 'Courses', 'Events', 'Services', 'Inquire Now'];

function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('white', 'gray.900')} px="5%" h={20} justifyContent={'space-between'} >
                <Flex h="100%" display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        {/* <img src={headerLogo} className='headerLogo' /> */}
                        <Avatar size={{ base: 'md', md: 'xl' }} src={headerLogo} borderRadius={0} />
                    </Box>

                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ base: 'flex', md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        align="center"
                        justify="center"
                    />
                    <HStack spacing={10}>
                        <HStack as={'nav'} spacing={10} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <Link to={`/${link}`} key={link}>
                                    {link}
                                </Link>
                            ))}
                        </HStack>
                    </HStack>
                    {/* <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex> */}
                </Flex>
            </Box>
            {isOpen ? (
                <Box pb={5}  >
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <Link to={`/${link}`} key={link}>
                                {link}
                            </Link>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </>
    );
}

export default Nav;
