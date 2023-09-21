import React, { useState, useEffect } from 'react';
import MapView, { Marker, Circle, Callout } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
//import axios from 'axios';
//import { GEOAPIFY_API_KEY } from '@env';

export default function MapViewer() {
    const [pin, setPin] = useState({
        latitude: 45.7751,
        longitude: 4.8271,
    })
    //const [data, setData] = useState(null);
    

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setPin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            // Requête Axios pour obtenir les données
            //try {
            //    const response = await axios.get('', {
            //        headers: {
            //            'apikey': GEOAPIFY,
            //        },
            //    });
            //    setData(response.data);
            //} catch (error) {
            //    console.error('Erreur lors de la requête Axios : ', error);
            //}
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
                onUserLocationChange={(e) => {
                    //console.log("onUserLocationCHange", e.nativeEvent.coordinate);

                    setPin({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    })
                }}
            >
                <Marker
                    coordinate={pin}
                    title="Localisation"
                    description="Description du lieu"
                    pinColor="red"
                    draggable={true}
                    onDragStart={(e) => {
                        //console.log("Drag start", e.nativeEvent.coordinate);
                    }}
                    onDragEnd={(e) => {
                        // console.log("Drag end", e.nativeEvent.coordinate);

                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        })
                    }}
                >
                    <Callout>
                        <Text>Habitation</Text>
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
});
