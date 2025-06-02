import { Stack } from 'expo-router';

export default function TareasLayout() {
    return (
        <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="[id]/detalle/[sid]" options={{ title: 'Detalle de Subtarea' }} />
            <Stack.Screen name="[id]/index" options={{ title: 'Subtareas' }} />
        </Stack>
    )

}
