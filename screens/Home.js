import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebaseConfig";

const localImage = require('../assets/karacare.png');

const Home = () => {
    const nav = useNavigation();
    

    const gotoForm = () => {
        nav.navigate('MedStaffForm');
    }

    const gotoNotifyHospital = () => {
        nav.navigate('Notif');
    }

    const gotoSendResults = () => {
        nav.navigate('SendRes')
    }

    const [load, setLoad] = useState(false);

    const goLogout = () => {
        Alert.alert(
            'Confirmation',
            'Do you wish to log out?',
            [
                {type:'Cancel', style: 'cancel'},
                {
                    text: 'Logout',
                    onPress: async () => {
                        try{
                            await signOut(auth)
                            setTimeout(() => {
                                if(auth.currentUser == null){
                                    nav.navigate('LoginScreen');
                                    }
                            }, 1000);
                        }catch(error){
                            Alert.alert('ERROR', 'Logout Error');
                        }finally{
                            setLoad(true);
                        }
                        
                    },
                },
            ],
            {cancelable:false}
        );
    }

    return(
        <View style={styles.container}>
            <LinearGradient colors = {['#00598B', '#8FBC8F']} style = {styles.something}>
            
                <View style={styles.mainRec}></View>
                <View style={styles.rec2}></View>
                <View style={styles.recFour}></View>
                <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
                <Image style={styles.image} source={localImage} />

                <TouchableOpacity style={styles.logoutButton} onPress={goLogout}>
                <Text style={styles.logOut}>Log Out</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={gotoForm}>
                <Text style={styles.button1text}>EMERGENCY ALERT</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button2} onPress={gotoNotifyHospital}>
                <Text style={styles.button2text}>NOTIFY HOSPITAL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button3} onPress={gotoSendResults}>
                <Text style={styles.button3text}>SEND MEDICAL RESULTS</Text>
                </TouchableOpacity>

                <Text style={styles.header}>HOME</Text>
                <View style={styles.rec}></View>
                
                
                
                
                
                
                {load &&(
                    <View style={styles.loadBox}>
                        <Text style = {{ color: '#fff', marginLeft: 10, fontSize: 24, fontFamily: 'Roboto' }}>Loading...</Text>
                        <ActivityIndicator size="large" color="#fff"/>
                    </View>
                )}
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something: {width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    mainRec: {width: 350, height: 800, left: 40, top: 65, position: 'absolute', backgroundColor: '#BCBCBC'},
    header: {width: 151, height: 26, left: 140, top: 225, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700'},
    logOut: {width: 70, height: 30, top: 8, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700'},
    button1: {width: 150, height: 100, left: 140, top: 290, position: 'absolute', backgroundColor: '#46525E', borderRadius: 20},
    button2: {width: 150, height: 100, left: 140, top: 405, position: 'absolute', backgroundColor: '#8C8C8C', borderRadius: 20},
    button3: {width: 150, height: 100, left: 140, top: 520, position: 'absolute', backgroundColor: '#46525E', borderRadius: 20},
    button1text: {width: 150, height: 100, top:40, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    button2text: {width: 150, height: 100, top:40, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    button3text: {width: 150, height: 100, top:30, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    rec: {width: 350, height: 162, left: 40, top: 704, position: 'absolute', backgroundColor: '#46525E'},
    rec2: {width: 350, height: 60, left: 40, top: 210, position: 'absolute', backgroundColor: '#46525E'},
    recFour: {width: 350, height: 50, left: 40, top: 65, position: 'absolute', backgroundColor: '#46525E'},
    title: {width: 248, height: 49, left: 120, top: 145, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700'  },
    image: {width: 68, height: 66, left: 70, top: 130, position: 'absolute'},
    logoutButton: {width: 70, height: 30, left: 180, top: 640, position: 'absolute', backgroundColor: 'white', borderRadius: 20},
    loadBox: {flexDirection: 'row', width: 300, height: 100, left: 65, top: 400, justifyContent: 'center', alignItems: 'center', backgroundColor: '#444444', borderRadius: 20},
    
})

export default Home;
