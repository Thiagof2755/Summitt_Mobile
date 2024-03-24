import React, { useState } from 'react';
import { View, Image, StyleSheet, Animated, TouchableWithoutFeedback, Text } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Capa from '../screens/assets/evento.png';

export default function CardEvent() {
    const [scaleAnimation] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.timing(scaleAnimation, {
            toValue: 1.05,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scaleAnimation, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
                <Animated.View style={[styles.image, { transform: [{ scale: scaleAnimation }] }]}>
                    <Animated.Image source={Capa} style={[styles.image]} />
                    <View style={styles.descriptionContainer }>
                        <View style={styles.eventInfo}>
                            <Text style={styles.eventName}>Festa Feel It</Text>
                        </View>
                        <View style={styles.locationDate}>
                            <Text style={styles.date}>27/10/2024</Text>
                            <Text style={styles.location}>Uberlandia</Text>
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 360,
        height: 120,
        borderRadius: 15,
        marginTop: 10,
    },
    descriptionContainer: {
        height: 50,
        position: 'absolute',
        bottom: -10,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight:10,
        paddingLeft:10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

        

    },
    eventInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eventName: {
        color: 'white',
        fontSize: 18,
        marginRight: 10,
    },
    locationDate: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    location: {
        color: 'white',
        fontSize: 14,
        marginRight: 10,
    },
    date: {
        color: 'white',
        fontSize: 14,
    },
});
