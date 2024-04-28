import { Box, Image, Text, Wrap, } from '@chakra-ui/react'
import React from 'react'
import b1 from '../../../assets/healing.png'
import b2 from '../../../assets/training.png'
import b3 from '../../../assets/healingcamps.png'
import b4 from '../../../assets/healing.png'
import b5 from '../../../assets/healing.png'
import b6 from '../../../assets/healing.png'

export default function Features() {
    return (
        <Box bg={'#EDEAE5'} display={'flex'} flexDirection={'row'}>
            <Box w='60%' p={'5%'} display="flex" justifyContent="center" alignItems="center"  >
                <Wrap spacing={20} direction={['row']} justify="center" align="center" >
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={'row'} boxSize={'28%'} >
                        <Image src={b1} h={'40%'} w={'40%'} />
                        <Text fontSize={['0.5rem', '1.1vw']} m={'5%'} fontWeight={'600'}>hey</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={'row'} boxSize={'28%'} >
                        <Image src={b2} h={'40%'} w={'40%'} />
                        <Text fontSize={['0.5rem', '1.1vw']} m={'5%'} fontWeight={'600'}>hey</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={'row'} boxSize={'28%'} >
                        <Image src={b3} h={'40%'} w={'40%'} />
                        <Text fontSize={['0.5rem', '1.1vw']} m={'5%'} fontWeight={'600'}>hey</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={'row'} boxSize={'28%'} >
                        <Image src={b4} h={'40%'} w={'40%'} />
                        <Text fontSize={['0.5rem', '1.1vw']} m={'5%'} fontWeight={'600'}>hey</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={'row'} boxSize={'28%'} >
                        <Image src={b5} h={'40%'} w={'40%'} />
                        <Text fontSize={['0.5rem', '1.1vw']} m={'5%'} fontWeight={'600'}>hey</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={'row'} boxSize={'28%'} >
                        <Image src={b6} h={'40%'} w={'40%'} />
                        <Text fontSize={['0.5rem', '1.1vw']} m={'5%'} fontWeight={'600'}>hey</Text>
                    </Box>
                </Wrap>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src={b5} h={'40%'} w={'40%'} />
            </Box>
        </Box>
    )
}
