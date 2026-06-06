import { View, Text } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { navigationRef } from "../../navigation/NavigationService";


export default function ProfileScreen({navigation}: any) {
    const handleLogout = () => {
        if (navigationRef.isReady()) {
            navigationRef.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }
        navigation.navigate('Login');
    }

    const handleGoToLogin = () => {
        navigation.navigate('Login');
    }
    return (
        <View>  
            <Text>Profile Screen</Text>
            <CustomButton
                text="Cerrar Sesión"
                onPress={handleLogout}
                variant="secondary"
            />
            <CustomButton
                text="Ir a Login"
                onPress={handleGoToLogin}
                variant="primary"
            />
        </View>
    )
}