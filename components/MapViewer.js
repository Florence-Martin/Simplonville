import React from 'react';
import { StyleSheet, View, Button, Text, PermissionsAndroid } from 'react-native';
//import { useState, useEffect } from 'react';

export default function MapViewer() {

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message: 'Can we access your location?',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            console.log('granted', granted);
            if (granted === 'granted') {
                console.log('You can use Geolocation');
                return true;
            } else {
                console.log('You cannot use Geolocation');
                return false;
            }
        } catch (err) {
            return false;
        }
    };

    return (
        <View style={styles.container, styles.map}>
            <Text>Welcome!</Text>
            <View
                style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
                <Button title="Get Location" />
            </View>
            <Text>Latitude: </Text>
            <Text>Longitude: </Text>
            <View
                style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
                <Button title="Send Location" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
});