import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';




const TankuScreen = () => {

    const navigation = useNavigation()




  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:"#303b71"}}>
         <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}><Entypo
            name={'cross'}
            size={45}
            color="#d0d4e7"
            style={{left:160,top:-190}}
      
          /></TouchableOpacity> 
      <Image source={require('../../src/Assets/thanku.jpg')} style={{height: 250,width: 250,top:-50}}></Image>
      <View>
        <Text style={{fontSize:24,color:'white',fontWeight:'bold',left: 40,top:-50}}>Thank You</Text>
        <Text style={{fontSize:24,color:'white',fontWeight:'bold',top:-50}}>For Your Cperation</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({







});

export default TankuScreen;