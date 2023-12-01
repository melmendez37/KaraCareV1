import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const UploadFileTab = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[ '#00598B' , '#AD6868' ]} style={styles.something}>
          <View style={styles.recOne} />
          <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
          <Image style={styles.image} source= {require("../assets/karacare.png")} />
          <View style={styles.recTwo}></View>
          <View style={styles.cancelButton}/>
          <View style={styles.fileBox} />
          <Text style={styles.header}>SEND MEDICAL RESULTS</Text>
          <View style={styles.recThree}></View>
          <Text style={styles.fileBoxText}>Insert here (.pdf only)</Text>
          <Text style={styles.cancelButtonText}>Cancel</Text>
          <View style={styles.recFour}></View>
          <View style={styles.recFive}></View>
      </LinearGradient>
</View>
  )
}

const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something:{width: '100%', height: '100%', position: 'relative' , borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 350, height: 700, left: 39, top: 35, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 250, height: 50, left: 130, top: 111, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', },
    image:{width: 68, height: 66, left: 58, top: 107, position: 'absolute'},
    recTwo:{width: 350, height: 48, left: 39, top: 190, position: 'absolute', backgroundColor: '#46525E'},
    cancelButton:{width: 51, height: 19, left: 190, top: 512, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    fileBox:{width: 236, height: 205, left: 100, top: 280, position: 'absolute', backgroundColor: '#8C8C8C', borderRadius: 25},
    header:{width: 290, height: 23, left: 65, top: 202, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 18, fontFamily: 'Inter', fontWeight: '700',},
    recThree:{width: 350, height: 56, left: 39, top: 679, position: 'absolute', backgroundColor: '#46525E'},
    fileBoxText:{width: 129, height: 13, left: 150, top: 376, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', },
    cancelButtonText:{width: 46, height: 19, left: 192, top: 512, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Inter', fontWeight: '700',},
    recFour:{width: 350, height: 41, left: 39, top: 35, position: 'absolute', backgroundColor: '#46525E'},
    recFive:{width: 350, height: 56, left: 39, top: 623, position: 'absolute', backgroundColor: '#8C8C8C'},
})

export default UploadFileTab;