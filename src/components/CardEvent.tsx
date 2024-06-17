import React, { useState } from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Text, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

export default function CardEvent({ imageSource, eventName, eventDate, eventLocation, eventDetails, eventStatus, eventAddress }) {
    const [scaleAnimation] = useState(new Animated.Value(1));
    const [isModalVisible, setModalVisible] = useState(false);

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

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback 
                onPressIn={handlePressIn} 
                onPressOut={handlePressOut}
                onPress={toggleModal}
            >
                <Animated.View style={[styles.imageContainer, { transform: [{ scale: scaleAnimation }] }]}>
                    <Image source={{ uri: imageSource }} style={styles.image} />
                    <View style={styles.descriptionContainer}>
                        <View style={styles.eventInfo}>
                            <Text style={styles.eventName}>{eventName}</Text>
                        </View>
                        <View style={styles.locationDate}>
                            <Text style={styles.date}>{eventDate}</Text>
                            <Text style={styles.location}>{eventLocation}</Text>
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>

            <Modal
                transparent={false}
                animationType="slide"
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <ScrollView contentContainerStyle={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>{eventName}</Text>
                        <Text style={styles.modalDate}>{new Date(eventDate).toLocaleDateString()}</Text>
                    </View>
                    <View style={styles.modalImageWrapper}>
                        <Image source={{ uri: imageSource }} style={styles.modalImage} />
                    </View>
                    <View style={styles.modalDetails}>
                        <Text style={styles.modalSectionTitle}>Detalhes do Evento</Text>
                        <Text style={styles.modalText}>{eventDetails}</Text>
                        <Text style={styles.modalText}><Text style={styles.modalTextBold}>Status:</Text> {eventStatus}</Text>
                        <Text style={styles.modalText}><Text style={styles.modalTextBold}>Local:</Text> {eventAddress?.place}, {eventAddress?.city}, {eventAddress?.uf}</Text>
                        <Text style={styles.modalText}><Text style={styles.modalTextBold}>Endereço:</Text> {eventAddress?.street}, {eventAddress?.number}, {eventAddress?.district}</Text>
                        <Text style={styles.modalText}><Text style={styles.modalTextBold}>Complemento:</Text> {eventAddress?.complement}</Text>
                        <Text style={styles.modalText}><Text style={styles.modalTextBold}>CEP:</Text> {eventAddress?.zipCode}</Text>
                        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    );
}

CardEvent.propTypes = {
    imageSource: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    eventLocation: PropTypes.string.isRequired,
    eventDetails: PropTypes.string,
    eventStatus: PropTypes.string, 
    eventAddress: PropTypes.shape({
        place: PropTypes.string,
        city: PropTypes.string,
        uf: PropTypes.string,
        street: PropTypes.string,
        number: PropTypes.string,
        district: PropTypes.string,
        complement: PropTypes.string,
        zipCode: PropTypes.string,
    }),
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 360,
        height: 120,
        borderRadius: 15,
        marginTop: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    descriptionContainer: {
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
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
    modalContent: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
        marginTop: 50,
    },
    modalHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    modalDate: {
        fontSize: 16,
        color: '#666',
    },
    modalImageWrapper: {
        alignItems: 'center',
        marginBottom: 20,
    },
    modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    modalDetails: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15
    },
    modalSectionTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
        color: '#444',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
    },
    modalTextBold: {
        fontWeight: 'bold',
        color: '#333',
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#db254a',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
    },
});
