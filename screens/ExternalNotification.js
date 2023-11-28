import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const localImage = require('../assets/karacare.png')

const ExtResNotification = () => {

    const nav = useNavigation();

    const backWelcome = () => {
        nav.navigate('WelcomePage');
    };
    return(
        <View style = {styles.container}>
            <LinearGradient colors = {['#00598B', '#AD6868']} style = {styles.something}>
                    <View style={styles.mainRec} />
                    <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
                    <Image style={styles.image} source={localImage}/>
                    <View style={styles.notifText} />
                    <View style={styles.recThree}/>
                    <TouchableOpacity style = {styles.recOne} onPress={backWelcome}/>
                    <Text style={styles.buttonText}>HOME</Text>
                    <Text style={styles.text}>EMERGENCY ALERT</Text>
                    <View style={styles.recFour}/>
                    <Text style={styles.confirm}>Emergency alert sent. Please proceed to nearest KaraCare facility.</Text>
            </LinearGradient>
        </View>
    )
};

const styles = StyleSheet.create({
    mainRec: {width: 280, height: 700, left: 70, top: 80, position: 'absolute', backgroundColor: '#BCBCBC'},
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something: {width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    image: {width: 68, height: 66, left: 81, top: 153, position: 'absolute'},
    title: {width: 248, height: 49, left: 120, top: 172, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700'},
    recFour: {width: 280, height: 56, left: 70, top: 80, position: 'absolute', backgroundColor: '#8C8C8C'},
    recOne: {width: 55, height: 21, left: 181, top: 510, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    notifText: {width: 180, height: 129, left: 120, top: 365, position: 'absolute', backgroundColor: '#62A252', borderRadius: 25},
    recThree: {width: 280, height: 56, left: 70, top: 724, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonText: {width: 40, height: 19, left: 186, top: 512, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700'},
    text: {width: 281, height: 77, left: 70, top: 240, position: 'absolute', backgroundColor: '#8C8C8C'},
    header: {width: 281, height: 77, left: 70, top: 240, position: 'absolute', backgroundColor: '#8C8C8C'},
    confirm: {width: 170, height: 50, left: 125, top: 408, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '700'},
});

export default ExtResNotification;