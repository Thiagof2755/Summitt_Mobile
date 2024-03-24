import React, { useState } from 'react';
import { View, Image, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Capa from '../screens/assets/evento.png';

export default function CardEvent() {
    const [scaleAnimation] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.timing(scaleAnimation, {
            toValue: 1.2,
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
                <Animated.Image source={Capa} style={[styles.image, { transform: [{ scale: scaleAnimation }] }]} />
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
});
