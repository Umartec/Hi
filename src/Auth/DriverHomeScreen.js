import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

  const navigation = useNavigation();
  return (
<View style={{flex: 1, backgroundColor: '#303b71'}}>
      <View
        style={{
          flexDirection: 'row',
          top: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('DriverSidebar')}>
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
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          top: 50,
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          gap:25
        }}>
    </View></View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})