import { useNavigation } from "@react-navigation/native";

const localImage = require('../assets/karacare.png')

const LoginScreen = () => {
    const nav = useNavigation();

    return(
        <View style={styles.container}>
            <LinearGradient colors = {['#00598B', '#AD6868']} style = {styles.something}>
                <View style={styles.recOne}/>
                <View style={styles.title}>KaraCare EMERGENCY SYSTEM</View>
                <Image style={styles.image} source = {require(localImage)}/>
                <View style={styles.recTwo}></View>
                <View style={styles.recThree} />
                <View style={styles.button} />
                <View style={styles.headerText}>LOGIN</View>
                <View style={styles.header}></View>
                <View style={styles.loginText}>Log In</View>
                <View style={styles.signupText}>Sign Up</View>
                <View style={{width: 280, height: 41, left: 40, top: 40, position: 'absolute', background: '#46525E', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px black solid'}}></View>
                <View style={{width: 247, height: 37, left: 58, top: 302, position: 'absolute'}}>
                    <View style={{width: 247, height: 37, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 4, border: '1px #D5D8DE solid'}} />
                    <View style={{left: 16, top: 11.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400', }}>Username</View>
                </View>
                    <View style={{width: 247, height: 37, left: 58, top: 353, position: 'absolute'}}>
                        <View style={{width: 247, height: 37, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 4, border: '1px #D5D8DE solid'}} />
                        <View style={{left: 16, top: 11.77, position: 'absolute', opacity: 0.80, color: '#323941', fontSize: 16, fontFamily: 'PT Mono', fontWeight: '400', }}>Password</View>
                    </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #00598B 0%, #AD6868 100%)', borderRadius: 50, overflow: 'hidden'},
    recOne: {width: 280, height: 700, left: 40, top: 40, position: 'absolute', background: '#BCBCBC'},
    image: {width: 68, height: 66, left: 79, top: 105, position: 'absolute'},
    title: {width: 170, height: 49, left: 126, top: 112, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700'},
    recThree: {width: 51, height: 21, left: 126, top: 433, position: 'absolute', background: '#D9D9D9', borderRadius: 100},
    button: {width: 51, height: 21, left: 186, top: 433, position: 'absolute', background: '#46525E', borderRadius: 100},
    headerText: {width: 151, height: 23, left: 106, top: 202, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 25, fontFamily: 'Roboto', fontWeight: '700'},
    header: {width: 280, height: 56, left: 40, top: 685, position: 'absolute', background: '#46525E'},
    loginText: {width: 46, height: 19, left: 128, top: 435, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700'},
    signupText: {width: 46, height: 19, left: 188, top: 435, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700'}
})

export default LoginScreen;