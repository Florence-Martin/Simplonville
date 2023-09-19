// Navigation.js (comme un composant)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function Navigation ()  {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Accueil" component={HomeScreen} />
                {/* Ajoutez d'autres écrans ici */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
