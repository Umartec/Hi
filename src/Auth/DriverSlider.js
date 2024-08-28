import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: 'one',
    title: 'Confirm Your Drive',
    text: 'Huge delivery Network. Helps You Find Comfortable, Safe, and Cheap rides.',
    backgroundImage: require('../../src/Assets/LOG1.png'), // Make sure this path is correct
  },
  {
    key: 'two',
    title: 'Request Ride',
    text: 'Huge delivery network. Helps you find comfortable, safe, and cheap ride.',
    backgroundImage: require('../../src/Assets/LOG.png'), // Make sure this path is correct
  },
  {
    key: 'three',
    title: 'Get Started',
    text: 'Huge delivery network. Helps you find comfortable, safe, and cheap ride.',
    backgroundImage: require('../../src/Assets/LOG2.png'), // Make sure this path is correct
  },
];

export default function App() {
  const navigation =useNavigation();
  const _renderItem = ({item}) => {
    return (
      <ImageBackground 
        source={item.backgroundImage} 
        style={styles.slide}
        imageStyle={styles.imageBackground}
      >
        <View style={{height:250, width:360, borderTopRightRadius:30, borderTopLeftRadius:30, backgroundColor:'#303b71', top:260, textAlign:'center'}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </ImageBackground>
    );
  };
  const renderbutton = () => {
    return(
  <Text>Hello</Text>
    ) ;
  }

  const onDone = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
      navigation.replace('Sidebar');
    } else {
      navigation.replace('LoginScreen');
    }
  };

  return <AppIntroSlider 
  renderItem={_renderItem}
   data={slides} 
   onDone={onDone} 
   showSkipButton={true}
   showPrevButton={true}
   renderbutton={renderbutton}
   activeDotStyle={{
    backgroundColor:'white',
    width:30
   }}
   />;
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageBackground: {
   height:400, 
   width:300,
   top:30,
   left:10
   // Optional: Adjust how the image fits
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    top: 30,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#99a0c3',
    top: 22,
  },
button:{
    height:60,
    width:100,
    backgroundColor:'white'
}
});
