import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AlertForm from '../components/AlertForm';

export default function HomeScreen  ( navigation )  {
    const handleAlertSubmit = () => {
        // Vous pouvez ici envoyer les donn�es du formulaire ou effectuer d'autres actions n�cessaires
        // Par exemple, vous pouvez naviguer vers un �cran de confirmation
        navigation.navigate('ConfirmationScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.banner }>
                <Text style={styles.bannerText }>Bienvenue � Simplonville</Text>
            </View>
            <AlertForm />

            <TouchableOpacity onPress={handleAlertSubmit}>
                <Text>Envoyer l'alerte</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // Centrer horizontalement
        justifyContent: 'center', // Centrer verticalement
    },
    banner: {
        backgroundColor: 'white', // Couleur de fond du bandeau
        width: '100%', // Largeur du bandeau � 100% de l'�cran
        //height: , // Hauteur du bandeau (ajustez selon vos besoins)
        alignItems: 'center', // Centrer horizontalement dans le bandeau
        justifyContent: 'center', // Centrer verticalement dans le bandeau
    },
    bannerText: {
        color: 'white', // Couleur du texte en blanc
        fontSize: 18, // Taille de la police du texte (ajustez selon vos besoins)
    },
   
});