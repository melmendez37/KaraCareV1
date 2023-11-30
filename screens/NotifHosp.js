import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

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
        <View style={styles.recThree}></View>
        <View style={styles.recFour}></View>
        <View style={styles.recFive}></View>
    </LinearGradient>
</View>
  )
}

const styles = StyleSheet.create({
    container:{width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something:{width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 280, height: 700, left: 40, top: 41, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 248, height: 49, left: 93, top: 112, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700',},
    image:{width: 68, height: 66, left: 50, top: 104, position: 'absolute'},
    button:{width: 51, height: 21, left: 154, top: 419, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    greenthing:{width: 169, height: 129, left: 96, top: 272, position: 'absolute', backgroundColor: '#62A252', borderRadius: 25},
    recTwo:{width: 280, height: 56, left: 40, top: 629, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonText:{width: 46, height: 19, left: 157, top: 421, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Inter', fontWeight: '700',},
    recThree:{width: 280, height: 41, left: 40, top: 41, position: 'absolute', backgroundColor: '#46525E'},
    recFour:{width: 280, height: 48, left: 40, top: 183, position: 'absolute', backgroundColor: '#46525E'},
    recFive:{width: 281, height: 56, left: 40, top: 685, position: 'absolute', backgroundColor: '#46525E'},

})
export default NotifHosp