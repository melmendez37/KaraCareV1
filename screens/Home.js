import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View } from "react-native";

const localImage = require('../assets/karacare.png');

const Home = () => {
    return(
        <View style={styles.container}>
            <LinearGradient colors = {['#00598B', '#AD6868']} style = {styles.something}>
                <View style={styles.title}>KaraCare  EMERGENCY SYSTEM</View>
                <Image style={styles.image} source={localImage} />
                <View style={styles.mainRec}></View>
                <View style={styles.logoutButton} />
                <View style={styles.button1} />
                <View style={styles.button2} />
                <View style={styles.button3} />
                <View style={styles.header}>HOME</View>
                <View style={styles.rec}></View>
                <View style={styles.button1text}>EMERGENCY ALERT</View>
                <View style={styles.button2text}>NOTIFY HOSPITAL</View>
                <View style={styles.button3text}>SEND MEDICAL RESULTS</View>
                <View style={styles.logOut}>Log Out</View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something: {width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    mainRec: {width: 279, height: 48, left: 40, top: 131, position: 'absolute', background: '#FFFDFD'},
    header: {width: 151, height: 23, left: 104, top: 143, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700'},
    recOne: {width: 350, height: 800, left: 40, top: 65, position: 'absolute', backgroundColor: '#BCBCBC'},
    logOut: {width: 46, height: 19, left: 250, top: 145, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Inter', fontWeight: '700'},
    button1: {width: 100, height: 100, left: 129, top: 319, position: 'absolute', background: '#46525E', borderRadius: 20},
    button2: {width: 100, height: 100, left: 130, top: 438, position: 'absolute', background: '#8C8C8C', borderRadius: 20},
    button3: {width: 100, height: 100, left: 129, top: 193, position: 'absolute', background: '#8C8C8C', borderRadius: 20},
    button1text: {width: 170, height: 26, left: 94, top: 228, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 12, fontFamily: 'Inter', fontWeight: '700'},
    button2text: {width: 170, height: 26, left: 94, top: 353, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 12, fontFamily: 'Inter', fontWeight: '700'},
    button3text: {width: 170, height: 26, left: 94, top: 475, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 12, fontFamily: 'Inter', fontWeight: '700'},
    rec: {width: 279, height: 56, left: 40, top: 684, position: 'absolute', background: '#FFFBFB'},
    title: {width: 248, height: 49, left: 94, top: 70, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700'  },
    image: {width: 68, height: 66, left: 54, top: 53, position: 'absolute'},
    logoutButton: {width: 51, height: 21, left: 247, top: 144, position: 'absolute', background: '#46525E'}
})

export default Home;