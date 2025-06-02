import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        // Espera un tick para asegurarse de que el layout esté montado
        setTimeout(() => {
        router.replace('/login');
        }, 0);
    }, []);

    return null;
}
