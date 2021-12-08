import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, StyleSheet, Button, ScrollView, Dimensions, Pressable, KeyboardAvoidingView} from 'react-native';
import { STYLES } from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
import Modal from "react-native-modal";
import ModalView from './ModalView';


const NewAnalysis = () => {
  const data = [
    {label: 'ANALYST', value: 'ANALYST'},
    {label: 'PURCHASERS', value: 'PURCHASERS'},
    {label: 'BODY WORKER', value: 'BODY WORKER'},
    {label: 'PAINTER', value: 'PAINTER'},
    {label: 'MECHANIC', value: 'MECHANIC'},
    {label: 'DETAILER', value: 'DETAILER'},
  ];

  const [dropdown, setDropdown] = useState(null);
  const [Date, setDate] = useState('');
  const [EmployeeN, setEmployeeN] = useState('');
  const [EmployeeID, setEmployeeID] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Comment, setComment] = useState('');
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [enableShift, setEnableShift] = useState(false)
  const navigation = useNavigation()
    return (
      <KeyboardAvoidingView style={STYLES.container} behavior="padding" enable={enableShift}>
        <View>
          <Image source={require('../assets/images/light.jpg')} style={{opacity: 0.1, zIndex: -1, position: 'absolute', width: Dimensions.get("screen").width, height: Dimensions.get("screen").height}} />
          <View style={STYLES.headView}>
            <Text style={STYLES.headText}>PRECISION AUTOMOBILE MANAGEMENT SYSTEM</Text>
          </View> 
          <TouchableOpacity onPress={() => setModalVisibleMenu(true)}>
            <Ionicons name='menu-outline' style={{marginTop: 13, marginLeft: 10}} size={30} color={colors.TEXT} />
          </TouchableOpacity>  
          <Text style={STYLES.Heading}>USER AND ROLES</Text>      
            <Text style={STYLES.subHeading}>ADD A USER</Text>
          <ScrollView>          
            <View style={{flexDirection: 'column', marginTop: 20}}>
              <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 30, alignSelf: 'center'}}>
                <Text style={STYLES.textInputName}>DATE:</Text>
                <TextInput
                  placeholder="AUTO DATE"
                  onChangeText={text => setDate(text)}
                  value={Date}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 10}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>EMPLOYEE NAME:</Text>
                <TextInput
                  placeholder="ENTER EMPLOYEE NAME"
                  onChangeText={text => setEmployeeN(text)}
                  value={EmployeeN}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 10}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>EMPLOYEE ID:</Text>
                <TextInput
                  placeholder="AUTO GENERATED"
                  onChangeText={text => setEmployeeID(text)}
                  value={EmployeeID}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 46}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>SELECT ROLE:</Text>
                <Dropdown
                  style={[STYLES.inputNewBodyWor, {marginLeft: 47}]}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="SELECT ROLE OF USER"
                  // placeholderTextColor="grey"
                  value={dropdown}
                  onChange={item => {
                  setDropdown(item.value);
                    ('selected', item);
                  }}
                  maxHeight= {112}
                  selectedTextStyle={{fontSize: 12, fontFamily: 'Montserrat-Regular'}}
                  placeholderStyle={{fontSize: 12, fontFamily: 'Montserrat-Regular'}}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>USERNAME:</Text>
                <TextInput
                  placeholder="ENTER USERNAME"
                  onChangeText={text => setUsername(text)}
                  value={Username}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 62}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>PASSWORD:</Text>
                <TextInput
                  placeholder="ENTER PASSWORD"
                  onChangeText={text => setPassword(text)}
                  value={Password}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewBodyWor, {marginLeft: 62}]}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Users')}>
              <Text style={[STYLES.appButton, {alignSelf: 'flex-end', marginRight: 10, marginTop: 30}]}>ADD USER</Text>
            </TouchableOpacity> 
            <Modal
                transparent={true}
                isVisible={modalVisibleMenu}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
              >
              <Pressable onPress={() => setModalVisibleMenu(false)} style={{width: '28.5%', height: Dimensions.get("screen").height, alignSelf: 'flex-end', position: 'absolute', zIndex: 1}}>
                  <Text style={{color: '#fff'}}></Text>
              </Pressable>
                  <LinearGradient colors={['#417bdb', '#337cdb']} style={STYLES.modalViewRegistration}>
                      <ScrollView>
                          <View style={{marginTop: '8%', margin: 10}}>
                          <TouchableOpacity onPress={() => setModalVisibleMenu(false)} style={{zIndex: 1, width: 25, alignSelf: 'flex-end'}}>
                              <FontAwesome name='times' style={{marginTop: 90, bottom: 60}} size={30} color="#ffffff" />
                          </TouchableOpacity> 
                          <Image source={require("../assets/images/logo.png")} style={{width: 250, height: 250, marginTop: -120}} resizeMode='contain'/> 
                        <ModalView />
                        </View>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </ScrollView>
                </LinearGradient>
              </Modal>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
          </ScrollView>   
        </View>
      </KeyboardAvoidingView>     
    );
}

export default NewAnalysis