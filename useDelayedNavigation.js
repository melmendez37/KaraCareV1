import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const useDelayedNavigation = (screenName, delay) => {
    const nav = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
        nav.replace(screenName);
        }, delay);

        return () => clearTimeout(timeout);
    }, [nav, screenName, delay]);
}

export default useDelayedNavigation;