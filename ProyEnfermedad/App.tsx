import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { navigationRef } from './src/navigation/NavigationService';
import { AuthProvider } from './src/contexts/AuthContext';
import { LanguageProvider } from './src/contexts/LanguageContext';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
    return (
    <Provider store={store}>
        <ThemeProvider>          
            <LanguageProvider>
                <AuthProvider>
                    <NavigationContainer ref={navigationRef}>
                        <StackNavigator />
                    </NavigationContainer>
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
     </Provider>
    );
}