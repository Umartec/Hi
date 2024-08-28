import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CallScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../src/Assets/fell.jpg')} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Cihan soysakal</Text>
      <Text style={styles.status}>Ringing...</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
        <AntDesign
            name={"sound"}
            size={28}
            color='black'
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.endCallButton]} onPress={() => navigation.navigate('Seatchosing')}>
        <Icon
            name={"phone-incoming"}
            size={32}
            color='black'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E3B8D',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    top:-50
  },
  name: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    top:-50
  },
  status: {
    fontSize: 16,
    color: 'lightgray',
    marginBottom: 50,
    top:-50
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    
  },
  button: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endCallButton: {
    backgroundColor: '#FF4C4C',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default CallScreen;
