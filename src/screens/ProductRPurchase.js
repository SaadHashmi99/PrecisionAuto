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


import { Col, Row, Grid } from 'react-native-easy-grid';

const ProductRPurchase = () => {

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
        <Text style={[STYLES.Heading, {fontSize: 20, marginTop: 9}]}>PRODUCT REQUEST-PURCHASE</Text>
          <Text style={STYLES.subHeading}>PURCHASE REQUESTS</Text>
          <ScrollView>          
            <View style={{margin: 10, marginTop: 30}}>
              <Grid>
                <Col size={10}>
                  <Row style={[STYLES.RowView, {borderTopLeftRadius: 15, height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {fontWeight: 'bold', fontSize: 16}]}>S No</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 120, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>1.</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 120, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>2.</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 120, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>3.</Text>
                  </Row>
                </Col>
                <Col size={13}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {fontWeight: 'bold', fontSize: 16}]}>VIN No.</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 120, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>5432</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 120, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>8412</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 120, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>5421</Text>
                  </Row>
                </Col>
                <Col size={14}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {fontWeight: 'bold', fontSize: 16}]}>PR RO</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 120, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.RowText]}>85</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 120, backgroundColor: '#effcfc'}]}>
                    <Text style={[STYLES.RowText]}>66</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 120, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.RowText]}>66</Text>
                  </Row>
                </Col>
                <Col size={15}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {fontWeight: 'bold', fontSize: 16}]}>PARTS</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {justifyContent: 'space-between', height: 120, backgroundColor: '#ffffff'}]}>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{marginLeft: 25}}>
                      <FontAwesome name='plus' size={20} color="#000" />
                    </TouchableOpacity>
                  </Row>
                  <Row style={[STYLES.RowView, {justifyContent: 'space-between', height: 120, backgroundColor: '#effcfc'}]}>
                    <TouchableOpacity onPress={() => setModalVisible2(true)} style={{marginLeft: 25}}>
                      <FontAwesome name='plus' size={20} color="#000" />
                    </TouchableOpacity>
                  </Row>
                  <Row style={[STYLES.RowView, {justifyContent: 'space-between', height: 120, backgroundColor: '#ffffff'}]}>
                    <TouchableOpacity onPress={() => setModalVisible3(true)} style={{marginLeft: 25}}>
                      <FontAwesome name='plus' size={20} color="#000" />
                    </TouchableOpacity>
                  </Row>
                </Col>
                <Col size={15}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0', borderTopRightRadius: 15}]}>
                    <Text style={[STYLES.RowText, {fontWeight: 'bold', fontSize: 16}]}>ACTION</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {justifyContent: 'space-between', height: 120, flexDirection: 'column', backgroundColor: '#ffffff'}]}>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, marginTop: 16}]}>REVIEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, marginTop: 5}]}> FORWARD FOR QUOTATION</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, marginTop: 5}]}> FORWARD FOR ORDER</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row style={[STYLES.RowView, {justifyContent: 'space-between', height: 120, flexDirection: 'column', backgroundColor: '#effcfc'}]}>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, marginTop: 16}]}>REVIEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, marginTop: 5}]}> FORWARD FOR QUOTATION</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, marginTop: 5}]}> FORWARD FOR ORDER</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row style={[STYLES.RowView, {justifyContent: 'space-between', height: 120, flexDirection: 'column', backgroundColor: '#ffffff'}]}>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, marginTop: 16}]}>REVIEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, marginTop: 5}]}> FORWARD FOR QUOTATION</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, marginTop: 5}]}> FORWARD FOR ORDER</Text>
                    </TouchableOpacity>
                  </Row>
                </Col>
              </Grid>
              <TouchableOpacity onPress={() => navigation.navigate('ProductROrder')}>
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
                <View style={STYLES.modalViewProductPurchase}>
                  <View>
                    <Pressable
                      style={{alignSelf: 'flex-end'}}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome name="close" size={25} color={colors.TEXT} />
                      <Text style={STYLES.modalViewProductPurchaseText}>Close</Text>
                    </View>  
                    </Pressable>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name</Text>
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
                <View style={[STYLES.modalViewProductPurchase, {marginTop: '30%'}]}>
                  <View>
                    <Pressable
                      style={{alignSelf: 'flex-end'}}
                      onPress={() => setModalVisible2(!modalVisible2)}
                    >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome name="close" size={25} color={colors.TEXT} />
                      <Text style={STYLES.modalViewProductPurchaseText}>Close</Text>
                    </View>  
                    </Pressable>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name</Text>
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
                <View style={[STYLES.modalViewProductPurchase, {marginTop: '100%'}]}>
                  <View>
                    <Pressable
                      style={{alignSelf: 'flex-end'}}
                      onPress={() => setModalVisible3(!modalVisible3)}
                    >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome name="close" size={25} color={colors.TEXT} />
                      <Text style={STYLES.modalViewProductPurchaseText}>Close</Text>
                    </View>  
                    </Pressable>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name</Text>
                    </View>  
                    <View style={{flexDirection: 'row'}}>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name - </Text>
                      <Text style={STYLES.modalViewProductPurchaseText}>Part Name</Text>
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

export default ProductRPurchase