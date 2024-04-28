import React from 'react';
import { Text, Card, CardBody, Box, CardFooter, Image, Flex } from '@chakra-ui/react';
import './Events.css'
const eventData = [
    {
        date: new Date('2023-04-01'),
        name: 'Event 1',
        description: 'Description 1',
    },
    {
        date: new Date('2023-04-10'),
        name: 'Event 2',
        description: 'Description 2',
    },
    {
        date: new Date('2023-04-15'),
        name: 'Event 3',
        description: 'Description 3',
    },
    {
        date: new Date('2023-04-20'),
        name: 'Event 4',
        description: 'Description 4',
    },
    {
        date: new Date('2023-04-25'),
        name: 'Event 5',
        description: 'Description 5',
    },
    {
        date: new Date('2023-04-30'),
        name: 'Event 6',
        description: 'Description 6',
    },
];

export default function EventList() {
    return (
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
            {eventData.map((event, index) => {
                return <div key={index} className='event-card'>
                    <Card maxW="sm" p={0} borderRadius="lg">
                        <CardBody p={0} borderTopLeftRadius='lg' borderTopRightRadius='lg' overflow='hidden'>
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                variant="outline"
                            />
                        </CardBody>
                        <CardFooter display="flex" flexDirection="column">
                            <div className='eventFooter'>
                                <div className='date'>
                                    <div className='text'>
                                        <Text fontSize="17.326" fontWeight="bold" color="#470060">APR</Text>
                                        <Text fontSize="11.949" fontWeight="bold">{event.date.getDate()}</Text>
                                    </div>
                                    <Box
                                        w="2px"
                                        h="40px"
                                        bg="#000"
                                    ></Box>
                                </div>
                                <div className='event-name'>
                                    <Text fontSize="17.326" color="#2E363F">{event.name}</Text>
                                    <Text fontSize="11.949" color="#888">{event.description}</Text>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            })
            }
        </Flex >
    );
}

