import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import ReasonOne from '../../../assets/ReasonOne.jpg';
import ReasonTwo from '../../../assets/ReasonTwo.jpg';
import ReasonThree from '../../../assets/ReasonThree.jpg';
import ReasonFour from '../../../assets/ReasonFour.jpg';

const reasonsData = [
    {
        imageSrc: ReasonOne,
        text: 'Physical Ailments',
    },
    {
        imageSrc: ReasonTwo,
        text: 'Psychological Ailments',
    },
    {
        imageSrc: ReasonThree,
        text: 'Emotional Problems',
    },
    {
        imageSrc: ReasonFour,
        text: 'Financial Problems',
    },
];

export default function Reasons() {
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            mx="5%"
            my="3%"
        >
            {reasonsData.map((reason, index) => {
                return <Box
                    boxSize="20%"
                    textAlign="center"
                    key={index}
                >
                    <Image
                        src={reason.imageSrc}
                        borderRadius={10}
                        width="100%"
                        height={'100%'} />
                    <Text fontSize={['0.5rem', '1.1vw']} m={'5%'} fontWeight={'600'}>{reason.text}</Text>
                </Box>

            })}
        </Box>
    );
}
