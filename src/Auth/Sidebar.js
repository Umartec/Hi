import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sidebar = () => {
    const navigation = useNavigation();
    const handleLogout = async () => {
      // Perform logout logic here
      // On success, navigate back to the Login screen
      await AsyncStorage.removeItem('isLoggedIn');
      navigation.replace('LoginScreen');
    };
  
  return (
    <View style={{flex:1,backgroundColor:'#303b71'}}>
    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}><Entypo name={'cross'}size={40} color='white' style={{textAlign:'right',top:20,right: 10,}} /></TouchableOpacity>
        <View style={{gap:15,top:50}}>
    <Image source={require('../Assets/fell.jpg')} style={{alignSelf:'center',borderRadius:300,height:80,width:80}}></Image>
    <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:18}}>Tousher Chowdhary</Text>
    <Text style={{textAlign:'center',color:'white',fontSize:15,top:-10}}>meet.umar.gamer.0@gmail.com</Text>
    </View>
    <View style={{gap:25,top:100,left:25}}>
    <FontAwesome name={'home'}size={27} color='white' />
    <MaterialIcons name={'payment'}size={27} color='white' />
    <Ionicons name={'time-outline'}size={27} color='white' />
    <Ionicons name={'add-circle-outline'}size={27} color='white' />
    <FontAwesome5 name={'user-friends'}size={27} color='white' />
    <Ionicons name={'settings-sharp'}size={27} color='white' />
    <AntDesign name={'infocirlceo'}size={27} color='white' />
    <Feather name={'log-out'}size={27} color='white' style={{left: 5,}}/>
    </View>
    <View style={{top:-295,gap:25,left:65}}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}><Text style={{fontSize:17,color:'white'}}>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Paymentmethod')}><Text style={{fontSize:17,color:'white',top:2}}>Payment method</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HistoryScreen')}><Text style={{fontSize:17,color:'white',top:8}}>History</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Promocodes')}><Text style={{fontSize:17,color:'white',top:13}}>Aapply Promo Code</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Invitefriend')}><Text style={{fontSize:17,color:'white',top:18}}>Invite Friends</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}><Text style={{fontSize:17,color:'white',top:22}}>Settings</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{fontSize:17,color:'white',top:27}} onPress={() => navigation.navigate('OnlineSupport')}>Online Support</Text></TouchableOpacity>
        <TouchableOpacity    onPress={handleLogout}
        ><Text style={{fontSize:17,color:'white',top:31}}>Logout</Text></TouchableOpacity>
    </View>
    </View>
  )
}

export default Sidebar

const styles = StyleSheet.create({})