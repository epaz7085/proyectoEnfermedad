import { View, Text, StatusBar } from "react-native"; 
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CustomButton } from "../components/CustomButton";


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ route }: Props) {
    const { email } = route.params;

    function handleLoadSettings(): void {
        navigation.navigate('UserTabs');
    }

    return (
        <View>
            <StatusBar style="auto" />
            <Text>Bienvenido {email}, a Home</Text>

            <CustomButton title="Cargar Configuración" onPress={handleLoadSettings} />
        </View>
    );
}