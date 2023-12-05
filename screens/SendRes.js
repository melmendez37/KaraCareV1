import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SendRes = () => {
  const nav = useNavigation();
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [name, setName] = useState('');
    const [isMrnFocused, setIsMrnFocused] = useState(false);
    const [mrn, setMrn] = useState('');
    const [isDateFocused, setIsDateFocused] = useState(false);
    const [date, setDate] = useState('');
    const [isAddFocused, setIsAddFocused] = useState(false);
    const [add, setAdd] = useState('');
    const [isCondFocused, setIsCondFocused] = useState(false);
    const [cond, setCond] = useState('');

    const cancel = () => {
      nav.navigate('Home');
    }

    const next = () => {
      nav.navigate('UploadFileTab');
    }
    const goNext = () => {
      if(!name || !mrn || !date){
          Alert.alert('WARNING', 'Please fill up the missing fields');
      }
      else{
          Alert.alert(
              'Confirmation',
              'Do you wish to proceed?',
              [
                  {type:'Cancel', style: 'cancel'},
                  {
                      text: 'Confirm',
                      onPress: () => {
                          nav.navigate('SentResNotif');
                      },
                  },
              ],
              {cancelable:false}
          );
      }
  }

  const handleFocus = (field) => {
    switch (field){
        case 'name':
            setIsNameFocused(true);
            break;
        case 'mrn':
            setIsMrnFocused(true);
            break;
        case 'date':
          setIsDateFocused(true);
        case 'add':
            setIsAddFocused(true);
        case 'cond':
            setIsCondFocused(true);
        default:
            break;
    }
}

  const handleBlur = (field) => {
      switch (field){
          case 'name':
              setIsNameFocused(false);
              break;
          case 'mrn':
              setIsMrnFocused(false);
              break;
          case 'date':
              setIsDateFocused(false);
          case 'add':
              setIsAddFocused(false);
          case 'cond':
              setIsCondFocused(false);
          default:
              break;
      }
  }

  const handleDateChange = (text) => {
    let formattedDate = text.replace(/\D/g, '');
    if (formattedDate.length > 2) {
        formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
    }
    if (formattedDate.length > 5) {
        formattedDate = `${formattedDate.slice(0, 5)}/${formattedDate.slice(5)}`;
    }
    if (formattedDate.length > 10) {
        formattedDate = formattedDate.slice(0, 10)
    }
    setDate(formattedDate);
    }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00598B', '#8FBC8F']} style={styles.something}>
      <View style={styles.recOne} />
      <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
      <Image style={styles.image} source={require('../assets/karacare.png')}  />
      <View style={styles.nextButton} />
      <View style={styles.cancelButton} />
      <TouchableOpacity style={styles.nextButton} onPress={goNext}/>
      <TouchableOpacity style={styles.cancelButton} onPress={cancel}/>
      <Text style={styles.nextButtonText}>Next</Text>
      <Text style={styles.cancelButtonText}>Cancel</Text>
      <View style={styles.recTwo}></View>
      <Text style={styles.header}>SEND MEDICAL RESULTS</Text>
      <View style={styles.recThree}></View>
      <View style={styles.recFour}></View>
      <View style={styles.recFive}></View>
      <View style={styles.textBox1}>
      <TextInput style={styles.textField1}
                            value={name}
                            textAlign= "center"
                            onFocus = {() => handleFocus('name')}
                            onBlur = {() => handleBlur('name')}
                            onChangeText={(text) => setName(text)}
                            placeholder = {(isNameFocused || name) ? '': 'Name'}
                            placeholderColor = "#888"/>
      </View>
      <View style={styles.textBox2}>
      <TextInput style={styles.textField2}
                            value={mrn}
                            textAlign= "center"
                            onFocus = {() => handleFocus('mrn')}
                            onBlur = {() => handleBlur('mrn')}
                            onChangeText={(text) => setMrn(text)}
                            placeholder = {(isMrnFocused || mrn) ? '': 'MRN (Medical Record Number)'}
                            placeholderColor = "#888"/>
      </View>

      <View style={styles.textBox3}>
      <TextInput style={styles.textField3}
                            value={date}
                            textAlign= "center"
                            onFocus = {() => handleFocus('date')}
                            onBlur = {() => handleBlur('date')}
                            onChangeText={handleDateChange}
                            placeholder = {(isDateFocused || date) ? '': 'Date of Discharge'}
                            placeholderColor = "#888"/>

      <View style={styles.textBox4}>
      <TextInput style={styles.textField4}
                            value={add}
                            textAlign= "center"
                            onFocus = {() => handleFocus('add')}
                            onBlur = {() => handleBlur('add')}
                            onChangeText={(text) => setAdd(text)}
                            placeholder = {(isAddFocused || add) ? '': 'Address'}
                            placeholderColor = "#888"/>
      </View>

      <View style={styles.textBox5}>
      <TextInput style={styles.textField5}
                            value={cond}
                            textAlign= "center"
                            onFocus = {() => handleFocus('cond')}
                            onBlur = {() => handleBlur('cond')}
                            onChangeText={(text) => setCond(text)}
                            placeholder = {(isCondFocused || cond) ? '': 'Condition'}
                            placeholderColor = "#888"/>
      </View>
      </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something:{width: '100%', height: '100%', position: 'relative' , borderRadius: 50, overflow: 'hidden'},
    recOne:{width: 350, height: 800, left: 40, top: 40, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 200, height: 49, left: 150, top: 116, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700',},
    image:{width: 68, height: 66, left: 67, top: 112, position: 'absolute'},
    nextButton:{width: 80, height: 40, left: 133, top: 580, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 100},
    cancelButton:{width: 80, height: 40, left: 222, top: 580, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    nextButtonText:{width: 40, height: 20, left: 147, top: 590, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    cancelButtonText:{width: 50, height: 20, left: 230, top: 590, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    recTwo:{width: 350, height: 80, left: 40, top: 190, position: 'absolute', backgroundColor: '#46525E'},
    header:{width: 300, height: 25, left: 62, top: 212, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 22, fontFamily: 'Roboto', fontWeight: '700', },
    recThree:{width: 350, height: 60, left: 40, top: 39, position: 'absolute', backgroundColor: '#46525E'},
    recFour:{width: 350, height: 80, left: 40, top: 645, position: 'absolute', backgroundColor: '#8C8C8C'},
    recFive:{width: 350, height: 115, left: 40, top: 725, position: 'absolute', backgroundColor: '#46525E'},
    textBox1:{width: 250, height: 40, left: 95, top: 305, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    textField1:{width: 200, height: 40, left: 20, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400',},
    textBox2:{width: 250, height: 40, left: 95, top: 360, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    textField2:{width: 200, height: 40, left: 20, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400',},
    textBox3:{width: 250, height: 40, left: 95, top: 415, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    textField3:{width: 200, height: 40, left: 20, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400',},
    textBox4:{width: 250, height: 40, left: 0, top: 55, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    textField4:{width: 200, height: 40, left: 20, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400',},
    textBox5:{width: 250, height: 40, left: 0, top: 110, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    textField5:{width: 200, height: 40, left: 20, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400',},
})
export default SendRes;