import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import AlertForm from './components/AlertForm';
import Navigation from './components/Navigation';
import HomeScreen from './components/HomeScreen';

//const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
    return (
        <View style={styles.container}>
            <Navigation />
            <Text style={{ color: '#fff' }}>Alertez-nous ! La ville de Simplonville peut vous aider.</Text>
            {/*<View style={styles.imageContainer}>*/}
            {/*    <Image source={PlaceholderImage} style={styles.images} />*/}
            {/*</View>*/}
            <HomeScreen />
            <AlertForm />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    image: {
        width: 320,
        height: 200,
        borderRadius: 18,
    },

});
