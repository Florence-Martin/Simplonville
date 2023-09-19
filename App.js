import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import AlertForm from './components/AlertForm';


const tab = createBottomTabNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name == "Accueil") {
                            iconName = "home"
                        } else if (route.name == "Alertez-nous") {
                            iconName = "alert-circle"
                        }
                        return <Ionicons name={iconName} size={24} color={'#25292e'} />
                    }
                })}>

                <tab.Screen name="Accueil" component={HomeScreen} />
                <tab.Screen name="Alertez-nous" component={AlertForm} />
            </tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#383E42',
    },
 
});
