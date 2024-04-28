import React from 'react'
import './SecondSaperator.css'
import { Box, Text } from '@chakra-ui/react'

export default function SecondSaperator() {
    return (
        <Box
            w="45%"
            mx="auto"
            my="1%"
        >
            <fieldset style={{ borderWidth: 2, borderColor: '#470060' }}>
                <legend>
                    <Text color="#470060" fontSize={['0.7rem', '1.3vw']} fontWeight={600}>HEALTHY LIFESTYLE</Text>
                </legend>
                <Text
                    fontSize={['0.9rem', '1.8vw']}
                    m='3%'
                    color="#470060"
                    fontWeight={600}
                >
                    WHY PRANIC HEALING?
                </Text>
            </fieldset>
        </Box>
    )
}
