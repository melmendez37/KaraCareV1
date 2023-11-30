import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const localImage = require('../assets/karacare.png')

const WelcomePage = () => {
    
    const nav = useNavigation();

    const handleExternalResponder = () => {
        nav.navigate('ExternalRespondentForm');
    };
    
    const handleMedStaff = () => {
        nav.navigate('LoginScreen')
    }
    
    return(
        <View style = {styles.container}>
            <LinearGradient colors = {['#00598B', '#AD6868']} style = {styles.something}>
                <View style={styles.recOne}/>
                <View style={styles.recTwo}/>
                <View style={styles.recThree}/>
                <View style={styles.recFour}/>
                <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>

                <Image style={styles.image} source = {localImage} />
                    
                <TouchableOpacity style = {styles.button1} onPress={handleExternalResponder}/>
                <Text style = {styles.buttonText}>EXTERNAL RESPONDER</Text>
                    
                <TouchableOpacity style = {styles.button2} onPress={handleExternalResponder}/>
                <Text style={styles.buttonText2}>MEDICAL STAFF</Text>

                <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>WELCOME</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something: {width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    recOne: {width: 350, height: 800, left: 40, top: 65, position: 'absolute', backgroundColor: '#BCBCBC'},
    recTwo: {width: 350, height: 60, left: 40, top: 65, position: 'absolute', backgroundColor: '#46525E'},
    recThree: {width: 350, height: 40, left: 40, top: 373, position: 'absolute', backgroundColor: '#46525E'},
    recFour: {width: 350, height: 141, left: 40, top: 724, position: 'absolute', backgroundColor: '#46525E'},
    title: {width: 250, height: 50, left: 90, top: 303, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700'},
    image: {width: 120, height: 122, left: 155, top: 162, position: 'absolute'},
    button1: {width: 150, height: 80, left: 135, top: 447, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 60, justifyContent: 'center', alignItems: 'center'},
    button2: {width: 150, height: 80, left: 135, top: 585, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 60, justifyContent: 'center', alignItems: 'center'},
    buttonText:{width: 100, height: 55, left: 165, top: 467, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 13, fontFamily: 'Roboto', fontWeight: '700'},
    buttonText2: {width: 100, height: 55, left: 165, top: 605, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 13, fontFamily: 'Roboto', fontWeight: '700'},
    welcomeContainer: {width: 151, height: 100, left: 135, top: 377, position: 'absolute', alignItems: 'center', display: 'inline-flex'},
    welcomeText: {width: 151, height: 50, textAlign: 'center', color: '#FFFDFD', fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'},
});

export default WelcomePage;
