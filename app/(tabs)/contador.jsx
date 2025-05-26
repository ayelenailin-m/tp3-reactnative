import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import styles from '../(tabs)/styles';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Button title="Sumar" onPress={() => setContador(contador + 1)} />
      <Button title="Restar" onPress={() => setContador(contador - 1)} />
    </View>
  );
}
