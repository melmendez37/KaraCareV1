import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const DisplayFile = () => {
    return(
        <View style={styles.container}>
            <LinearGradient colors={[ '#00598B' , '#AD6868' ]} style={styles.something}>
                <View style={styles.recOne}/>
                <Image style={styles.image} source={require("../assets/karacare.png")} />
                <Text style={{width: 248, height: 49, left: 90, top: 111, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700' }}>KaraCare EMERGENCY SYSTEM</Text>
                <View style={{width: 281, height: 48, left: 39, top: 190, position: 'absolute',  backgroundColor: '#46525E'}}></View>
                <View style={{width: 236, height: 303, left: 61, top: 280, position: 'absolute',  backgroundColor: '#8C8C8C', borderRadius: 25}} />
                <Text style={{width: 237, height: 23, left: 61, top: 202, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700' }}>SEND MEDICAL RESULTS</Text>
                <View style={{width: 280, height: 56, left: 39, top: 679, position: 'absolute',  backgroundColor: '#46525E'}}></View>
                <View style={{width: 280, height: 41, left: 39, top: 35, position: 'absolute',  backgroundColor: '#46525E'}}></View>
                <View style={{width: 280, height: 56, left: 39, top: 623, position: 'absolute',  backgroundColor: '#8C8C8C'}}></View>
                <View style={{width: 51, height: 19, left: 200, top: 593, position: 'absolute',  backgroundColor: '#46525E', borderRadius: 100}} />
                <View style={{width: 51, height: 21, left: 109, top: 592, position: 'absolute',  backgroundColor: '#D9D9D9', borderRadius: 100}} />
                <Text style={{width: 46, height: 19, left: 203, top: 593, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700' }}>Cancel</Text>
                <Text style={{width: 46, height: 19, left: 114, top: 593, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700' }}>Next</Text>
            </LinearGradient>
    </View>
    )
}

const styles= StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something:{width: '100%', height: '100%', position: 'relative' , borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 350, height: 800, left: 39, top: 35, position: 'absolute', backgroundColor: '#BCBCBC'},
    image: {width: 68, height: 66, left: 47, top: 103, position: 'absolute'}
})

export default DisplayFile;