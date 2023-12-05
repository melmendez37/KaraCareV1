import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Pdf from "react-native-pdf";


const DisplayFile = () => {
    const nav = useNavigation();
    const route = useRoute();
    

    const confirm = () => {
        nav.navigate('SentResNotif');
    }

    const cancel = () => {
        nav.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <LinearGradient colors={[ '#00598B' , '#8FBC8F' ]} style={styles.something}>
                <View style={styles.recOne}/>
                <Image style={styles.image} source={require("../assets/karacare.png")} />
                <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
                <View style={styles.recTwo}></View>
                <Text style={styles.header}>SEND MEDICAL RESULTS</Text>
                <View style={styles.recThree}></View>
                <View style={styles.recFour}></View>
                <View style={styles.recFive}></View>

                {pdfUri && (
                    <View style={styles.pdfContainer}>
                        <Pdf source={{ uri: pdfUri, cache: true }} onLoadComplete={(numberOfPages, filePath) => {}} onPageChanged={(page, numberOfPages) => {}} onError={(error) => {}} />
                    </View>
                )}
                <TouchableOpacity style={styles.buttonOne} onPress={confirm}/>
                <TouchableOpacity style={styles.buttonTwo} onPress={cancel}/>
                <Text style={styles.buttonTwoText}>Cancel</Text>
                <Text style={styles.buttonOneText}>Next</Text>
            
            </LinearGradient>
    </View>
    )
}

const styles= StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something:{width: '100%', height: '100%', position: 'relative' , borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 350, height: 800, left: 39, top: 35, position: 'absolute', backgroundColor: '#BCBCBC'},
    image: {width: 68, height: 66, left: 75, top: 143, position: 'absolute'},
    buttonOne: {width: 70, height: 40, left: 133, top: 550, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    buttonTwo: {width: 70, height: 40, left: 229, top: 550, position: 'absolute', backgroundColor: '#46525E', borderRadius: 50},
    title: {width: 248, height: 49, left: 125, top: 155, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700' },
    recTwo: {width: 350, height: 80, left: 39, top: 230, position: 'absolute',  backgroundColor: '#46525E'},
    header:{width: 270, height: 23, left: 80, top: 252, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 21, fontFamily: 'Roboto', fontWeight: '700' },
    recThree: {width: 350, height: 80, left: 39, top: 635, position: 'absolute',  backgroundColor: '#8C8C8C'},
    recFour: {width: 350, height: 120, left: 39, top: 715, position: 'absolute',  backgroundColor: '#46525E'},
    recFive: {width: 350, height: 80, left: 39, top: 35, position: 'absolute',  backgroundColor: '#46525E'},
    buttonTwoText: {width: 46, height: 19, left: 240, top: 560, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700' },
    buttonOneText: {width: 46, height: 19, left: 145, top: 560, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700' },
})

export default DisplayFile;