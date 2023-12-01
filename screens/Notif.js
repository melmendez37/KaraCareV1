import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Notif = () => {
  return (
<LinearGradient colors={[ '#00598B', '#AD6868']} style={styles.something}>
    <View style={styles.recOne} />
    <View style={styles.button1} />
    <View style={styles.button2} />
    <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
    <Image style={styles.image} source={require('../assets/karacare.png')} />
    <View style={styles.recTwo}></View>
    <View style={styles.logOffButton} />
    <View style={styles.homeButton} />
    <Text style={styles.homeText}>Home</Text>
    <Text style={styles.header}>NOTIFY HOSPITAL</Text>
    <View style={styles.recThree}></View>
    <Text style={styles.logOffText}>Log Off</Text>
    <Text style={styles.inpatientText}>INPATIENT</Text>
    <Text style={styles.outpatientText}>OUTPATIENT</Text>
    <View style={styles.recFour}></View>
</LinearGradient>
  )
}

export default Notif

const styles = StyleSheet.create({
    something:{width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 350, height: 700, left: 40, top: 40, position: 'absolute', backgroundColor: '#BCBCBC'},
    button1:{width: 150, height: 46, left: 150, top: 295, position: 'absolute', backgroundColor: '#8C8C8C', borderRadius: 100},
    button2:{width: 150, height: 46, left: 150, top: 360, position: 'absolute', backgroundColor: '#8C8C8C', borderRadius: 1000},
    title:{width: 233, height: 49, left: 131, top: 117, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', },
    image:{width: 68, height: 66, left: 59, top: 103, position: 'absolute'},
    recTwo:{width: 352, height: 48, left: 40, top: 190, position: 'absolute', backgroundColor: '#46525E'},
    logOffButton:{width: 51, height: 21, left: 310, top: 203, position: 'absolute', backgroundColor: '#46525E'},
    homeButton:{width: 51, height: 19, left: 197, top: 434, position: 'absolute', backgroundColor: '#8C8C8C', borderRadius: 100},
    homeText:{width: 46, height: 19, left: 200, top: 434, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', },
    header:{width: 230, height: 30, left: 50, top: 202, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', },
    recThree:{width: 351, height: 56, left: 39, top: 684, position: 'absolute', backgroundColor: '#46525E'},
    logOffText:{width: 50, height: 19, left: 310, top: 205, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', },
    inpatientText:{width: 147, height: 26, left: 150, top: 307, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', },
    outpatientText:{width: 170, height: 26, left: 145, top: 376, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', },
    recFour:{width: 350, height: 41, left: 40, top: 40, position: 'absolute', backgroundColor: '#46525E'},
})