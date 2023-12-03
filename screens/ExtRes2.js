import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const localImage = require('../assets/karacare.png')


const MedStaffForm = () => {
    const nav = useNavigation();

    const backHome = () => {
        nav.navigate('Home');
    }

    const handleMedStaff = () => {
        if(!name || !address || !number || !cause){
            Alert.alert('INCOMPLETE FORM', 'Please fill up the missing fields');
        }
        else if(!/^\d+$/.test(number) || !number.startsWith('09')){
            Alert.alert('INPUT ERROR!', 'Please enter a valid phone number Ex.(09123456789)')
        }
        else if(number.toString().length != 11){
            Alert.alert('INPUT ERROR!', 'Number must be 11 digits.')
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
                            nav.navigate('MedStaffNotif');
                        },
                    },
                ],
                {cancelable:false}
            );
        }
        
    };

    const [isNameFocused, setIsNameFocused] = useState(false);
    const [name, setName] = useState('');
    const [isAddFocused, setIsAddFocused] = useState(false);
    const [address, setAddress] = useState('');
    const [isNumFocused, setIsNumFocused] = useState(false);
    const [number, setNumber] = useState('');
    const [isCauseFocused, setIsCauseFocused] = useState(false);
    const [cause, setCause] = useState('');



    const handleFocus = (field) => {
        switch (field){
            case 'name':
                setIsNameFocused(true);
                break;
            case 'address':
                setIsAddFocused(true);
                break;
            case 'number':
                setIsNumFocused(true);
                break;
            case 'cause':
                setIsCauseFocused(true);
                break;
            default:
                break;
        }
    };

    const handleBlur = (field) => {
        switch (field) {
            case 'name':
                setIsNameFocused(false);
                break;
            case 'address':
                setIsAddFocused(false);
                break;
            case 'number':
                setIsNumFocused(false);
                break;
            case 'cause':
                setIsCauseFocused(false);
                break;
            default:
                break;
            };
    };


    return(
        <View style={styles.container}>
            <LinearGradient colors = {['#00598B', '#AD6868']} style = {styles.something}>
                <View style={styles.recOne} />
                <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
                <Image style={styles.image} source={localImage}/>
                <View style={styles.recTwo}></View>
                <View style={styles.buttonTwo} />
                <Text style={styles.header}>EMERGENCY ALERT</Text>
                <View style={styles.recThree}></View>
                <View style={styles.recFour}></View>

                <TouchableOpacity style = {styles.buttonOne} onPress={handleMedStaff}/>
                <Text style={[styles.confirm, {pointerEvents:('none')}]}>Next</Text>
                
                <TouchableOpacity style = {styles.buttonTwo} onPress={backHome}/>
                <Text style={styles.delete}>Back</Text>
                <View style={styles.recFive}>

                <View style={styles.fieldOne} />
                <TextInput  style={styles.fieldOne}
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholder = {(isNameFocused || name) ? '': 'Name'}
                            placeholderColor = "#888"
                            textAlign= "center"
                            onFocus = {() => handleFocus('name')}
                            onBlur = {() => handleBlur('name')}
                            />
                </View>

                <View style={styles.ambot}>
                <TextInput  style={styles.fieldTwo}
                            value={address}
                            onChangeText={(text) => setAddress(text)}
                            placeholder = {(isAddFocused || address) ? '': 'Address'}
                            placeholderColor = "#888"
                            textAlign= "center"
                            onFocus = {() => handleFocus('address')}
                            onBlur = {() => handleBlur('address')}
                            />
                </View>

                <View style={styles.amboy}>
                <TextInput  style={styles.fieldThree}
                            value={number}
                            textAlign= "center"
                            onFocus = {() => handleFocus('number')}
                            onBlur = {() => handleBlur('number')}
                            onChangeText={(text) => setNumber(text)}
                            placeholder = {(isNumFocused || number) ? '': 'Phone Number'}
                            placeholderColor = "#888" />
                </View>

                <View style={styles.sumn}>
                <TextInput  style={styles.fieldFour}
                            value={cause}
                            textAlign= "center"
                            onFocus = {() => handleFocus('cause')}
                            onBlur = {() => handleBlur('cause')}
                            onChangeText={(text) => setCause(text)}
                            placeholder = {(isCauseFocused || cause) ? '': 'Cause'}
                            placeholderColor = "#888"/>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    something: {width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    
    recOne: {width: 350, height: 800, left: 40, top: 65, position: 'absolute', backgroundColor: '#BCBCBC'},
    title: {width: 200, height: 49, left: 166, top: 160, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700'},
    image: {width: 68, height: 66, left: 76, top: 150, position: 'absolute'},
    recTwo: {width: 350, height: 77, left: 40, top: 236, position: 'absolute', backgroundColor: '#8C8C8C'},
    
    buttonOne: {width: 70, height: 40, left: 133, top: 560, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    buttonTwo: {width: 70, height: 40, left: 229, top: 560, position: 'absolute', backgroundColor: '#46525E', borderRadius: 50},
    header: {width: 240, height: 60, left: 96, top: 260, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700'},
    recThree: {width: 350, height: 141, left: 40, top: 724, position: 'absolute', backgroundColor: '#8C8C8C'},
    recFour: {width: 350, height: 60, left: 40, top: 65, position: 'absolute', backgroundColor: '#8C8C8C'},
    confirm: {width: 40, height: 20, left: 147, top: 567, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    delete: {width: 40, height: 20, left: 242, top: 567, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    recFive: {width: 170, height: 26, left: 125, top: 340, position: 'absolute'},
    fieldOne: {width: 250, height: 40, left: -35, top: 0, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    ambot: {width: 170, height: 26, left: 95, top: 350, position: 'absolute'},
    fieldTwo: {width: 250, height: 40, left: -5, top: 40, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50, textAlign: 'center'},
    amboy: {width: 170, height: 26, left: 95, top: 400, position: 'absolute'},
    fieldThree: {width: 250, height: 40, left: -5, top: 40, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50, textAlign: 'center'},
    sumn: {width: 170, height: 26, left: 95, top: 450, position: 'absolute'},
    fieldFour: {width: 250, height: 40, left: -5, top: 40, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50, textAlign: 'center'},
});

export default MedStaffForm;