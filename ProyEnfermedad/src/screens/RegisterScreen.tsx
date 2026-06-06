import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CustomButton, CustomButtonCrear } from '../components/CustomButton';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import CustomInput from '../components/CustomInput';


export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={{ 
              backgroundColor: 'white', 
              width: 70, 
              height: 70, 
              borderRadius: 35, 
              alignItems: 'center', 
              justifyContent: 'center',
              alignSelf: 'center',
              marginBottom: 16 
          }}>
              <FontAwesome5 name="heartbeat" size={30} color="#1b4332" />
          </View>

            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 25, textAlign: 'center'}}>Iniciar Sesión</Text>
            <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 25, marginTop: -18, textAlign: 'center', color: '#b2b2b2'}}>Sistema de Gestión Médica</Text>
            <CustomInput
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onchange={setEmail}
                inputStyle={{ width: 285}}
            />
            <CustomInput
                type="password"
                placeholder="Contraseña"
                value={password}
                onchange={setPassword}
            />
            <View style={{ alignItems: 'center' }}>
            <CustomButton
                text="Iniciar sesión"
                onPress={() => console.log("Login")}
                variant="primary"
            />

            <CustomButtonCrear
              text = "Crear Cuenta"
              onPress ={() => console.log ('Crear')}
              variant = 'secondary'
            />
            </View>
            <StatusBar style="auto" />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b4332',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    card: { 
        backgroundColor: '#2b2b2b',
        padding: 24,
        width: '100%', 
        borderRadius: 15,
      }
});