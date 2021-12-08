import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, Button, ScrollView, Dimensions, Pressable} from 'react-native';
import { STYLES } from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Dropdown} from 'react-native-element-dropdown';

import { Col, Row, Grid } from 'react-native-easy-grid';

import Modal from "react-native-modal";
import ModalView from './ModalView';


const Registration = () => {

  const data = [
      {label: 'Active', value: 'Active'},
      {label: 'In-Active', value: 'InActive'},
  ];

  const [VIN, setVIN] = useState('');
  const [Stock, setStock] = useState('');
  const [Callender, setCallender] = useState('');
  const [dropdown, setDropdown] = useState(null);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const navigation = useNavigation()
    return (
      <View style={STYLES.container}>
      <Image source={require('../assets/images/light.jpg')} style={{opacity: 0.1, zIndex: -1, position: 'absolute', width: Dimensions.get("screen").width, height: Dimensions.get("screen").height}} />
        <View style={STYLES.headView}>
            <Text style={STYLES.headText}>PRECISION AUTOMOBILE MANAGEMENT SYSTEM</Text>
        </View> 
        <TouchableOpacity onPress={() => setModalVisibleMenu(true)}>
          <Ionicons name='menu-outline' style={{marginTop: 13, marginLeft: 10}} size={30} color={colors.TEXT} />
        </TouchableOpacity> 
        <Text style={STYLES.Heading}>REGISTRATION</Text>      
          <Text style={STYLES.subHeading}>VEHICLE LIST</Text>
        <ScrollView>
          <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'space-between'}}>
            <TextInput
              placeholder="VIN NO"
              onChangeText={text => setVIN(text)}
              value={VIN}
              style={STYLES.inputReg}
            />
            <TextInput
              placeholder="STOCK NO."
              onChangeText={text => setStock(text)}
              value={Stock}
              style={STYLES.inputReg}
            />
            <TextInput
              placeholder="CALLENDER"
              onChangeText={text => setCallender(text)}
              value={Callender}
              style={STYLES.inputReg}
            />
            <Dropdown
              style={STYLES.inputReg}
              data={data}
              labelField="label"
              valueField="value"
              placeholder="Status"
              // placeholderTextColor="grey"
              value={dropdown}
              onChange={item => {
              setDropdown(item.value);
                ('selected', item);
              }}
              maxHeight= {112}
              selectedTextStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
              placeholderStyle={{fontSize: 10, fontFamily: 'Montserrat-Regular'}}
            />
          </View>
          <View style={{margin: 10}}>
            <Grid style={{borderWidth: 1}}>
              <Col size={15}>
                <Row style={STYLES.cell2}>
                  <Text style={[STYLES.tableText2, {fontWeight: 'bold'}]}>S No</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>1.</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>2.</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>3.</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>4.</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>5.</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>6.</Text>
                </Row>
              </Col>
              <Col size={20}>
                <Row style={STYLES.cell2}>
                  <Text style={[STYLES.tableText2, {fontWeight: 'bold'}]}>VIN No.</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>5432</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>8412</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>5421</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>2232</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>2312</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>5661</Text>
                </Row>
              </Col>
              <Col size={20}>
                <Row style={STYLES.cell2}>
                  <Text style={[STYLES.tableText2, {fontWeight: 'bold'}]}>STOCK RO</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>445</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>989</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>102</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>400</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>789</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>862</Text>
                </Row>
              </Col>
              <Col size={30}>
                <Row style={STYLES.cell2}>
                  <Text style={[STYLES.tableText2, {fontWeight: 'bold'}]}>Reg Date</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>2-Nov-21</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>15-Dec-21</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>10-March-21</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>2-Nov-21</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>15-Dec-21</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>10-March-21</Text>
                </Row>
              </Col>
              <Col size={25}>
                <Row style={STYLES.cell2}>
                  <Text style={[STYLES.tableText2, {fontWeight: 'bold'}]}>PARTS</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>Parts Evaluation</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>Parts Evaluation</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>Parts Evaluation</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>Parts Evaluation</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>Parts Evaluation</Text>
                </Row>
                <Row style={STYLES.cell}>
                  <Text style={STYLES.tableText2}>Parts Evaluation</Text>
                </Row>
              </Col>
            </Grid>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('NewAnalysis')}>
            <Text style={[STYLES.appButton, {alignSelf: 'center'}]}>NEXT</Text>
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
                          {/* {icon == true 
                              ?
                              <Ionicons name='add-circle-outline' style={{marginLeft: 8}} size={25} color="#ffffff" />
                              :
                              <Ionicons name='remove-circle-outline' style={{marginLeft: 8}} size={25} color="#ffffff" />
                          } */}
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
        </ScrollView>   
      </View>   
    );
}

export default Registration