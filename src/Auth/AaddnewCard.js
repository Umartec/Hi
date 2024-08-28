import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const AaddnewCard = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleScanCard = () => {
    // Here you would integrate your card scanning library
    Alert.alert('Scan Card', 'Card scanning functionality to be implemented.');
  };

  const handleAddCard = () => {
    // Perform validation and then add the card to the user's account
    if (!cardNumber || !expiryMonth || !expiryYear || !cvv || !cardHolderName) {
      Alert.alert('Error', 'Please fill out all fields.');
    } else {
      // Here you would handle adding the card
      Alert.alert('Success', 'Your card has been added.');
      navigation.navigate('Paymentmethod');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#303b71' }}>
      <View
        style={{
          flexDirection: 'row',
          top: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Paymentmethod')}>
          <Ionicons
            name={'arrow-back-sharp'}
            size={30}
            color="white"
            style={{ left: 10 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
          Add New Card
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={'bell-badge-outline'}
            size={30}
            color="white"
            style={{ right: 10 }}
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
          gap: 25,
        }}>

        <TouchableOpacity
          onPress={handleScanCard}
          style={{
            height: '20%',
            width: '85%',
            borderColor: '#dedff0',
            borderWidth: 2,
            backgroundColor: '#f9faff',
            borderRadius: 5,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            top: 40,
          }}>
          <MaterialCommunityIcons
            name={'qrcode-scan'}
            size={45}
            color="black"
            style={{ top: -10 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#d0d4e7' }}>
            Scan Your Card
          </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#666e96', top: 45, left: 20 }}>Card Number</Text>
        <TextInput
          placeholder='+5484 2458 4584 6987'
          placeholderTextColor={'#525c89'}
          value={cardNumber}
          onChangeText={setCardNumber}
          style={{ borderColor: '#dedff0', borderWidth: 2, width: '80%', backgroundColor: '#f9faff', height: 45, left: 20, top: 30 }}
          keyboardType='numeric'
        />

        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#666e96', top: 30, left: 20 }}>Expiry Date</Text>
          <Text style={{ textAlign: 'right', fontSize: 15, color: "#666e96", right: 25, top: 6 }}>CVV/CVC</Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 20 }}>
          <TextInput
            value={expiryMonth}
            onChangeText={setExpiryMonth}
            placeholder='MM'
            placeholderTextColor='#525c89'
            style={{ height: 45, left: 20, width: 80, backgroundColor: '#f9faff', borderColor: '#dedff0', borderWidth: 2, flexDirection: "row", fontSize: 21, paddingLeft: 19, top: 5 }}
            keyboardType='numeric'
            maxLength={2}
          />
          <TextInput
            value={expiryYear}
            onChangeText={setExpiryYear}
            placeholder='YY'
            placeholderTextColor='#525c89'
            style={{ height: 45, left: 20, width: 80, backgroundColor: '#f9faff', borderColor: '#dedff0', borderWidth: 2, flexDirection: "row", fontSize: 21, paddingLeft: 19, top: 5 }}
            keyboardType='numeric'
            maxLength={2}
          />
          <TextInput
            value={cvv}
            onChangeText={setCvv}
            placeholder='CVV'
            placeholderTextColor='#525c89'
            style={{ height: 45, left: 57, width: 80, backgroundColor: '#f9faff', borderColor: '#dedff0', borderWidth: 2, flexDirection: "row", fontSize: 21, paddingLeft: 19, top: 5 }}
            keyboardType='numeric'
            maxLength={3}
            secureTextEntry={true}
          />
        </View>

        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#666e96', top: 45, left: 20 }}>Card Holder Name</Text>
        <TextInput
          placeholder='Tousher Chowdhary'
          placeholderTextColor={'#666e96'}
          value={cardHolderName}
          onChangeText={setCardHolderName}
          style={{ height: 43, width: '75%', backgroundColor: '#f9faff', borderColor: '#dedff0', borderWidth: 2, top: 30, left: 23, textAlign: 'center' }}
        />

        <TouchableOpacity
          style={{ height: 45, width: '85%', backgroundColor: '#303b71', borderRadius: 5, left: 30, top: 50 }}
          onPress={handleAddCard}
        >
          <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", textAlign: 'center', top: 7 }}>
            ADD My Card
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default AaddnewCard;

const styles = StyleSheet.create({});
