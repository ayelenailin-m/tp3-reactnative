import { Image, Text, View } from 'react-native';
import fotoPerfil from '../../assets/images/ilustraciondemi.jpeg';
import styles from '../styles';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image
        source={fotoPerfil}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }}
      />
      <Text style={styles.title}>Ailín Miño</Text>
      <Text style={styles.subtitle}>Desarrolladora Frontend</Text>
    </View>
  );
}