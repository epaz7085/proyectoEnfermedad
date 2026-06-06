import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CustomButton } from "../components/CustomButton";
import { useAuth } from "../contexts/AuthContext";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function HomeScreen({ route, navigation }: Props) {
    const {user} = useAuth();
    const { email } = route.params;

    const handleGoToSettings = () => {
        navigation.navigate('UserTabs');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <Text style={styles.subtitle}>{user?.email}</Text>
            <CustomButton
                text="Ver Configuración"
                onPress={handleGoToSettings}
                variant="primary"
            />
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
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: '#b2b2b2',
        fontSize: 16,
        marginBottom: 30,
    },
});