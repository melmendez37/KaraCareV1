import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import WelcomePage from "./Welcome";

const localImage = require('../assets/karacare.png')


const ExternalRepsonderForm = () => {
    const nav = useNavigation();

    const handleExternalResponder = () => {
        if(!name || !address || !number || !cause){
            Alert.alert('Incomplete Form', 'Fill up the missing fields');
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
                            nav.navigate('ExtResNotification');
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

                <TouchableOpacity style = {styles.buttonOne} onPress={handleExternalResponder}/>
                <Text style={styles.confirm}>Next</Text>
                
                <TouchableOpacity style = {styles.buttonTwo} onPress={WelcomePage}/>
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
    recOne: {width: 280, height: 700, left: 70, top: 80, position: 'absolute', backgroundColor: '#BCBCBC'},
    title: {width: 165, height: 49, left: 166, top: 170, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700'},
    image: {width: 68, height: 66, left: 96, top: 155, position: 'absolute'},
    recTwo: {width: 281, height: 77, left: 70, top: 236, position: 'absolute', backgroundColor: '#8C8C8C'},
    buttonOne: {width: 55, height: 21, left: 143, top: 540, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    buttonTwo: {width: 55, height: 21, left: 219, top: 540, position: 'absolute', backgroundColor: '#46525E', borderRadius: 50},
    header: {width: 228, height: 40, left: 96, top: 260, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700'},
    recThree: {width: 280, height: 56, left: 70, top: 724, position: 'absolute', backgroundColor: '#8C8C8C'},
    recFour: {width: 280, height: 56, left: 70, top: 80, position: 'absolute', backgroundColor: '#8C8C8C'},
    confirm: {width: 46, height: 19, left: 146, top: 543, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700'},
    delete: {width: 46, height: 19, left: 222, top: 543, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700'},
    recFive: {width: 170, height: 26, left: 125, top: 340, position: 'absolute'},
    fieldOne: {width: 170, height: 26, left: 0, top: 0, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50},
    ambot: {width: 170, height: 26, left: 95, top: 350, position: 'absolute'},
    fieldTwo: {width: 170, height: 26, left: 30, top: 40, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50, textAlign: 'center'},
    amboy: {width: 170, height: 26, left: 95, top: 400, position: 'absolute'},
    fieldThree: {width: 170, height: 26, left: 30, top: 40, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50, textAlign: 'center'},
    sumn: {width: 170, height: 26, left: 95, top: 450, position: 'absolute'},
    fieldFour: {width: 170, height: 26, left: 30, top: 40, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 50, textAlign: 'center'},
});

export default ExternalRepsonderForm;