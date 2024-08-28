import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; // Import Axios

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(''); // This will hold the user's email
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '187505999977-grs99sqg5mrnqn2qlkl94i95a5vtqkd9.apps.googleusercontent.com',
    });
  }, []);

  const handleLogin = async () => {
    if (!email.trim()) {
      Alert.alert('Validation Error', 'Please enter your email.');
      return;
    }
  
    if (!password) {
      Alert.alert('Validation Error', 'Please enter your password.');
      return;
    }
  
    try {
      // Send login request to the API
      const response = await axios.post('https://real.mastersnooker.club/api/loginuser', {
        email: email, // Use email instead of name
        password: password,
      });
  
      if (response.data.success) {
        // Store login state and navigate to Sidebar
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.navigate('Sidebar'); // Navigate to the Sidebar if logged in
      } else {
        Alert.alert('Login Failed', response.data.message || 'Invalid credentials.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Login Error', 'Failed to login. Please try again later.');
    }
  };
  

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      const user = auth().currentUser;
      if (user) {
        setEmail(user.email); // Set user's email to the `email` state
      }

    } catch (error) {
      console.error(error);
      Alert.alert('Sign-In Error', 'Failed to sign in with Google.');
    }
  };

  const signInWithFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);

      if (result.isCancelled) {
        console.log("User cancelled the login process");
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
          throw new Error("Something went wrong obtaining access token");
        }

        console.log("Logged in with Facebook!", data);
      }
    } catch (error) {
      console.log("Login failed with error: " + error.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#303b71', alignItems: 'center', gap: 10 }}>
      <Text style={{ fontSize: 17, color: '#e5e5e5', right: 135, top: 80 }}>Name</Text>
      <TextInput
        placeholder='    Your email'
        placeholderTextColor={'#364279'}
        style={styles.input}
        value={email} // Bind `email` state to the TextInput
        onChangeText={setEmail}
      />
      <Text style={{ fontSize: 17, color: '#e5e5e5', right: 120, top: 80 }}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder='    *********'
          placeholderTextColor={'#364279'}
          secureTextEntry={!passwordVisible}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <AntDesign
            name={passwordVisible ? 'eyeo' : 'eye'}
            size={20}
            color='#364279'
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={{ fontSize: 15, color: 'white', top: 80, left: 95 }}>
          Forget Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={{ fontSize: 18, color: 'black', top: 25 }}>Create an Account?</Text>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 17, color: 'black', top: 40 }}>OR</Text>

           {/* Custom Facebook Button */}
           <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={signInWithFacebook}>
          <Text style={styles.facebookText}>Sign Up With Facebook</Text>
          <EvilIcons name={'sc-facebook'} size={30} color='white' style={styles.facebookIcon} />
        </TouchableOpacity>

        {/* Custom Google Button */}
        <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={signInWithGoogle}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' }} style={styles.icon} />
          <Text style={styles.googleText}>Sign Up With Google</Text>
          <AntDesign name={'google'} size={20} color='white' style={styles.googleIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '90%',
    backgroundColor: '#242f62',
    borderRadius: 0.5,
    height: 40,
    borderColor: '#364279',
    top: 80,
  },
  passwordContainer: {
    width: '90%',
    position: 'relative',
    top: 80,
  },
  passwordInput: {
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#242f62',
    borderRadius: 0.5,
    height: 40,
    borderColor: '#364279',
    paddingRight: 35,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  signInButton: {
    width: '90%',
    borderRadius: 2,
    backgroundColor: 'white',
    height: 40,
    top: 95,
  },
  signInText: {
    color: 'black',
    fontSize: 20,
    padding: 2,
    textAlign: 'center',
  },
  footerContainer: {
    height: 400,
    width: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#ffffff',
    top: 220,
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
  signUpButton: {
    width: '80%',
    borderRadius: 2,
    height: 40,
    top: 30,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
  },
  signUpText: {
    color: 'black',
    fontSize: 20,
    padding: 2,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    width: 250,
    height: 48,
    top: 50,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  facebookText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  googleText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  facebookIcon: {
    position: 'absolute',
    right: 10,
  },
  googleIcon: {
    position: 'absolute',
    right: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default LoginScreen;
