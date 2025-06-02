import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
            case 'inicio':
                iconName = 'home-outline';
                break;
            case 'perfil':
                iconName = 'person-circle-outline';
                break;
            case 'tareas':
                iconName = 'list-outline';
                break;
            case 'ajustes':
                iconName = 'settings-outline';
                break;
            case 'contador':
                iconName = 'calculator-outline';
                break;
            case 'productos':
                iconName = 'pricetags-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        })}>
        <Tabs.Screen name="inicio" options={{ title: 'Inicio' }} />
        <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
        <Tabs.Screen name="tareas" options={{ title: 'Tareas', headerShown: false }}/>
        <Tabs.Screen name="ajustes" options={{ title: 'Ajustes' }} />
        <Tabs.Screen name="contador" options={{ title: 'Contador' }} />
        <Tabs.Screen name="productos" options={{ title: 'Productos' }} />
        </Tabs>
    );
}
