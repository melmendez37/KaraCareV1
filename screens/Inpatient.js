import { View, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Inpatient = () => {
    return(
    <View style={styles.container}>
        <LinearGradient colors={['#00598B', '#AD6868']} style={styles.s1}>
            <View style={styles.s2} />
            <Text style={styles.s3}> KaraCare EMERGENCY SYSTEM </Text>
            <Image style={styles.s4} source= {require('../assets/karacare.png')} />
            <View style={styles.s5} />
            <View style={styles.s6} />
            <View style={styles.s7}></View>
            <Text style={styles.s8}> Confirm </Text>
            <Text style={styles.s9}> Delete </Text>
            <View style={styles.s10}></View>
            <Text style={styles.s11}> INPATIENT </Text>
            <View style={styles.s12}></View>
            <View style={styles.s13}></View>
            <View style={styles.s14}>
                <View style={styles.s15} />
                <Text style={styles.s16}> Name </Text>
            </View>
            <View style={styles.s17}>
                <View style={styles.s18} />
                <Text style={styles.s19}> Room Number </Text>
            </View>
            <View style={styles.s20}>
                <View style={styles.s21} />
                <Text style={styles.s22}> Phone Number </Text>
            </View>
            <View style={styles.s23}>
                <View style={styles.s24} />
                <Text style={styles.s25}> MD Assigned </Text>
            </View>
        </LinearGradient>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor: 'black'},
    s1: {width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    s2:{width: 280, height: 700, left: 40, top: 41, position: 'absolute', backgroundColor: '#BCBCBC'},
    s3:{width: 248, height: 49, left: 94, top: 122, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700'},
    s4:{width: 68, height: 66, left: 60, top: 105, position: 'absolute'},
    s5:{width: 51, height: 21, left: 119, top: 476, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 100},
    s6:{width: 51, height: 21, left: 192, top: 476, position: 'absolute', backgroundColor: '#506C86', borderRadius: 100},
    s7:{width: 280, height: 56, left: 40, top: 629, position: 'absolute', backgroundColor: '#8C8C8C'},
    s8:{width: 46, height: 19, left: 122, top: 478, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '700'},
    s9:{width: 46, height: 19, left: 195, top: 478, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Inter', fontWeight: '700',},
    s10:{width: 281, height: 48, left: 40, top: 186, position: 'absolute', backgroundColor: '#46525E'},
    s11:{width: 237, height: 23, left: 64, top: 198, position: 'absolute', textAlign: 'center', color: '#FFFBFB', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', },
    s12:{width: 280, height: 41, left: 40, top: 41, position: 'absolute', backgroundColor: '#46525E'},
    s13:{width: 281, height: 56, left: 40, top: 685, position: 'absolute', backgroundColor: '#46525E'},
    s14:{width: 247, height: 37, left: 57, top: 254, position: 'absolute'},
    s15:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    s16:{left: 16, top: 11.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400', },
    s17:{width: 247, height: 37, left: 57, top: 306, position: 'absolute'},
    s18:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    s19:{left: 16, top: 11.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400', },
    s20:{width: 247, height: 37, left: 57, top: 358, position: 'absolute'},
    s21:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    s22:{left: 16, top: 11.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400',},
    s23:{width: 247, height: 37, left: 57, top: 410, position: 'absolute'},
    s24:{width: 247, height: 37, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 4, border: '1px #D5D8DE solid'},
    s25:{left: 16, top: 11.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400', }
})
export default Inpatient