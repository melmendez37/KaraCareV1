import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const SendRes = () => {
  return (
    <LinearGradient colors={['#00598B', '#AD6868']} style={styles.something}>
    <View style={styles.recOne} />
    <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
    <Image style={styles.image} source={require('../assets/karacare.png')}  />
    <View style={styles.nextButton} />
    <View style={styles.cancelButton} />
    <Text style={styles.nextButtonText}>Next</Text>
    <Text style={styles.cancelButtonText}>Cancel</Text>
    <View style={styles.recTwo}></View>
    <Text style={styles.header}>SEND MEDICAL RESULTS</Text>
    <View style={styles.recThree}></View>
    <View style={styles.recFour}></View>
    <View style={styles.recFive}></View>
    <View style={styles.textBox1}>
        <View style={styles.textField1} />
        <TextInput placeholder='Name' style={styles.textInput1}></TextInput>
    </View>
    <View style={styles.textBox2}>
        <View style={styles.textField2} />
        <TextInput placeholder='PhoneNumber' style={styles.textInput2}></TextInput>
    </View>
</LinearGradient>
  )
}



const styles = StyleSheet.create({
    something:{width: '100%', height: '100%', position: 'relative' , borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 280, height: 700, left: 40, top: 40, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 190, height: 49, left: 125, top: 116, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700',},
    image:{width: 68, height: 66, left: 57, top: 102, position: 'absolute'},
    nextButton:{width: 51, height: 21, left: 123, top: 393, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 100},
    cancelButton:{width: 51, height: 21, left: 191, top: 393, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    nextButtonText:{width: 46, height: 19, left: 125, top: 394, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', },
    cancelButtonText:{width: 46, height: 19, left: 194, top: 394, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Inter', fontWeight: '700',},
    recTwo:{width: 280, height: 48, left: 40, top: 190, position: 'absolute', backgroundColor: '#46525E'},
    header:{width: 237, height: 23, left: 62, top: 202, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', },
    recThree:{width: 280, height: 41, left: 40, top: 39, position: 'absolute', backgroundColor: '#46525E'},
    recFour:{width: 280, height: 56, left: 40, top: 628, position: 'absolute', backgroundColor: '#8C8C8C'},
    recFive:{width: 280, height: 56, left: 40, top: 684, position: 'absolute', backgroundColor: '#46525E'},
    textBox1:{width: 170, height: 26, left: 95, top: 305, position: 'absolute'},
    textField1:{width: 170, height: 26, left: 0, top: 0, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 100},
    textInput1:{width: 170, height: 26, left: 0, top: 5, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', },
    textBox2:{width: 170, height: 26, left: 95, top: 349, position: 'absolute'},
    textField2:{width: 170, height: 26, left: 0, top: 0, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 100},
    textInput2:{width: 170, height: 26, left: 0, top: 5, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',},

})
export default SendRes;