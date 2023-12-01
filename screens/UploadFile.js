import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

/*import FilePickerManager from 'react-native-file-picker';
*/
const UploadFileTab = () => {
  const nav = useNavigation();
  const ViewFile = () => {
    nav.navigate('DisplayFile')
  }
  const FileUpload = ({onFileSelected}) => {
    const pickDocument = async () => {
      try{
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
        });
      
        onFileSelected(result);
      }
      catch (err){
        if(DocumentPicker.isCancel(err)){
          console.log('Upload cancelled');
        }
        else{
          console.error('Error uploading');
          Alert.alert('Error', 'Upload failed.');
        }
      }
    };

  }
  
  return (
    <View style={styles.container}>
      <LinearGradient colors={[ '#00598B' , '#AD6868' ]} style={styles.something}>
          <View style={styles.recOne} />
          <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
          <Image style={styles.image} source= {require("../assets/karacare.png")} />
          <View style={styles.recTwo}></View>
          <TouchableOpacity style={styles.nextButton} onPress={ViewFile}/>
          <Text style={styles.header}>SEND MEDICAL RESULTS</Text>
          <View style={styles.recThree}>
            <Button title='Upload here (.pdf only)' onPress = {FileUpload}/>
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
    nextButton:{width: 80, height: 40, left: 175, top: 500, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    header:{width: 290, height: 23, left: 65, top: 202, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700',},
    recThree:{width: 350, height: 135, left: 39, top: 300, position: 'absolute', backgroundColor: '#46525E'},
    fileBoxText:{width: 129, height: 13, left: 150, top: 376, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700', },
    cancelButtonText:{width: 46, height: 19, left: 192, top: 510, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700',},
    recFour:{width: 350, height: 41, left: 39, top: 35, position: 'absolute', backgroundColor: '#46525E'},
    recFive:{width: 350, height: 77, left: 39, top: 623, position: 'absolute', backgroundColor: '#8C8C8C'},
})

export default UploadFileTab;