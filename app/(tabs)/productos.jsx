import { FlatList, Text, View } from 'react-native';
import styles from '../styles';

const productos = [
  { id: '1', nombre: 'Yerba', precio: 1200 },
  { id: '2', nombre: 'Azúcar', precio: 850 },
  { id: '3', nombre: 'Facturas', precio: 1500 },
];

export default function Productos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.nombre} - ${item.precio}</Text>
        )}
      />
    </View>
  );
}
