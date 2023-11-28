import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import useDelayedNavigation from '../useDelayedNavigation';

const localImage = require('../assets/karacare.png')

const Splash = () =>{
    const nav = useNavigation();
    useDelayedNavigation('WelcomePage', 2000);

    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source={localImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3B3B3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 188,
        height: 188,
    },
});

export default Splash;