import React, { useState, useEffect } from 'react';
import MapView, { Marker, Circle, Callout } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';

import axios from 'axios';
import { REACT_APP_API_KEY } from '@env';

export default function MapViewer() {
    const [pin, setPin] = useState({
        latitude: 45.7751,
        longitude: 4.8271,
    })

    const [address, setAddress] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // D�finir une fonction pour mettre � jour le pin
    const updatePin = (newPin) => {
        setPin(newPin);
    };

    // D�finir une variable d'�tat pour l'erreur
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            //demande permission d'obtenir donn�es GPS de l'appareil
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setPin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            //Requ�te Axios pour obtenir les donn�es
            try {
                const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&apiKey=${REACT_APP_API_KEY}`);
                const formattedAddress = response.data.features[0]?.properties?.formatted;
                setAddress(formattedAddress);
            } catch (error) {
                console.error('Erreur lors de la requ�te Axios : ', error);
            }
            setIsLoading(false);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 45.7751,
                    longitude: 4.8271,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showUserLocation={true}
                //mise � jour du pin qd l'utilisateur bouge
                onUserLocationChange={(e) => {
                    console.log("onUserLocationChange", e.nativeEvent.coordinate);
                    updatePin(e.nativeEvent.coordinate);
                }}
            >
                <Marker
                    coordinate={pin}
                    title="Localisation"
                    description={address || "Chargement de l'adresse"}
                    pinColor="red"
                    draggable={true}
                    //mise � jour du pin qd le marker bouge
                    onDragStart={(e) => {
                        console.log("Drag start", e.nativeEvent.coordinate);
                        updatePin(e.nativeEvent.coordinate);
                    }}
                    onDragEnd={(e) => {
                        console.log("Drag end", e.nativeEvent.coordinate);
                        updatePin(e.nativeEvent.coordinate);
                    }}
                >
                    <Callout style={styles.callout }>
                        <Text>{address}</Text>
                    </Callout>
                </Marker>
                <Circle
                    center={pin}
                    radius={100}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: 250,
    },
    callout: {
        width: 50,
        height:50,
    }
});
