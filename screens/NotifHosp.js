import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NotifHosp = () => {
  const nav = useNavigation();
  
  const backHome = () => {
    nav.navigate('Home');
  }

  return (
<View style = {styles.container}>
    <LinearGradient colors={['#00598B' , '#8FBC8F']} style={styles.something}>
        <View style={styles.recOne} />
        <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
        <Image style={styles.image} source={require('../assets/karacare.png')} />
        <View style={styles.recTwo}/>
        <View style={styles.greenthing}/>

        <TouchableOpacity style={styles.button} onPress={backHome}>
        <Text style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>
        
        <Text style={styles.confirm}>Form sent.</Text>
        <View style={styles.recThree}></View>
        <View style={styles.recFour}>
        <Text style={styles.header}>EMERGENCY ALERT</Text>
        </View>
        <View style={styles.recFive}></View>
    </LinearGradient>
</View>
  )
}

const styles = StyleSheet.create({
  container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
  something:{width: '100%', height: '100%', position: 'relative' , borderRadius: 50, overflow: 'hidden'},
  recOne:{width: 350, height: 800, left: 40, top: 65, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 248, height: 49, left: 125, top: 155, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700',},
    image:{width: 68, height: 66, left: 80, top: 140, position: 'absolute'},
    button:{width: 80, height: 40, left: 175, top: 525, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    greenthing:{width: 250, height: 150, left: 96, top: 340, position: 'absolute', backgroundColor: '#62A252', borderRadius: 25},
    recTwo:{width: 350, height: 100, left: 40, top: 680, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonText:{width: 80, height: 40, top: 10, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700',},
    recThree:{width: 350, height: 60, left: 40, top: 65, position: 'absolute', backgroundColor: '#46525E'},
    recFour:{width: 350, height: 60, left: 40, top: 220, position: 'absolute', backgroundColor: '#46525E'},
    
    recFive:{width: 350, height: 150, left: 40, top: 715, position: 'absolute', backgroundColor: '#46525E'},
    confirm: {width: 200, height: 120, left: 115, top: 400, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700'},
    header: {width: 350, height: 60, top: 12, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700'},


})
export default NotifHosp
