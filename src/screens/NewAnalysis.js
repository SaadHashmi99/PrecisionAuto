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
    {label: '5432', value: '5432'},
    {label: '8412', value: '8412'},
    {label: '5431', value: '5431'},
    {label: '2232', value: '2232'},
  ];

  const [dropdown, setDropdown] = useState(null);
  const [Date, setDate] = useState('');
  const [Stock, setStock] = useState('');
  const [PartName, setPartName] = useState('');
  const [ModelNo, setModelNo] = useState('');
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
          <Text style={STYLES.Heading}>PARTS</Text>      
            <Text style={STYLES.subHeading}>ADD NEW PARTS</Text>
          <ScrollView>          
            <View style={{flexDirection: 'column', marginTop: 40}}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>VIN NUMBER:</Text>
                <Dropdown
                  style={[STYLES.inputNewAna, {marginLeft: 65}]}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="ENTER NUMBER HERE"
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
                <Text style={STYLES.textInputName}>STOCK RO NUMBER:</Text>
                <TextInput
                  placeholder="AUTO FETCH RO"
                  onChangeText={text => setStock(text)}
                  value={Stock}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewAna, {marginLeft: 10}]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={STYLES.textInputName}>DATE OF ANALYSIS:</Text>
                <TextInput
                  placeholder="AUTO DATE"
                  onChangeText={text => setStock(text)}
                  value={Stock}
                  onFocus={() => setEnableShift(true)}
                  style={[STYLES.inputNewAna, {marginLeft: 16}]}
                />
              </View>
            </View>
            <Text style={[STYLES.textInputName, {marginTop: 30}]}>PARTS:</Text>
            <View style={{flexDirection: 'column', marginTop: 10}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginRight: 10}}>
                <Text style={STYLES.textInputName}>1.</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TextInput
                    placeholder="ENTER PART NAME"
                    onChangeText={text => setPartName(text)}
                    value={PartName}
                    onFocus={() => setEnableShift(true)}
                    style={[STYLES.input2NewAna, {marginLeft: 10}]}
                  />
                  <TextInput
                    placeholder="PART #"
                    onChangeText={text => setModelNo(text)}
                    value={ModelNo}
                    onFocus={() => setEnableShift(true)}
                    style={[STYLES.input2NewAna, {marginRight: 10}]}
                  />
                  <TouchableOpacity style={[STYLES.input2NewAna, {marginLeft: -10}]}>
                    <TextInput
                      value={"Add Image"}
                      style={{fontSize: 12,
                        fontFamily: 'Montserrat-Regular', color: '#707070', height: 40, bottom: 12}}
                      editable={false} selectTextOnFocus={false}
                    />
                  </TouchableOpacity>  
                </View>  
              </View>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10, marginRight: 12}}>
              <TouchableOpacity>
                <Text style={[STYLES.appButton, {marginRight: 12}]}>ADD</Text>
              </TouchableOpacity> 
              <TouchableOpacity>
                <Text style={STYLES.appButton}>DELETE</Text>
              </TouchableOpacity> 
            </View>
            <View style={{flexDirection: 'row', marginTop: 60}}>
              <View style={{flexDirection: 'column'}}>  
                <Text style={STYLES.textInputName}>COMMENT:</Text>
              </View>  
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setComment(text)}
                value={Comment}
                onFocus={() => setEnableShift(true)}
                color='#707070'
                style={[STYLES.input3NewAna, {marginLeft: 27}]}
                placeholder="ENTER COMMENT (IF ANY)"
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Analysis')}>
              <Text style={[STYLES.appButton, {alignSelf: 'flex-end', marginRight: 10}]}>SUBMIT</Text>
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