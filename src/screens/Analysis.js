import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, StyleSheet, Button, ScrollView, Dimensions, Pressable} from 'react-native';
import { STYLES } from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
import Modal from "react-native-modal";
import ModalView from './ModalView';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';

const NewAnalysis = () => {

  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);

    return (
      <View style={STYLES.container}>
      <Image source={require('../assets/images/light.jpg')} style={{opacity: 0.1, zIndex: -1, position: 'absolute', width: Dimensions.get("screen").width, height: Dimensions.get("screen").height}} />
        <View style={STYLES.headView}>
          <Text style={STYLES.headText}>PRECISION AUTOMOBILE MANAGEMENT SYSTEM</Text>
        </View> 
        <TouchableOpacity onPress={() => setModalVisibleMenu(true)}>
          <Ionicons name='menu-outline' style={{marginTop: 13, marginLeft: 10}} size={30} color={colors.TEXT} />
        </TouchableOpacity>  
        <Text style={STYLES.Heading}>ANALYSIS</Text>      
          <Text style={STYLES.subHeading}>PARTS LIST</Text>
          <ScrollView>          
            <View style={{margin: 10, marginTop: 30}}>
              <Grid>
                <Col size={10}>
                  <Row style={[STYLES.RowView, {borderTopLeftRadius: 15, height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff', fontSize: 16}]}>S No</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>1.</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>2.</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>3.</Text>
                  </Row>
                </Col>
                <Col size={10}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff', fontSize: 16}]}>VIN</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>5432</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>8412</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>5421</Text>
                  </Row>
                </Col>
                <Col size={15}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff', fontSize: 16}]}>STOCK RO</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>445</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>989</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>872</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff', fontSize: 16}]}>DATE OF ANALYSIS</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>3-11-2021</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>2-2-2021</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>2-3-2021</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row style={[STYLES.RowView, {borderTopRightRadius: 15, height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff', fontSize: 16, marginLeft: -25}]}>PARTS</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
                    <Text style={STYLES.RowText}>17 Parts</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{marginRight: 20}}>
                      <FontAwesome name='plus' size={20} color="#000" />
                    </TouchableOpacity>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc', justifyContent: 'space-between'}]}>
                    <Text style={STYLES.RowText}>12 Parts</Text>
                    <TouchableOpacity onPress={() => setModalVisible2(true)} style={{marginRight: 20}}>
                      <FontAwesome name='plus' size={20} color="#000" />
                    </TouchableOpacity>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff', justifyContent: 'space-between'}]}>
                    <Text style={STYLES.RowText}>9 Parts</Text>
                    <TouchableOpacity onPress={() => setModalVisible3(true)} style={{marginRight: 20}}>
                      <FontAwesome name='plus' size={20} color="#000" />
                    </TouchableOpacity>
                  </Row>
                </Col>
              </Grid>
              <TouchableOpacity onPress={() => navigation.navigate('ProductRQuotation')}>
                <Text style={[STYLES.appButton, {alignSelf: 'center', marginTop: 50}]}>NEXT</Text>
              </TouchableOpacity>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={STYLES.modalView}>
                  <View>
                    <Pressable
                      style={{alignSelf: 'flex-end'}}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome name="close" size={25} color={colors.TEXT} />
                      <Text style={STYLES.modalText}>Close</Text>
                    </View>  
                    </Pressable>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name</Text>
                    </View>  
                  </View>
                </View>
              </Modal>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible2(!modalVisible2);
                }}
              >
                <View style={[STYLES.modalView, {marginTop: '-9%'}]}>
                  <View>
                    <Pressable
                      style={{alignSelf: 'flex-end'}}
                      onPress={() => setModalVisible2(!modalVisible2)}
                    >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome name="close" size={25} color={colors.TEXT} />
                      <Text style={STYLES.modalText}>Close</Text>
                    </View>  
                    </Pressable>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name</Text>
                    </View>  
                  </View>
                </View>
              </Modal>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible3}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible3(!modalVisible3);
                }}
              >
                <View style={[STYLES.modalView, {marginTop: '13%'}]}>
                  <View>
                    <Pressable
                      style={{alignSelf: 'flex-end'}}
                      onPress={() => setModalVisible3(!modalVisible3)}
                    >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome name="close" size={25} color={colors.TEXT} />
                      <Text style={STYLES.modalText}>Close</Text>
                    </View>  
                    </Pressable>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name - </Text>
                      <Text style={STYLES.modalText}>Part Name</Text>
                    </View>  
                  </View>
                </View>
              </Modal>
            </View>
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
            </ScrollView>   
      </View>   
    );
}

export default NewAnalysis