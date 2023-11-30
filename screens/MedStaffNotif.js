import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const localImage = require('../assets/karacare.png')

const MedStaffNotif = () => {

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
                    <TouchableOpacity style = {styles.button} onPress={backWelcome}/>
                    <Text style={styles.buttonText}>HOME</Text>
                    <View style={styles.header}/>

                    <Text style={styles.text}>EMERGENCY ALERT</Text>
                    <View style={styles.recOne}/>
                    
                    <Text style={styles.confirm}>Emergency alert sent. Please proceed to nearest KaraCare facility.</Text>
            </LinearGradient>
        </View>
    )
};

const styles = StyleSheet.create({
    mainRec: {width: 350, height: 800, left: 40, top: 65, position: 'absolute', backgroundColor: '#BCBCBC'},
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something: {width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    image: {width: 68, height: 66, left: 76, top: 153, position: 'absolute'},
    title: {width: 248, height: 49, left: 125, top: 162, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700'},
    recOne: {width: 350, height: 56, left: 40, top: 65, position: 'absolute', backgroundColor: '#8C8C8C'},
    button: {width: 90, height: 40, left: 171, top: 550, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    notifText: {width: 250, height: 150, left: 90, top: 365, position: 'absolute', backgroundColor: '#62A252', borderRadius: 25},
    recThree: {width: 350, height: 141, left: 40, top: 724, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonText: {width: 50, height: 19, left: 190, top: 555, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700'},
    text: {width: 350, height: 77, left: 100, top: 260, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700'},
    header: {width: 350, height: 77, left: 40, top: 240, position: 'absolute', backgroundColor: '#8C8C8C'},
    confirm: {width: 200, height: 120, left: 115, top: 385, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700'},
});

export default MedStaffNotif;