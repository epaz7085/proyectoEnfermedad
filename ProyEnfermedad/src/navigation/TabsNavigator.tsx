// @ts-ignore: fix module resolution in this workspace
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/UserSettings.tsx/ProfileScreen';
import SettingsScreen from '../screens/UserSettings.tsx/SettingsScreen';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';


type TabsParamList = {
    Profile: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#1b4332',  
            }}>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{ 
                    title: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                       <MaterialIcons name="person" color={color} size={size} />
                    )
                 }}
                />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{ 
                    title: 'Configuración',
                    tabBarIcon: ({ color, size }) => (
                       <MaterialIcons name="settings" color={color} size={size} />
                    )
                 }}
                />
        </Tab.Navigator>
    );
}