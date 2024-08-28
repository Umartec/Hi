import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


const RequestScreen = () => {

    const navigation = useNavigation();


  return (
<View style={{flex: 1, backgroundColor: '#303b71'}}>
      <View
        style={{
          flexDirection: 'row',
          top: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('DriverMapScreen')}>
          <Ionicons
            name={'arrow-back-sharp'}
            size={30}
            color="white"
            style={{left: 10}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
         Alaska
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={'bell-badge-outline'}
            size={30}
            color="white"
            style={{right: 10}}
          />
        </TouchableOpacity>
      </View>
      <Image source={require('../../src/Assets/request.jpg')} style={{height: 300,width: 300,alignSelf:"center",top:100}}></Image>

     <View style={{top:100}}>
        <Text style={{fontSize:22,color:'white',fontWeight:'bold',textAlign:'center',top:-10}}>Confirm ?</Text>
        <Text style={{fontSize:14,color:'#d0d4e7',textAlign:'center'}} >You got a ride request from the James bond.</Text>
     <Text style={{fontSize:14,color:'#d0d4e7',textAlign:'center'}}>Plz Pick from his request Locaton.</Text>
      <Text style={{fontSize:14,color:"#d0d4e7",textAlign:'center'}}>Plz go quick</Text></View> 
      <View style={{top:250,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <TouchableOpacity style={{height:40,width: 40,borderColor:'#d0d4e7',borderWidth:1,borderRadius:5}} onPress={() => navigation.navigate('DriverMapScreen')}>
        <Entypo
            name={'cross'}
            size={40}
            color="#d0d4e7"
            style={{textAlign:'center'}}
      
          />
        </TouchableOpacity>
        <TouchableOpacity style={{height: 55,width: 230,backgroundColor:'white',borderRadius:5,elevation:7}} onPress={() => navigation.navigate('DriverMaplocation')}><Text style={{fontSize:22,color:'#303b71',fontWeight:'bold',textAlign:'center',top:12}}>Confirm Request</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default RequestScreen
 
const styles = StyleSheet.create({})