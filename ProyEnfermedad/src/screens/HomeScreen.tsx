import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CustomButton } from "../components/CustomButton";
import { useAuth } from "../contexts/AuthContext";
import { i18n, useLanguage } from "../contexts/LanguageContext";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function HomeScreen({ route, navigation }: Props) {
    const {user} = useAuth();
    const {changeLanguage, language} = useLanguage();
    const { email } = route.params;

    const handleGoToSettings = () => {
        navigation.navigate('UserTabs');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{i18n.t('welcome')}</Text>
            <Text style={styles.subtitle}>{user?.email}</Text>
            <CustomButton
                text={i18n.t('gotoSettings')}
                onPress={handleGoToSettings}
                variant="primary"
            />
            <Text style={styles.subtitle}> Current Language: {language}</Text>
            <CustomButton
                text={i18n.t('changeLanguage')}
                onPress={() => (changeLanguage(language === 'en' ? 'es' : 'en'))}
                variant="secondary"
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