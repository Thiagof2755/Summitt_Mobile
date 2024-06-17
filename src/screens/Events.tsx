import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VStack, Box, View } from 'native-base';
import CardEvent from '../components/CardEvent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const apiUrl = 'http://3.97.199.173:8080/summit';

const getAllEventsWithDetails = async () => {
    try {
        const { data: events } = await axios.get(`${apiUrl}/event`);
        if (!events || events.length === 0) {
            return [];
        }
        const detailedEvents = await Promise.all(events.map(async (event) => {
            const { data: details } = await axios.get(`${apiUrl}/event/${event.id}`);
            return { ...event, ...details };
        }));
        return detailedEvents;
    } catch (error) {
        console.error('Erro ao buscar eventos', error);
        return [];
    }
};

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await getAllEventsWithDetails();
            setEvents(eventsData);
        };
        fetchEvents();
    }, []);

    return (
        <VStack style={{ flex: 1, backgroundColor: 'white' }}>
            <Box>
                <KeyboardAwareScrollView>
                    <View>
                        {events.map((event, index) => (
                            <CardEvent
                                key={index}
                                imageSource={event.images[0]?.file}
                                eventName={event.name}
                                eventDate={event.initialdate}
                                eventLocation={event.eventaddress.city}
                                eventDetails={event.observation}
                                eventStatus={event.status}
                                eventAddress={event.eventaddress}
                            />
                        ))}
                    </View>
                </KeyboardAwareScrollView>
            </Box>
        </VStack>
    );
}
