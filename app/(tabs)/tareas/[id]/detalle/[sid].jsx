import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { tareas } from '../../../../../constants/tareas';
import styles from '../../../../styles';

export default function DetalleSubtarea() {
    const { id, sid } = useLocalSearchParams();

    const tarea = tareas.find((t) => t.id === id);
    const subtarea = tarea?.subtareas.find((s) => s.sid === sid);

    if (!subtarea) return <Text>Subtarea no encontrada</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{subtarea.titulo}</Text>
            <Text style={styles.subtitle}>{subtarea.descripcion}</Text>
        </View>
    );
}
export const options = {
    title: 'Detalle de Subtarea',
};

