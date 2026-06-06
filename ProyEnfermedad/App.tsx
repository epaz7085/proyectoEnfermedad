import React, { useState } from 'react';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    ); 

}



