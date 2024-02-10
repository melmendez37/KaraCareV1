import { ref, uploadBytesResumable } from '@firebase/storage';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db, storage } from "../firebaseConfig";

const Inpatient = () => {
    const nav = useNavigation();
    const [load, setLoad] = useState(false);
    const [roomNumberList, setRoomNums] = useState([]);



    const reportCollection = collection(db, "InpatientRecords");

    const isReady = () =>{
        for(let doc of roomNumberList){
            if(doc.RoomNumber.toString() == room.toString()){
                return false;
            }
        }
        return true;
    }
useEffect(() => {
    const getRecords = async() =>{
        const data = await getDocs(reportCollection);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setRoomNums(filteredData)
    }
    getRecords()
}, [])

    const sumbitReport = async() =>{
        try {
            await addDoc(reportCollection, {
                Name: name,
                RoomNumber: room,
                PhoneNumber: num,
                MDAssigned: doc
            });
        } catch (error) {
            console.log(error)
        } 
    };

        const pickDocument = async () => {
            let result = await DocumentPicker.getDocumentAsync({})
            if (result != null) {
                if(result.assets[0].size < 1000000){
        
                    const r = await fetch(result.assets[0].uri);
                    const b = await r.blob();
        
                    if (b != null) {
                        UploadConsentFile(b, result.assets[0].name)
                    }
                    
                    setTimeout(() => {
                        setLoad(false);
                        Alert.alert("UPLOAD SUCCESS", "File upload successful.")
                    }, 1000)
                    setLoad(false);
                    } else{
                    Alert.alert("Please select a file smaller than 1MB")
                }
        }
        setLoad(false);
        }

        const pickPastResults = async () => {
            let result = await DocumentPicker.getDocumentAsync({})
            if (result != null) {
                if(result.assets[0].size < 1000000){
        
                    const r = await fetch(result.assets[0].uri);
                    const b = await r.blob();
        
                    if (b != null) {
                        UploadPastFile(b, result.assets[0].name)
                    }
                    
                    setTimeout(() => {
                        setLoad(false);
                        Alert.alert("UPLOAD SUCCESS", "File upload successful.")
                    }, 1000)
                    setLoad(false);
                    } else{
                    Alert.alert("UPLOAD ERROR","Please select a file smaller than 1MB")
                }
            }
            setLoad(false);
        }

        const UploadConsentFile = async (blobFile, fileName) => {
            if (!blobFile) return;
            const storageRef = ref(storage, `ConsentForm(Hypothethical)/${fileName}`);
            await uploadBytesResumable(storageRef, blobFile);
        }
        
        const UploadPastFile = async (blobFile, fileName) => {
            if (!blobFile) return;
                const storageRef = ref(storage, `Medical Results(old)/${fileName}`);
                await uploadBytesResumable(storageRef, blobFile);
        }

    const goNext = () => {
        if(!name || !num || !room || !doc){
            Alert.alert('WARNING', 'Please fill up the missing fields');
        }
        else if(!/^\d+$/.test(num) || !num.startsWith('09')){
            Alert.alert('INPUT ERROR!', 'Please enter a valid phone number Ex.(09123456789)')
        }
        else if(num.toString().length != 11){
            Alert.alert('INPUT ERROR!', 'Number must be 11 digits.')
        }
        else if(isReady() == false){
            Alert.alert("ERROR","Room is already taken");
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
                                sumbitReport()
                                nav.navigate('NotifHosp');
                            },
                        },
                    ],
                    {cancelable:false}
                );     
        }
    }

    const goBack = () => {
        nav.navigate('Notif');
    }
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [name, setName] = useState('');
    const [isRoomFocused, setIsRoomFocused] = useState(false);
    const [room, setRoom] = useState('');
    const [isNumFocused, setIsNumFocused] = useState(false);
    const [num, setNum] = useState('');
    const [isDocFocused, setIsDocFocused] = useState(false);
    const [doc, setDoc] = useState('');

    const handleFocus = (field) => {
        switch (field){
            case 'name':
                setIsNameFocused(true);
                break;
            case 'doc':
                setIsDocFocused(true);
                break;
            case 'num':
                setIsNumFocused(true);
                break;
            case 'room':
                setIsRoomFocused(true);
            default:
                break;
        }
    }
  
    const handleBlur = (field) => {
        switch (field){
            case 'name':
                setIsNameFocused(false);
                break;
            case 'num':
                setIsNumFocused(false);
                break;
            case 'room':
                setIsRoomFocused(false);
                break;
            case 'doc':
                setIsDocFocused(false);
                break;
            default:
                break;
        }
    }

  return (
<View style={styles.container}>
    <LinearGradient colors={[ '#00598B', '#8FBC8F']} style={styles.something}>
        <View style={styles.recOnere} />
        <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
        <Image style={styles.image} source= {require("../assets/karacare.png")} />
        <View style={styles.recTwo}/>
        <TouchableOpacity style={styles.button1} onPress={goNext}>
        <Text style={styles.buttonText2}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={goBack}>
        <Text style={styles.buttonText1}>Back</Text>
        </TouchableOpacity>
        
        
        <View style={styles.recThree}></View>
        <View style={styles.recFour}></View>
        <View style={styles.header}></View>
        <Text style={styles.recText1}>INPATIENT</Text>
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
                            value={room}
                            textAlign= "center"
                            onFocus = {() => handleFocus('room')}
                            onBlur = {() => handleBlur('room')}
                            onChangeText={(text) => setRoom(text)}
                            placeholder = {(isRoomFocused || room) ? '': 'Room Number'}
                            placeholderColor = "#888"/>
        </View>
        <View style={styles.textBox3}>
        <TextInput style={styles.textField3}
                            value={num}
                            textAlign= "center"
                            onFocus = {() => handleFocus('num')}
                            onBlur = {() => handleBlur('num')}
                            onChangeText={(text) => setNum(text)}
                            placeholder = {(isNumFocused || num) ? '': 'Phone Number'}
                            placeholderColor = "#888"/>
        </View>

        <View style={styles.textBox4}>
        <TextInput style={styles.textField4}
                            value={doc}
                            textAlign= "center"
                            onFocus = {() => handleFocus('doc')}
                            onBlur = {() => handleBlur('doc')}
                            onChangeText={(text) => setDoc(text)}
                            placeholder = {(isDocFocused || doc) ? '': 'Assigned MD'}
                            placeholderColor = "#888"/>
        </View>

        <View style={styles.buttonPDF}>
        <Button title='Upload CONSENT FORM' onPress = {pickDocument}/>
        </View>

        <View style={styles.buttonPDF2}>
        <Button title='Upload previous results' onPress = {pickPastResults} style = {{backgroundColor: '#fff', marginLeft: 10, fontSize: 24, fontFamily: 'Roboto'}}/>
        </View>

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
    something:{width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    recOnere:{width: 350, height: 800, left: 40, top: 65, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 248, height: 49, left: 140, top: 138, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700'},
    image:{width: 68, height: 66, left: 80, top: 122, position: 'absolute'},
    button2:{width: 80, height: 40, left: 222, top: 620, position: 'absolute', backgroundColor: '#46525E', borderRadius: 100},
    button1:{width: 80, height: 40, left: 133, top: 620, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 100},
    recTwo:{width: 350, height: 60, left: 40, top: 705, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonText2:{width: 80, height: 20, top: 10, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    buttonText1:{width: 80, height: 20, top: 10, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    recThree:{width: 350, height: 109, left: 40, top: 756, position: 'absolute', backgroundColor: '#46525E'},
    recFour:{width: 350, height: 41, left: 40, top: 65, position: 'absolute', backgroundColor: '#46525E'},
    header:{width: 350, height: 48, left: 40, top: 200, position: 'absolute', backgroundColor: '#46525E'},
    recText1:{width: 237, height: 23, left: 100, top: 210, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700'},

    textBox1:{width: 250, height: 40, left: 95, top: 270, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    textField1:{width: 200, height: 40, left: 20, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400',},
    textBox2:{width: 250, height: 40, left: 95, top: 325, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    textField2:{width: 200, height: 40, left: 20, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400',},
    textBox3:{width: 250, height: 40, left: 95, top: 380, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    textField3:{width: 200, height: 40, left: 20, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400',},
    textBox4:{width: 250, height: 40, left: 95, top: 435, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    textField4:{width: 200, height: 40, left: 20, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400',},
    buttonPDF: {width: 210, left: 115, top: 490, borderRadius: 20},
    buttonPDF2: {width: 210, left: 115, top: 500, borderRadius: 20},
    loadingPop: {flexDirection:'row', width: 300, height: 100, left: 65, top: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: '#444444', borderRadius: 20},
    loadingtext: {width: 151, height: 40, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 25, fontFamily: 'Roboto', fontWeight: '700'},

})
export default Inpatient;
