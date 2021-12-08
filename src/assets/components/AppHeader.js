import React from 'react';
import {Text, View} from 'react-native';
import { APP } from '../styles/index';
import * as colors from '../colors/index';
import LinearGradient from 'react-native-linear-gradient';

export default function AppHeader() {
    return (
      <View style={APP.container}>
        <LinearGradient colors={['#5DCBEC', '#3790CE']}>
            <View style={{
                alignItems:'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color:'white',
                    fontSize:scale(20),
                    fontFamily:'Montserrat-Bold'
                }}>PRECISION AUTOMOBILE MANAGEMENT SYSTEM</Text>
            </View>
        </LinearGradient>
      </View>   
    );
}