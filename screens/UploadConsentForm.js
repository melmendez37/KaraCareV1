import { ref, uploadBytesResumable } from '@firebase/storage';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { storage } from '../firebaseConfig';

const UploadConsentForm = () => {
  const nav = useNavigation();

  const ViewFile = () => {
    nav.navigate('DisplayFile')
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
            } else{
                Alert.alert("Please select a file smaller than 1MB")
            }      
        }
        
      }
        const UploadFile = async (blobFile, fileName) => {
          if (!blobFile) return;
            const storageRef = ref(storage, `ConsentForm(Hypothethical)/${fileName}`);
            await uploadBytesResumable(storageRef, blobFile);
            nav.navigate('NotifHosp');
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={[ '#00598B' , '#8FBC8F' ]} style={styles.something}>
          <View style={styles.recOne} />
          <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
          <Image style={styles.image} source= {require("../assets/karacare.png")} />
          <View style={styles.recTwo}></View>
          <TouchableOpacity style={styles.nextButton} onPress={ViewFile}/>
          <Text style={styles.header}>SEND MEDICAL RESULTS</Text>
          <View style={styles.recThree}/>
          <View style={styles.buttonPDF}>
          <Button title='Upload here (.pdf only)' onPress = {pickDocument}/>
          </View>
          <Text style={styles.cancelButtonText}>Next</Text>
          <View style={styles.recFour}></View>
          <View style={styles.recFive}></View>
      </LinearGradient>
</View>
  )
}

const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something:{width: '100%', height: '100%', position: 'relative' , borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 350, height: 800, left: 39, top: 35, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 250, height: 50, left: 130, top: 111, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', },
    image:{width: 68, height: 66, left: 58, top: 107, position: 'absolute'},
    recTwo:{width: 350, height: 48, left: 39, top: 190, position: 'absolute', backgroundColor: '#46525E'},
    nextButton:{width: 80, height: 40, left: 175, top: 375, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    header:{width: 290, height: 23, left: 65, top: 202, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700',},
    recThree:{width: 350, height: 135, left: 39, top: 700, position: 'absolute', backgroundColor: '#46525E'},
    fileBoxText:{width: 129, height: 13, left: 150, top: 376, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700', },
    cancelButtonText:{width: 46, height: 19, left: 192, top: 385, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700',},
    recFour:{width: 350, height: 41, left: 39, top: 35, position: 'absolute', backgroundColor: '#46525E'},
    recFive:{width: 350, height: 77, left: 39, top: 623, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonPDF: {width: 300, height: 50, left: 65, top: 300},
})

export default UploadConsentForm;
