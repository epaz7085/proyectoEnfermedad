import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type CustomButtonProps = {
    text: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "tertiary";
}

export const CustomButton = ({ text, onPress, variant = "primary" }: CustomButtonProps) => {
    const styles = getStyles(variant);
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}


export const CustomButtonCrear = ({ text, onPress, variant = "secondary" }: CustomButtonProps) => {
    const styles = getStyles(variant);
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}



const getStyles = (variant: "primary" | "secondary" | "tertiary") => StyleSheet.create({
    button: {
        borderRadius: 15,
        backgroundColor: variant === "primary" ? "#1b4332" : variant === "secondary" ? "transparent" : "lightgray",
        padding: 12,
        width: 280,
        alignItems: "center",
        marginTop: 15,
        borderColor: variant === "secondary" ? "#52b788": "#1b4332",
        borderWidth: variant === "secondary" ? 2 : 0.5,
    },
    buttonText: {
    color: variant === "tertiary" ? "black" : variant === "secondary" ? "#52b788" : "white",
    fontWeight: "700",
    
},
});