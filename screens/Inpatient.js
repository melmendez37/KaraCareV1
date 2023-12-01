import { View, Image, Text, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Inpatient = () => {
    return(
    <View style={styles.container}>
        <LinearGradient colors={['#00598B', '#AD6868']} style={styles.s1}>
            <View style={styles.s2} />
            <Text style={styles.title}> KaraCare EMERGENCY SYSTEM </Text>
            <Image style={styles.s4} source= {require('../assets/karacare.png')} />
            <View style={styles.confirmButton} />
            <View style={styles.deleteButton} />
            <View style={styles.s7}></View>
            <Text style={styles.confirmText}> Confirm </Text>
            <Text style={styles.deleteText}> Delete </Text>
            <View style={styles.s10}></View>
            <Text style={styles.inpatientText}> INPATIENT </Text>
            <View style={styles.s12}></View>
            <View style={styles.s13}></View>
            <View style={styles.container1}>
                <View style={styles.textBox1} />
                <TextInput placeholder='Name' style={styles.input1}></TextInput>
            </View>
            <View style={styles.container2}>
                <View style={styles.textBox2} />
                <TextInput placeholder='Room Number' style={styles.input2}></TextInput>
            </View>
            <View style={styles.container3}>
                <View style={styles.textBox3} />
                <TextInput placeholder='Phone Number' style={styles.input3}></TextInput>
            </View>
            <View style={styles.container4}>
                <View style={styles.textBox4} />
                <TextInput placeholder='MS Assigned' style={styles.input4}></TextInput>
            </View>
        </LinearGradient>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    s1: {width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    s2:{width: 340, height: 700, left: 40, top: 41, position: 'absolute', backgroundColor: '#BCBCBC'},
    title:{width: 248, height: 49, left: 130, top: 122, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700'},
    s4:{width: 68, height: 66, left: 60, top: 105, position: 'absolute'},
    confirmButton:{width: 65, height: 21, left: 147, top: 476, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 100},
    deleteButton:{width: 65, height: 21, left: 220, top: 476, position: 'absolute', backgroundColor: '#506C86', borderRadius: 100},
    s7:{width: 340, height: 56, left: 40, top: 629, position: 'absolute', backgroundColor: '#8C8C8C'},
    confirmText:{width: 58, height: 19, left: 148, top: 478, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '700'},
    deleteText:{width: 50, height: 19, left: 226, top: 478, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Inter', fontWeight: '700',},
    s10:{width: 341, height: 48, left: 40, top: 186, position: 'absolute', backgroundColor: '#46525E'},
    inpatientText:{width: 237, height: 30, left: 87, top: 198, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', },
    s12:{width: 340, height: 41, left: 40, top: 41, position: 'absolute', backgroundColor: '#46525E'},
    s13:{width: 341, height: 56, left: 40, top: 685, position: 'absolute', backgroundColor: '#46525E'},
    container1:{width: 247, height: 37, left: 87, top: 254, position: 'absolute'},
    textBox1:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    input1:{left: 16, top: 7.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400', },
    container2:{width: 247, height: 37, left: 87, top: 306, position: 'absolute'},
    textBox2:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    input2:{left: 16, top: 7.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400', },
    container3:{width: 247, height: 37, left: 87, top: 358, position: 'absolute'},
    textBox3:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    input3:{left: 16, top: 7.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400',},
    container4:{width: 247, height: 37, left: 87, top: 410, position: 'absolute'},
    textBox4:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    input4:{left: 16, top: 7.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400', }
})
export default Inpatient