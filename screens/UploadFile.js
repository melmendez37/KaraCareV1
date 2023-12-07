import { ref, uploadBytesResumable } from '@firebase/storage';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { storage } from '../firebaseConfig';

const UploadFileTab = () => {
  const nav = useNavigation();
  const [load, setLoad] = useState(false);


  const SendRes = () => {
    nav.navigate('SentResNotif')
  }

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({})
    if (result != null) {
        if(result.assets[0].size < 1000000){

            const r = await fetch(result.assets[0].uri);
            const b = await r.blob();

            if (b != null) {
                UploadFile(b, result.assets[0].name)
            }
            
            setTimeout(() => {
              setLoad(false);
              Alert.alert("UPLOAD SUCCESS", "File upload successful.")
            }, 1000)
            
          } else{
            Alert.alert("Please select a file smaller than 1MB")
        }
    }
  }
        const UploadFile = async (blobFile, fileName) => {
          if (!blobFile) return;
            const storageRef = ref(storage, `Medical Results(Hypothethical)/${fileName}`);
            await uploadBytesResumable(storageRef, blobFile);
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={[ '#00598B' , '#8FBC8F' ]} style={styles.something}>
          <View style={styles.recOne} />
          <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
          <Image style={styles.image} source= {require("../assets/karacare.png")} />
          <View style={styles.recTwo}></View>

          <TouchableOpacity style={styles.nextButton} onPress={SendRes}>
          <Text style={styles.cancelButtonText}>Next</Text>
          </TouchableOpacity>

          <Text style={styles.header}>SEND MEDICAL RESULTS</Text>
          <View style={styles.recThree}/>
          <View style={styles.buttonPDF}>
          <Button title='Upload results here' onPress = {pickDocument}/>
          </View>
          <View style={styles.recFour}></View>
          <View style={styles.recFive}></View>

          {load &&(
                    <View style={styles.loadingPop}>
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
    something:{width: '100%', height: '100%', position: 'relative' , borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 350, height: 800, left: 40, top: 65, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 250, height: 50, left: 130, top: 146, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', },
    image:{width: 68, height: 66, left: 70, top: 132, position: 'absolute'},
    recTwo:{width: 350, height: 48, left: 40, top: 216, position: 'absolute', backgroundColor: '#46525E'},
    nextButton:{width: 80, height: 40, left: 175, top: 400, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    header:{width: 290, height: 23, left: 65, top: 227, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700',},
    recThree:{width: 350, height: 135, left: 40, top: 730, position: 'absolute', backgroundColor: '#46525E'},
    fileBoxText:{width: 129, height: 13, left: 150, top: 376, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700', },
    cancelButtonText:{width: 80, height: 40, top:10,  position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700',},
    recFour:{width: 350, height: 60, left: 40, top: 61, position: 'absolute', backgroundColor: '#46525E'},
    recFive:{width: 350, height: 77, left: 40, top: 655, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonPDF: {width: 270, height: 100, left: 80, top: 330},
    loadingPop: {flexDirection:'row', width: 300, height: 100, left: 65, top: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: '#444444', borderRadius: 20},
    loadingtext: {width: 151, height: 40, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 25, fontFamily: 'Roboto', fontWeight: '700'},
})

export default UploadFileTab;
