import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import { CustomButton, CustomButtonCrear } from "../components/CustomButton";
import { useState } from "react";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from "../contexts/AuthContext";
import { i18n } from "../contexts/LanguageContext";

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState("eduardo@universidad.edu");
    const [password, setPassword] = useState("");

    const {login} = useAuth();


    const handleLogin = () => {
    try {
        const allowed = login(email);
        if (allowed) {
            navigation.navigate("Home", { email });
        } else {
            alert("No tiene acceso");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>

                <View style={styles.iconCircle}>
                    <FontAwesome5 name="heartbeat" size={30} color="#1b4332" />
                </View>

                <Text style={styles.title}>Iniciar Sesión</Text>
                <Text style={styles.subtitle}>Sistema de Gestión Médica</Text>

                <CustomInput
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onchange={setEmail}
                />
                <CustomInput
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onchange={setPassword}
                />

                <View style={{ alignItems: 'center' }}>
                    <CustomButton
                        text= {i18n.t('signIn')}
                        onPress={handleLogin}
                        variant="primary"
                    />
                    <CustomButtonCrear
                        text={i18n.t('signUp')}

                        onPress={() => navigation.navigate("Register")}
                        variant="secondary"
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
    },
    iconCircle: {
        backgroundColor: 'white',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 16,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 25,
        marginTop: -18,
        textAlign: 'center',
        color: '#b2b2b2',
    },
});