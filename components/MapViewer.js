import React from 'react';
//import MapView from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
    return (
        //<View style={styles.container}>
        //    <MapView style={styles.map} />
        //</View>
        <MapView
            style={styles.container, styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation initialRegion={{ latitude: 45.75, longitude: 4.85, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: 300,
    },
});