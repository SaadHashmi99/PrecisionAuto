import React, {useState} from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Alert, ActivityIndicator, TouchableOpacity, TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { STYLES } from '../assets/styles/index';
import * as colors from '../assets/colors/index';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()

    return (
        <View style={[STYLES.container, {alignItems: 'center'}]}>
        <Image source={require('../assets/images/dark.jpg')} style={{opacity: 0.1, zIndex: -1, position: 'absolute', width: Dimensions.get("screen").width, height: Dimensions.get("screen").height}} />
            <View style={{marginTop: 50}}>
                <Image source={require("../assets/images/logo.png")} style={styles.logo} resizeMode='contain'/> 
            </View>

            {/* <View style={{
                marginTop: 10
            }}>
                <Text style={styles.loginText}>Login</Text>
            </View> */}
            
            <View style={{
                alignItems: 'center',
                marginTop: 20
            }}>
                <LinearGradient colors={['#E3FBFF', '#F2F2F2']} style={styles.linearGradientText}>
                    <TextInput  
                        style={styles.input}
                        onChangeText={setEmail}
                        placeholder="Email"
                        allowFontScaling={false} 
                    />
                </LinearGradient>
                <LinearGradient colors={['#E3FBFF', '#F2F2F2']} style={styles.linearGradientText}>
                    <TextInput  
                        style={styles.input}           
                        onChangeText={setPassword}           
                        placeholder="Password"                
                        allowFontScaling={false} 
                        secureTextEntry={true}
                    />
                </LinearGradient>
            </View>

            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Dashboard')}>
                <LinearGradient colors={['#3e1c13',  '#633f2e']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Next</Text>
                </LinearGradient>
            </TouchableOpacity>
            
            {/* <TouchableOpacity>
                <Text style={{
                        color:'#228588',
                        textDecorationLine:'underline',
                        marginTop: 15,
                        fontFamily:'Montserrat-Regular'
                    }}>Forgot Password</Text>
            </TouchableOpacity> */}

        </View>
    )
}

const styles = StyleSheet.create({
    loginText:{
        fontSize: 32,
        color: colors.PRIMARY,
        fontFamily:'Montserrat-Regular'
    },
    linearGradient: {
        width: 290,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        // borderRadius: 25,
        marginTop: 10,
    },
    linearGradientText: {
        width: 290,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 5,
        fontFamily:'Montserrat-Regular'
    },
    buttonBorder: {
        width: 130,
        height: 40,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'blue',
        marginTop: 15
    }, 
    buttonText: {
        fontSize: 15,
        color: 'white',
        fontFamily:'Montserrat-Bold'
    },
    buttonIn: {
        fontSize: 15,
        color: 'blue',
        fontFamily:'Montserrat-Regular'
    },
    lastText: {
        justifyContent: 'center',
        marginTop: 30,
        flexDirection:'row',
        fontFamily:'Montserrat-Regular'
    },
    input: {
        height: 50,
        width: 290,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        color: 'black',
        fontSize:15,
        fontFamily:'Montserrat-Regular'
    },
    logo:{
        width: 250,
        height: 250
    },
})