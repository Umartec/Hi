import {StyleSheet, Text, TouchableOpacity, View,Switch} from 'react-native';
import React, {useLayoutEffect,useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';



const SettingScreen = () => {

  const navigation = useNavigation();



  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);




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
          Settings
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '90%',
            height: '7%',
            borderColor: '#dedff0',
            left: 20,
            top: 30,
            borderWidth: 2,
            backgroundColor: '#f9faff',
            
          }}>
          <Text
            style={{
              fontSize: 19,
              color: '#777ea3',
              fontWeight: 'bold',
              top: 13,
            }}>
            Phone Number
          </Text>
          <Text style={{fontSize: 19, color: '#d0d4e7', top: 13, left: 16}}>
            245-548-1458
          </Text>
          <Ionicons
            name={'chevron-forward-outline'}
            size={22}
            color="#d0d4e7"
            style={{top: 15}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '90%',
            height: '7%',
            borderColor: '#dedff0',
            left: 20,
            top: 30,
            borderWidth: 2,
            backgroundColor: '#f9faff',
          }}>
          <Text
            style={{
              fontSize: 19,
              color: '#777ea3',
              fontWeight: 'bold',
              top: 13,
            }}>
          Call
          </Text>
          <Switch
          style={{left:10,width:230}}
          trackColor={{ false: '#E4E4E4', true: '#303b71' }} // Adjusted track color
          thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'} // Adjusted thumb color
          onValueChange={() => setIsEnabled(previousState => !previousState)}
          value={isEnabled}
     
        />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '90%',
            height: '7%',
            borderColor: '#dedff0',
            left: 20,
            top: 30,
            borderWidth: 2,
            backgroundColor: '#f9faff',
          }}>
          <Text
            style={{
              fontSize: 19,
              color: '#777ea3',
              fontWeight: 'bold',
              top: 13,
            }}>
      Notification
          </Text>
          <Switch
          style={{left:10,width:170}}
          trackColor={{ false: '#E4E4E4', true: '#303b71'  }} // Adjusted track color
          thumbColor={isEnabled1 ? '#FFFFFF' : '#FFFFFF'} // Adjusted thumb color
          onValueChange={() => setIsEnabled1(previousState => !previousState)}
          value={isEnabled1}
        />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '90%',
            height: '7%',
            borderColor: '#dedff0',
            left: 20,
            top: 30,
            borderWidth: 2,
            backgroundColor: '#f9faff',
          }}>
          <Text
            style={{
              fontSize: 19,
              color: '#777ea3',
              fontWeight: 'bold',
              top: 13,
              right:3
            }}>
          Favourite Address
          </Text>
          <Text style={{fontSize: 16, color: '#d0d4e7', top: 13, left: 30}}>
            Mozart St
          </Text>
          <Ionicons
            name={'chevron-forward-outline'}
            size={17}
            color="#d0d4e7"
            style={{top: 15,left: 8,}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '90%',
            height: '7%',
            borderColor: '#dedff0',
            left: 20,
            top: 30,
            borderWidth: 2,
            backgroundColor: '#f9faff',
          }}>
          <Text
            style={{
              fontSize: 19,
              color: '#777ea3',
              fontWeight: 'bold',
              top: 13,
            }}>
      Traffic
          </Text>
          <Switch
          style={{left:10,width:230}}
          trackColor={{ false: '#E4E4E4', true: '#303b71'  }} // Adjusted track color
          thumbColor={isEnabled2 ? '#FFFFFF' : '#FFFFFF'} // Adjusted thumb color
          onValueChange={() => setIsEnabled2(previousState => !previousState)}
          value={isEnabled2}
        />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '90%',
            height: '7%',
            borderColor: '#dedff0',
            left: 20,
            top: 30,
            borderWidth: 2,
            backgroundColor: '#f9faff',
          }}>
          <Text
            style={{
              fontSize: 19,
              color: '#777ea3',
              fontWeight: 'bold',
              top: 13,
              right:15
            }}>
            Languge
          </Text>
          <Text style={{fontSize: 19, color: '#d0d4e7', top: 13, left: 75}}>
            English
          </Text>
          <Ionicons
            name={'chevron-forward-outline'}
            size={22}
            color="#d0d4e7"
            style={{top: 15,left: 23,}}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
