
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Outpatient = () => {
  return (
<View styles={styles.container}>
    <LinearGradient colors={[ '#00598B', '#AD6868']} style={styles.something}>
        <View style={styles.recOne} />
        <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
        <Image style={styles.image} source= {require("../assets/karacare.png")} />
        <View style={styles.recTwo}/>
        <View style={styles.button1}/>
        <View style={styles.button2}></View>
        <Text style={styles.buttonText2}>Confirm</Text>
        <Text style={styles.buttonText1}>Delete</Text>
        <View style={styles.recThree}></View>
        <View style={styles.recFour}></View>
        <View style={styles.recFive}></View>
        <Text style={styles.recText1}>OUTPATIENT</Text>
        <View style={styles.container2}>
            <View style={styles.textBox1} />
            <Text style={styles.inputText1}>Name</Text>
        </View>
        <View style={styles.container3}>
            <View style={styles.textBox2} />
            <Text style={styles.inputText2}>Date of Discharge</Text>
        </View>
        <View style={styles.container4}>
            <View style={styles.textBox3} />
            <Text style={styles.inputText3}>Phone Number</Text>
        </View>
    </LinearGradient>
</View>
  )
}



const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColorColor: 'black'},
    something:{width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 280, height: 700, left: 40, top: 41, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 248, height: 49, left: 95, top: 121, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700'},
    image:{width: 68, height: 66, left: 58, top: 107, position: 'absolute'},
    recTwo:{width: 51, height: 21, left: 119, top: 420, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 100},
    button1:{width: 51, height: 21, left: 190, top: 420, position: 'absolute', backgroundColor: '#506C86', borderRadius: 100},
    button2:{width: 280, height: 56, left: 40, top: 629, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonText2:{width: 46, height: 19, left: 122, top: 422, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '700'},
    buttonText1:{width: 46, height: 19, left: 193, top: 421, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Inter', fontWeight: '700'},
    recThree:{width: 281, height: 56, left: 40, top: 685, position: 'absolute', backgroundColor: '#46525E'},
    recFour:{width: 280, height: 41, left: 40, top: 41, position: 'absolute', backgroundColor: '#46525E'},
    recFive:{width: 281, height: 48, left: 40, top: 185, position: 'absolute', backgroundColor: '#46525E'},
    recText1:{width: 237, height: 23, left: 61, top: 197, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 20, fontFamily: 'Inter', fontWeight: '700'},
    container2:{width: 247, height: 37, left: 57, top: 254, position: 'absolute'},
    textBox1:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    inputText1:{left: 16, top: 11.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400'},
    container3:{width: 247, height: 37, left: 57, top: 306, position: 'absolute'},
    textBox2:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    inputText2:{left: 16, top: 11.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400',},
    container4:{width: 247, height: 37, left: 57, top: 358, position: 'absolute'},
    textBox3:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    inputText3:{left: 16, top: 11.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400',},

})
export default Outpatient