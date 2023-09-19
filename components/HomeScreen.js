import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function HomeScreen() {
    //const handleAlertSubmit = () => {
    //    // envoyer les données du formulaire ou effectuer d'autres actions nécessaires
    //    // on peut naviguer vers un écran de confirmation
    //    navigation.navigate('ConfirmationScreen');
    //};

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.bannerText}>Bienvenue A Simplonville</Text>
                <Text style={styles.title}>Alertez-nous !  La ville de Simplonville peut vous aider.</Text>
            </View>
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
        backgroundColor: '#25292e',
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    title: {
        color: '#fff',
        width: '100%',
        height: 50,
        textAlign: 'center',
    }
});