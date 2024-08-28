import React, {useState, useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// user Screen
import SplashScreen from './src/Auth/SplashScreen';
import LoginScreen from './src/Auth/LoginScreen';
import Slider from './src/Auth/Slider';
import SignupScreen from './src/Auth/SignupScreen';
import ForgetPassword from './src/Auth/ForgetPassword';
import Sidebar from './src/Auth/Sidebar';
import HomeScreen from './src/Auth/HomeScreen';
import SettingScreen from './src/Auth/SettingScreen';
import Paymentmethod from './src/Auth/Paymentmethod';
import AaddnewCard from './src/Auth/AaddnewCard';
import HistoryScreen from './src/Auth/HistoryScreen';
import Invitefriend from './src/Auth/Invitefriend';
import TankuScreen from './src/Auth/TankuScreen';
import LoginasScreen from './src/Auth/LoginasScreen';
import OnlineSupport from './src/Auth/OnlineSupport';
import CallPersonScreen from './src/Auth/CallPersonScreen';
import Seatchosing from './src/Auth/Seatchosing';
import Promocode from './src/Auth/Promocode';
import Promocodes from './src/Auth/Promocodes';

// driverscreen
import DriverForgetPassword from './src/Auth/DriverForgetPassword';
import DriverLoginScreen from './src/Auth/DriverLoginScreen';
import DriverPaymentmethod from './src/Auth/DriverPaymentmethod';
import DriverRequestScreen from './src/Auth/DriverRequestScreen';
import DriverSidebar from './src/Auth/DriverSidebar';
import DriverSignupScreen from './src/Auth/DriverSignupScreen';
import DriverSettingScreen from './src/Auth/DriverSettingScreen';
import DriverHistoryScreen from './src/Auth/DriverHistoryScreen';
import DriverHomeScreen from './src/Auth/DriverHomeScreen';
import DriverOnlineSupport from './src/Auth/DriverOnlineSupport';
import DriverMapScreen from './src/Auth/DriverMapScreen';
import DriverMaplocation from './src/Auth/DriverMaplocation';
import CallScreen from './src/Auth/CallScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Slider" component={Slider} />
        <Stack.Screen name="LoginasScreen" component={LoginasScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Sidebar" component={Sidebar} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="Paymentmethod" component={Paymentmethod} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="AaddnewCard" component={AaddnewCard} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="Invitefriend" component={Invitefriend} />
        <Stack.Screen name="TankuScreen" component={TankuScreen} />
        <Stack.Screen
          name="DriverForgertScreen"
          component={DriverForgetPassword}
        />
        <Stack.Screen name="DriverLoginScreen" component={DriverLoginScreen} />
        <Stack.Screen
          name="DriverPaymentmethod"
          component={DriverPaymentmethod}
        />
        <Stack.Screen
          name="DriverRequestScreen"
          component={DriverRequestScreen}
        />
        <Stack.Screen name="DriverSidebar" component={DriverSidebar} />
        <Stack.Screen
          name="DriverSignupScreen"
          component={DriverSignupScreen}
        />
        <Stack.Screen
          name="DriverSettingScreen"
          component={DriverSettingScreen}
        />
        <Stack.Screen
          name="DriverHistoryScreen"
          component={DriverHistoryScreen}
        />
        <Stack.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
        <Stack.Screen
          name="DriverOnlineSupport"
          component={DriverOnlineSupport}
        />
        <Stack.Screen name="OnlineSupport" component={OnlineSupport} />
        <Stack.Screen name="DriverMapScreen" component={DriverMapScreen} />
        <Stack.Screen name="DriverMaplocation" component={DriverMaplocation} />
        <Stack.Screen name="CallPersonScreen" component={CallPersonScreen} />
        <Stack.Screen name="Seatchosing" component={Seatchosing} />
        <Stack.Screen name="Promocode" component={Promocode} />
        <Stack.Screen name="Promocodes" component={Promocodes} />
        <Stack.Screen name="CallScreen" component={CallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;













