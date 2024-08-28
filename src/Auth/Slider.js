import React, { useEffect, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: 'one',
    title: 'Confirm Your Drive',
    text: 'Huge delivery Network. Helps You Find Comfortable, Safe, and Cheap rides.',
    backgroundImage: require('../../src/Assets/LOGss.jpg'), 
  },
  {
    key: 'two',
    title: 'Request Ride',
    text: 'Huge delivery network. Helps you find comfortable, safe, and cheap ride.',
    backgroundImage: require('../../src/Assets/LOG2.jpg'), 
  },
  {
    key: 'three',
    title: 'Get Started',
    text: 'Huge delivery network. Helps you find comfortable, safe, and cheap ride.',
    backgroundImage: require('../../src/Assets/LOG2.jpg'), 
  },
];

export default function App() {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSliderFinished, setIsSliderFinished] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(loggedIn === 'true');
    };
    checkLoginStatus();
  }, []);

  const _renderItem = ({ item }) => {
    return (
      <ImageBackground
        source={item.backgroundImage}
        style={styles.slide}
        imageStyle={styles.imageBackground}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </ImageBackground>
    );
  };

  const onDone = () => {
    setIsSliderFinished(true);
    if (isLoggedIn) {
      navigation.replace('Sidebar'); // Navigate to Sidebar if logged in
    } else {
      navigation.replace('LoginasScreen'); // Navigate to LoginasScreen if not logged in
    }
  };

  if (isSliderFinished) {
    return null; // Optionally, you can return a loading indicator here instead of null
  }

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={onDone}
      showSkipButton={true}
      showPrevButton={true}
      activeDotStyle={{
        backgroundColor: 'white',
        width: 30,
      }}
    />
  );
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
    height: 400,
    width: 300,
    top: 30,
    left: 10,
  },
  textContainer: {
    height: 250,
    width: 360,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#303b71',
    top: 260,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 30,
  },
  text: {
    fontSize: 16,
    color: '#99a0c3',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    top: 22,
  },
});
