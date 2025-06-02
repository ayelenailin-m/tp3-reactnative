import { FlatList, Text, View } from 'react-native';
import styles from '../styles';

const productos = [
  { id: '1', nombre: 'Yerba', precio: 70 },
  { id: '2', nombre: 'Azúcar', precio: 85 },
  { id: '3', nombre: 'Pancito', precio: 90 },
];

export default function Productos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.nombre} - ${item.precio}</Text>
        )}
      />
    </View>
  );
}
