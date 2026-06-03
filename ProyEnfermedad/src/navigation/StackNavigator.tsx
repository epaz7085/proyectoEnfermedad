import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabsNavigator from "./TabsNavigator";



//Declarar tipado para pantalla de navegación
export type RootStackParamList = {
    Login: undefined;
    Home: {email: string};
    UserTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="UserTabs" component={TabsNavigator} />
        </Stack.Navigator>
    );      
}