import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const LoginasScreen = () => {
  const navigation =useNavigation();
    const onDone = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        
        if (isLoggedIn === 'true') {
          navigation.replace('Sidebar');
        } else {
          navigation.replace('LoginScreen');
        }
      };
      const _onDone = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        
        if (isLoggedIn === 'true') {
          navigation.replace('DriverSidebar');
        } else {
          navigation.replace('DriverLoginScreen');
        }
      };
    


  return (
    <View style={{flex:1,backgroundColor: '#303b71',justifyContent:"center"}}>
        
    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',height: 300,width: '90%',elevation:7,borderTopLeftRadius:50,borderTopRightRadius:50,flexDirection:'row',backgroundColor:'white',top:-70,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
    <Text style={{fontSize:22,color:"#303b71",fontWeight:"bold",top:-130,left:160,}}>Alaska</Text>
    <TouchableOpacity style={{height: 60,width: '50%',backgroundColor:'white',elevation:4,borderTopLeftRadius:20,borderBottomLeftRadius:20,borderColor:'#303b71',borderWidth:1,right:33}} onPress={onDone}>
    <Text style={{fontSize:17,color:'#303b71',fontWeight:"bold",textAlign:'center',top:15}}>Login As a User</Text></TouchableOpacity>
    <TouchableOpacity style={{height: 60,width: '45%',backgroundColor:'white',elevation:4,borderBottomRightRadius:20,borderTopRightRadius:20,borderColor:'#303b71',borderWidth:1,right: 33,}} onPress={_onDone}>
    <Text style={{fontSize:17,color:'#303b71',fontWeight:"bold",textAlign:'center',top:15}}>Login As a Driver</Text></TouchableOpacity>
    </View>
    </View>
  )
}



const styles = StyleSheet.create({



}
);


export default LoginasScreen;