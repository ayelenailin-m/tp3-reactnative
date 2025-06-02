import { Text, View } from 'react-native';
import styles from '../styles';

export default function Ajustes() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ajustes</Text>
            <Text style={styles.subtitle}>Próximamente podrás configurar tu perfil, notificaciones y más.</Text>
        </View>
    );
}
