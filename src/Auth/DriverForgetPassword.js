import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState(['', '', '', '']);
  const [codeError, setCodeError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (newCode.every(num => num !== '')) {
      setCodeError('');
    } else {
      setCodeError('Please fill all digits.');
    }
  };

  const validateForm = () => {
    let isValid = true;
    setCodeError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Validate code
    if (code.some(num => num === '')) {
      setCodeError('Please fill all digits.');
      isValid = false;
    }

    // Validate password
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Password updated successfully.');
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.subtitle}>4 Digit's Number</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleCodeChange(index, value)}
          />
        ))}
      </View>
      {codeError ? <Text style={styles.error}>{codeError}</Text> : null}

      <Text style={styles.label}>Enter New Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder='*********'
          placeholderTextColor='#364279'
          secureTextEntry={!passwordVisible}
          style={styles.passwordInput}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={20}
            color='#364279'
          />
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder='*********'
          placeholderTextColor='#364279'
          secureTextEntry={!confirmPasswordVisible}
          style={styles.passwordInput}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <Icon
            name={confirmPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color='#364279'
          />
        </TouchableOpacity>
      </View>
      {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303b71',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    top:-100
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    top:-40
  },
  codeContainer: {
    flexDirection: 'row',
    gap: 15,
    top:-30
  },
  codeInput: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: '#364279',
    borderRadius: 2,
    backgroundColor: '#242f62',
    color: 'white',
    textAlign: 'center',
  },
  passwordContainer: {
    width: '90%',
    marginBottom: 10,
  },
  passwordInput: {
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#242f62',
    borderRadius: 0.5,
    height: 40,
    borderColor: '#364279',
    paddingRight: 35,
    color: 'white',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  label: {
    fontSize: 17,
    color: '#e5e5e5',
    marginBottom: 15,
    right: 88,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  submitButton: {
    width: '90%',
    borderRadius: 2,
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default ForgetPassword;
