import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Notif = () => {
  const nav = useNavigation();

  const patientIn = () => {
    nav.navigate('Inpatient');
  }
  const patientOut = () => {
    nav.navigate('Outpatient');
  }
  const Home = () => {
    nav.navigate('Home')
  }

  return (
  <View style = {styles.container}>
    <LinearGradient colors={[ '#00598B', '#AD6868']} style={styles.something}>
        <View style={styles.recOne} />
    
        <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
        <Image style={styles.image} source={require('../assets/karacare.png')} />
        <View style={styles.logOffButton} />
        <View style={styles.recTwo}></View>
        
        <TouchableOpacity style = {styles.homeButton} onPress={Home}/>
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.header}>NOTIFY HOSPITAL</Text>
        <View style={styles.recThree}></View>
        <Text style={styles.logOffText}>Log Off</Text>
        <TouchableOpacity style={styles.button1} onPress={patientIn}/>
        <TouchableOpacity style={styles.button2} onPress={patientOut}/>
        <Text style={styles.button1text}>INPATIENT</Text>
        <Text style={styles.button2text}>OUTPATIENT</Text>
        <View style={styles.recFour}></View>
    </LinearGradient>
  </View>
  )
}

export default Notif

const styles = StyleSheet.create({
  container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
  something:{width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 350, height: 800, left: 40, top: 40, position: 'absolute', backgroundColor: '#BCBCBC'},
    button1: {width: 150, height: 100, left: 135, top: 320, position: 'absolute', backgroundColor: '#46525E', borderRadius: 20},
    button2: {width: 150, height: 100, left: 135, top: 435, position: 'absolute', backgroundColor: '#8C8C8C', borderRadius: 20},
    title:{width: 233, height: 49, left: 131, top: 117, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', },
    image:{width: 68, height: 66, left: 59, top: 103, position: 'absolute'},
    recTwo:{width: 350, height: 48, left: 40, top: 190, position: 'absolute', backgroundColor: '#46525E'},
    logOffButton:{width: 51, height: 21, left: 310, top: 203, position: 'absolute', backgroundColor: 'white'},
    homeButton:{width: 70, height: 40, left: 175, top: 560, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    homeText:{width: 40, height: 20, left: 190, top: 567, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    header:{width: 230, height: 30, left: 50, top: 202, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', },
    recThree:{width: 350, height: 156, left: 40, top: 684, position: 'absolute', backgroundColor: '#46525E'},
    logOffText:{width: 50, height: 19, left: 310, top: 205, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700', },
    button1text: {width: 170, height: 40, left: 125, top: 360, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    button2text: {width: 170, height: 40, left: 125, top: 475, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    recFour:{width: 350, height: 41, left: 40, top: 40, position: 'absolute', backgroundColor: '#46525E'},
    
})