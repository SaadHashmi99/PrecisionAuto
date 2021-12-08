import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, TextInput, Button, ScrollView, Pressable, Dimensions, KeyboardAvoidingView} from 'react-native';
import { STYLES } from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from "react-native-modal";
import ModalView from './ModalView';



const NewRegistration = () => {

  const [VIN, setVIN] = useState('');
  const [Date, setDate] = useState('');
  const [Stock, setStock] = useState('');
  const [Comment, setComment] = useState('');
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);
  const [all, setAll] = useState(true);
  const [order, setOrder] = useState(false);
  const [deliver, setDeliver] = useState(false);
  const [returned, setReturned] = useState(false);
  const [enableShift, setEnableShift] = useState(false)
  const navigation = useNavigation()

  const All = () => {
    setAll(true)
    setOrder(false)
    setDeliver(false)
    setReturned(false)
  }
  const Order = () => {
    setOrder(true)
    setAll(false)
    setDeliver(false)
    setReturned(false)
  }
  const Deliver = () => {
    setDeliver(true)
    setAll(false)
    setOrder(false)
    setReturned(false)
  }
  const Return = () => {
    setReturned(true)
    setAll(false)
    setOrder(false)
    setDeliver(false)
  }

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
          <Text style={STYLES.Heading}>REGISTRATION</Text>      
          <ScrollView>          
            <Text style={STYLES.subHeading}>NEW REGISTRATION</Text>
            <View style={{alignItems: 'center', marginTop: 30}} >
              <Image source={require('../assets/images/loader.jpg')}/>
              <Text style={{color: '#fff', bottom: '38%'}}>Click to Image</Text>
              <TouchableOpacity>
                <Text style={STYLES.appButton}>CAMERA SCAN</Text>
                </TouchableOpacity>  
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>VIN NUMBER:</Text>
              <TextInput
                placeholder="AUTO SCANNED NUMBER HERE"
                onChangeText={text => setVIN(text)}
                value={VIN}
                onFocus={() => setEnableShift(true)}
                style={[STYLES.inputNewR, {marginLeft: 10}]}
              />
            </View>
            <View style={{margin: 10}}>
              {/* <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', width: '100%'}}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => All()}>
                  <View style={all == true ? styles.filterLine : styles.filterUnline}>
                    <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>ALL</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => Order()}>
                  <View style={order == true ? styles.filterLine : styles.filterUnline}>
                    <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>ORDERED</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => Deliver()}>
                  <View style={deliver == true ? styles.filterLine : styles.filterUnline}>
                    <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>DELIVERED</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => Return()}>
                  <View style={returned == true ? styles.filterLine : styles.filterUnline}>
                    <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>RETURNED</Text>
                  </View>
                </TouchableOpacity>
              </View> */}
              <Grid style={{marginTop: 10}}>
                <Col size={25}>
                  <Row style={[STYLES.RowView, {borderTopLeftRadius: 15, height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff'}]}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, borderBottomLeftRadius: 15, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                </Col>
                <Col size={25}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff'}]}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                </Col>
                <Col size={25}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff'}]}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                </Col>
                <Col size={25}>
                  <Row style={[STYLES.RowView, {height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff'}]}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                </Col>
                <Col size={25}>
                  <Row style={[STYLES.RowView, {borderTopRightRadius: 15, height: 90, backgroundColor: '#36c3d0'}]}>
                    <Text style={[STYLES.RowText, {color: '#ffffff'}]}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: '#ffffff'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 60, borderBottomRightRadius: 1, backgroundColor: '#effcfc'}]}>
                    <Text style={STYLES.RowText}>Car Details</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>DATE:</Text>
              <TextInput
                placeholder="AUTO DATE"
                onChangeText={text => setDate(text)}
                value={Date}
                onFocus={() => setEnableShift(true)}
                style={[STYLES.inputNewR, {marginLeft: 75}]}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>STOCK RO #</Text>
              <TextInput
                placeholder="ENTER RO NUMBER"
                onChangeText={text => setStock(text)}
                value={Stock}
                onFocus={() => setEnableShift(true)}
                style={[STYLES.inputNewR, {marginLeft: 24}]}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={STYLES.textInputName}>COMMENT:</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setComment(text)}
                value={Comment}
                onFocus={() => setEnableShift(true)}
                color='#707070'
                style={[STYLES.input2NewR, {marginLeft: 27}]}
                placeholder="ENTER COMMENT (IF ANY)"
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
              <Text style={[STYLES.appButton, {alignSelf: 'flex-end', marginRight: 10, marginTop: 20}]}>ADD RECORD</Text>
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
              <Text></Text>
              <Text></Text>
              <Text></Text>
          </ScrollView>   
        </View>
      </KeyboardAvoidingView>  
    );
}

export default NewRegistration

const styles = StyleSheet.create({
  filterLine: {
    borderBottomWidth: 4, flexDirection: 'column', borderColor: 'orange' 
  }
})