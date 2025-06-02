import { Alert, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

export default function Inicio() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenida Ailín!</Text>
            <Text style={styles.subtitle}>Probá las secciones del menú inferior</Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#4CAF50' }]}
                onPress={() => Alert.alert('Mensaje', '¡Gracias por visitar la app!')}>
                <Text style={{ color: 'white', textAlign: 'center' }}>:)</Text>
            </TouchableOpacity>
        </View>
    );
}
