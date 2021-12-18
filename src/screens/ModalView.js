import React, {useState} from 'react'
import { Text, View, Image, TouchableOpacity, Pressable, Dimensions, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { STYLES } from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ModalView() {
    const navigation = useNavigation()
    const [registration, setRegistration] = useState(false);
    const [analysis, setAnalysis] = useState(false);
    const [product, setProduct] = useState(false);
    const [workshop, setWorkshop] = useState(false);
    const [user, setUser] = useState(false);
    const [settings, setSettings] = useState(false);
    
    const Registration = () => {
        if(registration == true) {
            setRegistration(false)
        } else {
            setRegistration(true)
        }
    }

    const Analysis = () => {
        if(analysis == true) {
            setAnalysis(false)
        } else {
            setAnalysis(true)
        }
    }

    const Product = () => {
        if(product == true) {
            setProduct(false)
        } else {
            setProduct(true)
        }
    }

    const Workshop = () => {
        if(workshop == true) {
            setWorkshop(false)
        } else {
            setWorkshop(true)
        }
    }

    const Users = () => {
        if(user == true) {
            setUser(false)
        } else {
            setUser(true)
        }
    }

    const Settings = () => {
        if(settings == true) {
            setSettings(false)
        } else {
            setSettings(true)
        }
    }

    return (<>
        <View style={{paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'column', marginTop: -40}}>
            <TouchableOpacity activeOpacity={0.9} style={{flexDirection: 'row'}} onPress={Registration}>
                <Text style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>REGISTRATION OF VEHICLE</Text>
                {registration == false 
                    ?
                    <Ionicons name='add-circle-outline' style={{position: 'absolute', left: '93%', bottom: -2}} size={25} color="#ffffff" />
                    :
                    <Ionicons name='remove-circle-outline' style={{position: 'absolute', left: '93%', bottom: -2}} size={25} color="#ffffff" />
                }
            </TouchableOpacity>
            {registration == false
            ?
            <Text></Text>
            :
            <View style={{backgroundColor: '#bfa09d', width: '120%', marginLeft: '-11%'}}>
                <View style={{marginLeft: '15%'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('NewRegistration')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>NEW REGISTRATION</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>VEHICLE LIST</Text>
                    </TouchableOpacity>
                </View>
            </View>  
            }
        </View>
        <View style={{paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'column', marginTop: -20}}>
            <TouchableOpacity activeOpacity={0.9} style={{flexDirection: 'row'}} onPress={Analysis}>
                <Text style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>ANALYSIS OF MALFUNCTIONING PARTS</Text>
                {analysis == false 
                    ?
                    <Ionicons name='add-circle-outline' style={{position: 'absolute', left: '93%', bottom: 7}} size={25} color="#ffffff" />
                    :
                    <Ionicons name='remove-circle-outline' style={{position: 'absolute', left: '93%', bottom: 7}} size={25} color="#ffffff" />
                }
            </TouchableOpacity>
            {analysis == false
            ?
            <Text></Text>
            :
            <View style={{backgroundColor: '#bfa09d', width: '120%', marginLeft: '-11%'}}>
                <View style={{marginLeft: '15%'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('NewAnalysis')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>ADD NEW ANALYSIS</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={() => navigation.navigate('Analysis')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>ANALYSIS LIST</Text>
                    </TouchableOpacity>
                </View>
            </View>  
            }
        </View>
        <View style={{paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'column', marginTop: -15}}>
            <TouchableOpacity activeOpacity={0.9} style={{flexDirection: 'row'}} onPress={Product}>
                <Text style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>PRODUCT PROCUREMENT</Text>
                {product == false 
                    ?
                    <Ionicons name='add-circle-outline' style={{position: 'absolute', left: '93%', bottom: -2}} size={25} color="#ffffff" />
                    :
                    <Ionicons name='remove-circle-outline' style={{position: 'absolute', left: '93%', bottom: -2}} size={25} color="#ffffff" />
                }
            </TouchableOpacity>
            {product == false
            ?
            <Text></Text>
            :
            <View style={{backgroundColor: '#bfa09d', width: '120%', marginLeft: '-11%'}}>
                <View style={{marginLeft: '15%'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductRPurchase')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>PURCHASE REQUESTS</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={() => navigation.navigate('ProductRReview')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>PR REVIEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductRQuotation')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>QUOTATION BY SUPPLIERS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductROrder')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>PURCHASE ORDER LIST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductRGood')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>GOOD RECIEVING NOTE</Text>
                    </TouchableOpacity>
                </View>
            </View>  
            }
        </View>
        <View style={{paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'column', marginTop: -15}}>
            <TouchableOpacity activeOpacity={0.9} style={{flexDirection: 'row'}} onPress={Workshop}>
                <Text style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>WORKSHOP</Text>
                {workshop == false 
                    ?
                    <Ionicons name='add-circle-outline' style={{position: 'absolute', left: '93%', bottom: -2}} size={25} color="#ffffff" />
                    :
                    <Ionicons name='remove-circle-outline' style={{position: 'absolute', left: '93%', bottom: -2}} size={25} color="#ffffff" />
                }
            </TouchableOpacity>
            {workshop == false
            ?
            <Text></Text>
            :
            <View style={{backgroundColor: '#bfa09d', width: '120%', marginLeft: '-11%'}}>
                <View style={{marginLeft: '15%'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('BodyWorkshop')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>BODY WORKSHOP</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={() => navigation.navigate('PaintWorkshop')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>PAINT WORKSHOP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MechanicWorkshop')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>MECHANIC WORKSHOP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailerWorkshop')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>DETAILER WORKSHOP</Text>
                    </TouchableOpacity>
                </View>
            </View>  
            }
        </View>
        <View style={{paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'column', marginTop: -15}}>
            <TouchableOpacity activeOpacity={0.9} style={{flexDirection: 'row'}} onPress={Users}>
                <Text style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>USER AND ROLES</Text>
                {user == false 
                    ?
                    <Ionicons name='add-circle-outline' style={{position: 'absolute', left: '93%', bottom: -2}} size={25} color="#ffffff" />
                    :
                    <Ionicons name='remove-circle-outline' style={{position: 'absolute', left: '93%', bottom: -2}} size={25} color="#ffffff" />
                }
            </TouchableOpacity>
            {user == false
            ?
            <Text></Text>
            :
            <View style={{backgroundColor: '#bfa09d', width: '120%', marginLeft: '-11%'}}>
                <View style={{marginLeft: '15%'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('NewUsers')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>ADD A USER</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={() => navigation.navigate('Users')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>USER LIST</Text>
                    </TouchableOpacity>
                </View>
            </View>  
            }
        </View>
        <View style={{paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'column', marginTop: -15}}>
            <TouchableOpacity activeOpacity={0.9} style={{flexDirection: 'row'}} onPress={Settings}>
                <Text style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>SETTINGS</Text>
                {settings == false 
                    ?
                    <Ionicons name='add-circle-outline' style={{marginLeft: '60%', bottom: 3}} size={25} color="#ffffff" />
                    :
                    <Ionicons name='remove-circle-outline' style={{marginLeft: '60%', bottom: 3}} size={25} color="#ffffff" />
                }
            </TouchableOpacity>
            {settings == false
            ?
            <Text></Text>
            :
            <View style={{backgroundColor: '#bfa09d', width: '120%', marginLeft: '-11%'}}>
                <View style={{marginLeft: '15%'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#000000', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold'}}>HOURLY RATE OF LABOUR</Text>
                    </TouchableOpacity> 
                </View>
            </View>  
            }
        </View>
        <View style={{paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'column'}}>
            <View style={{backgroundColor: colors.TEXT, width: '120%', marginLeft: '-11%'}}>
                <View style={{alignSelf: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{color: "#ffffff", fontWeight: 'bold', fontSize: 16}}>
                        <Text style={{color: '#ffffff', fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: 'bold', fontWeight: 'bold'}}>GO BACK HOME</Text>
                    </TouchableOpacity> 
                </View>
            </View>  
        </View>
    </>
    )
}