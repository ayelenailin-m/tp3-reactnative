import { useRouter } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { tareas } from '../../../constants/tareas';
import styles from '../../styles';

export default function ListaTareas() {
    const router = useRouter();

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Lista de Tareas</Text>
        <FlatList
            data={tareas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem} onPress={() => router.push(`/tareas/${item.id}`)}>
                <Text styles={styles.listItemText}>{item.titulo}</Text>
            </TouchableOpacity>
            )}
        />
        </View>
    );
}
