import { useLocalSearchParams, useRouter } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { tareas } from '../../../../constants/tareas';
import styles from '../../../styles';

export default function Subtareas() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const tarea = tareas.find((t) => t.id === id);

    if (!tarea) return <Text>Tarea no encontrada</Text>;

    return (
        <View style={styles.container}>
        <Text style={styles.title}>{tarea.titulo}</Text>
        <FlatList
            data={tarea.subtareas}
            keyExtractor={(item) => item.sid}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem} onPress={() => router.push(`/tareas/${id}/detalle/${item.sid}`)}>
                <Text style={styles.listItemText}>{item.titulo}</Text>
            </TouchableOpacity>
            )}
        />
        </View>
    );
}


