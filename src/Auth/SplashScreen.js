import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Slider');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar hidden />
      <Image
        style={{height: "100%", width: '100%', }}
        source={require('../../src/Assets/screen.png')}
    
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
