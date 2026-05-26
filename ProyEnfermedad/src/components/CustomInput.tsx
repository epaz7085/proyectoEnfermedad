import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {TextInput, TouchableOpacity, View, Text, StyleSheet, KeyboardType } from "react-native";


type Props = {
    type: 'password' | 'email';
    placeholder: string;
    value : string;
    onchange: (text: string) => void;
    inputStyle?: object;
};

export default function CustomInput({type, placeholder, value, onchange, inputStyle }: Props) {

    const [isSecureText, setIsSecureText] = useState(type === "password");
    const isPasswordType = type === "password";

    const getError = () => {
        if(type === "email" && !value.includes("@") && value.length){
            return "El correo no es valido";
        }

        if (type === "password" && value.length < 6  && value.length){
            return "La contraseña debe tener al menos 6 caracteres";
        }
    };
    const error = getError();

    const keyboardType : KeyboardType = type === "email" ? "email-address" :
                                        "default";

    const icon = type === "email" ? "mail-outline" : "lock-closed-outline";
    <Ionicons name={icon} size={14} color="#b2b2b2" />

    return (
        <View style={styles.wrapper}>  

        /**SE AGREGA EL ESTILO QUE SE CREO ABAJO */
        <View style={[styles.inputContainer, error && styles.inputError]}>
            <Ionicons name={icon as any} size={14} color="#b2b2b2" />
            
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#b2b2b2"
                value={value}
                onChangeText={onchange}
                style={[styles.input, inputStyle]}
                secureTextEntry={isSecureText}
                keyboardType={keyboardType}

            />

            { isPasswordType &&<TouchableOpacity 
                onPress={() => { 
                    setIsSecureText(!isSecureText); }}>
                
                <Ionicons name={isSecureText ? "eye" : "eye-off"} size={14} color="#b2b2b2"/>
            </TouchableOpacity>}
        </View>
        {<Text style={styles.inputError}>{error}</Text>}
        </View>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
    },
    inputContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       marginTop: -5,
       borderColor: '#555555',
       borderWidth: 1,  
       borderRadius: 15,
       backgroundColor: 'transparent',
       paddingLeft: 12,
    }, 
    input: {
        width: '80%', 
        paddingVertical: 10,
        paddingHorizontal: 5,
        color: '#b2b2b2',


    },
    inputError: {
        color: 'red',
        borderColor: 'red',
        marginTop: 5,
    },
});






