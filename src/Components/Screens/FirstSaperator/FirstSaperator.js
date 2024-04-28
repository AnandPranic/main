import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function FirstSeparator() {
    return (
        <>
            <Box w="40%"
                bg="#470060"
                p="1.5%"
                color="white"
                mx="auto"
                my="2%"
                borderRadius="5px"
                justifyContent="center"
                alignItems="center"
            >
                <Text fontSize={['0.6rem', '1.2vw']} fontWeight={'275'}>No upcoming events from <br /> Anand Pranic Healing Centre at the moment!</Text>
            </ Box>
            <Box
                w="100%"
                color="black"
                justifyContent="center"
                alignItems="center"
            >
                <Text fontSize={['0.7rem', '1.5vw']} fontWeight={'500'}>Past Events by Anand Pranic Healing Centre</Text>
            </ Box>

        </>
    );
}
