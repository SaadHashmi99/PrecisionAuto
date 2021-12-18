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

const ProductROrder = () => {

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
          <Text style={STYLES.subHeading}>PURCHASE ORDER LIST</Text>
          <View style={[STYLES.headView, {marginTop: 20}]}>
            <Text style={STYLES.headText}>PR 4478</Text>
          </View> 
          <ScrollView>          
            <View style={{margin: 10, marginTop: 30}}>
              <Grid>
                <Col size={10}>
                  <Row style={[STYLES.RowView, {borderTopLeftRadius: 15, height: 60, backgroundColor: colors.SECONDARY}]}>
                    <Text style={[STYLES.RowText, {fontWeight: 'bold', color: '#ffffff', fontSize: 16}]}>S No</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>1.</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#bfa09d'}]}>
                    <Text style={STYLES.RowText}>2.</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>3.</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: colors.SECONDARY}]}>
                    <Text style={[STYLES.RowText, {fontWeight: 'bold', color: '#ffffff', fontSize: 16}]}>SUPPLIERS</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>SUPPLIER 1</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#bfa09d'}]}>
                    <Text style={STYLES.RowText}>SUPPLIER 2</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>SUPPLIER 3</Text>
                  </Row>
                </Col>
                <Col size={10}>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: colors.SECONDARY}]}>
                    <Text style={[STYLES.RowText, {fontWeight: 'bold', color: '#ffffff', fontSize: 16}]}>PO</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>4478</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#bfa09d'}]}>
                    <Text style={STYLES.RowText}>4474</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>1124</Text>
                  </Row>
                </Col>
                <Col size={20}>
                  <Row style={[STYLES.RowView, {borderTopRightRadius: 15, height: 60, backgroundColor: colors.SECONDARY}]}>
                    <Text style={[STYLES.RowText, {fontWeight: 'bold', color: '#ffffff', fontSize: 16}]}>EXP DELIVERY DATE</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>20 Nov 2021</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#bfa09d'}]}>
                    <Text style={STYLES.RowText}>2 Dec 2021</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>10 Jan 2022</Text>
                  </Row>
                </Col>
              </Grid>
              <TouchableOpacity onPress={() => navigation.navigate('ProductRGood')}>
                <Text style={[STYLES.appButton, {alignSelf: 'center', marginTop: 50}]}>NEXT</Text>
              </TouchableOpacity>
            </View>
            <Modal
              transparent={true}
              isVisible={modalVisibleMenu}
              animationIn="slideInLeft"
              animationOut="slideOutLeft"
              backdropOpacity={0.2}
              onBackdropPress={() => setModalVisibleMenu(false)}
            >
                <LinearGradient colors={[colors.SECONDARY, colors.SECONDARY]} style={STYLES.modalViewRegistration}>
                    <ScrollView>
                        <View style={{marginTop: '8%', margin: 10}}>
                        <TouchableOpacity onPress={() => setModalVisibleMenu(false)} style={{zIndex: 1, width: 25, alignSelf: 'flex-end'}}>
                            <FontAwesome name='times' style={{marginTop: 90, bottom: 60}} size={30} color="#ffffff" />
                        </TouchableOpacity> 
                        <Image source={require("../assets/images/logo-white.png")} style={{width: 250, height: 250, marginTop: -120}} resizeMode='contain'/> 
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

export default ProductROrder