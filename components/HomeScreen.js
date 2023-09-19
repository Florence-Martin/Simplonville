import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ImageViewer from './ImageViewer';


const PlaceholderImage = require('../assets/images/accueil-image.jpeg');

export default function HomeScreen() {
  
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.bannerText}>Bienvenue &agrave; Simplonville</Text>
                <Text style={styles.title}>Alertez-nous ! Accident, travaux, probl&egrave;me de voirie (propret&eacute;, &eacute;clairage,...) !  </Text>
                <Text style={styles.title}>Priorit&eacute; num&eacute;ro 1, la s&eacute;curit&eacute; de tous.  </Text>
            </View>
            <View >
                <ImageViewer placeholderImageSource={PlaceholderImage} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    banner: {
        backgroundColor: '#383E42',
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        marginTop: 4,
    },

    title: {
        color: '#fff',
        width: '100%',
        height: 50,
        textAlign: 'center',
    },
    image: {
        width: 320,
        height: 400,
    },
});