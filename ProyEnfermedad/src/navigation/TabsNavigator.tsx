// @ts-ignore: fix module resolution in this workspace
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/UserSettings.tsx/ProfileScreen';
import SettingsScreen from '../screens/UserSettings.tsx/SettingsScreen';


type TabsParamList = {
    Profile: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}