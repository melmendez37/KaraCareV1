import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const NotifHosp = () => {
  return (
<View>
    <LinearGradient colors={['#00598B' , '#AD6868']} style={styles.something}>
        <View style={styles.recOne} />
        <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
        <Image style={styles.image} source={require('../assets/karacare.png')} />
        <View style={styles.button} />
        <View style={styles.greenthing} />
        <View style={styles.recTwo}></View>
        <Text style={styles.buttonText}>HOME</Text>
        <Text style={styles.confirm}>Form sent.</Text>
        <View style={styles.recThree}></View>
        <View style={styles.recFour}></View>
        <View style={styles.recFive}></View>
    </LinearGradient>
</View>
  )
}

const styles = StyleSheet.create({
  container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
  something:{width: '100%', height: '100%', position: 'relative' , borderRadius: 50, overflow: 'hidden'},
  recOne:{width: 350, height: 800, left: 40, top: 35, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 248, height: 49, left: 93, top: 112, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700',},
    image:{width: 68, height: 66, left: 50, top: 104, position: 'absolute'},
    button:{width: 80, height: 40, left: 175, top: 450, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    greenthing:{width: 250, height: 150, left: 96, top: 272, position: 'absolute', backgroundColor: '#62A252', borderRadius: 25},
    recTwo:{width: 350, height: 100, left: 40, top: 655, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonText:{width: 46, height: 19, left: 192, top: 460, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700',},
    recThree:{width: 350, height: 41, left: 40, top: 41, position: 'absolute', backgroundColor: '#46525E'},
    recFour:{width: 350, height: 60, left: 40, top: 183, position: 'absolute', backgroundColor: '#46525E'},
    recFive:{width: 350, height: 100, left: 40, top: 735, position: 'absolute', backgroundColor: '#46525E'},
    confirm: {width: 200, height: 120, left: 115, top: 325, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700'},


})
export default NotifHosp