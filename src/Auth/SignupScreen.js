import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission here
          Alert.alert('Success', 'Account created successfully');
          navigation.navigate('LoginScreen'); // Change navigation target as needed
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <>
            <View style={styles.formField}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                placeholder='    Tousher Chowdhary'
                placeholderTextColor='#364279'
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>

            <View style={styles.formField}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <TextInput
                placeholder='    MeetUmar106@gmail.com'
                placeholderTextColor='#364279'
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>

            <View style={styles.formField}>
              <Text style={styles.label}>Enter Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='    *********'
                  placeholderTextColor='#364279'
                  secureTextEntry={!values.passwordVisible}
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => setPasswordVisible(!values.passwordVisible)}
                >
                  <Icon
                    name={values.passwordVisible ? 'eye-off' : 'eye'}
                    size={20}
                    color='#364279'
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>

            <View style={styles.formField}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='    *********'
                  placeholderTextColor='#364279'
                  secureTextEntry={!values.confirmPasswordVisible}
                  style={styles.input}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => setConfirmPasswordVisible(!values.confirmPasswordVisible)}
                >
                  <Icon
                    name={values.confirmPasswordVisible ? 'eye-off' : 'eye'}
                    size={20}
                    color='#364279'
                  />
                </TouchableOpacity>
              </View>
              {touched.confirmPassword && errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>SIGN UP</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      {/* Footer */}
      <View style={{ height: 400, width: '120%', borderTopLeftRadius: 60, borderTopRightRadius: 60, backgroundColor: '#ffffff', top: 105, flex: 1, alignItems: 'center', gap: 10 }}
    >
        <Text style={{ fontSize: 18, color: 'black', top: 25 }}>Aalready Have an Acount?</Text>
        <TouchableOpacity style={{ width: '80%', borderRadius: 2, height: 40, top: 30, borderColor: 'black', borderWidth: 1, alignSelf: 'center' }}
         onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{ color: 'black', fontSize: 20, padding: 2, textAlign: 'center' }}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303b71',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 60,
  },
  formField: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 17,
    color: '#e5e5e5',
  },
  input: {
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#242f62',
    borderRadius: 0.5,
    height: 40,
    borderColor: '#364279',
    paddingHorizontal: 10,
  },
  inputContainer: {
    position: 'relative',
  },
  iconButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  submitButton: {
    width: '100%',
    borderRadius: 2,
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'black',
    fontSize: 20,
  },
  footer: {
    height: 400,
    width: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: 'black',
  },

});

export default LoginScreen;
