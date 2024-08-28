import React,{ useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text ,TextInput} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MapExample = () => {
  const navigation = useNavigation();
  const [selectedPayment, setSelectedPayment] = useState('cash');

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          top: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Seatchosing')}>
          <Ionicons
            name={'arrow-back-sharp'}
            size={30}
            color="white"
            style={{ left: 10 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
          Alaska
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

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="My Marker"
          description="Some description here"
        />
      </MapView>

      {/* Icon with background and border radius */}
      <View style={styles.containers}>
      <Text style={styles.title}>Select Payment</Text>

      {/* Cash Payment */}
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'cash' && styles.selectedOption]}
        onPress={() => setSelectedPayment('cash')}
      >
        <Ionicons name="cash-outline" size={24} color="#fff" />
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentText}>Cash Payment</Text>
          <Text style={styles.defaultText}>Default method</Text>
        </View>
        <Ionicons
          name={selectedPayment === 'cash' ? 'radio-button-on' : 'radio-button-off'}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>

      {/* MasterCard Payment */}
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'card' && styles.selectedOption]}
        onPress={() => setSelectedPayment('card')}
      >
        <Ionicons name="card-outline" size={24} color="#fff" />
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentText}>Master Card</Text>
          <Text style={styles.cardText}>**** **** **** 4584</Text>
        </View>
        <Ionicons
          name={selectedPayment === 'card' ? 'radio-button-on' : 'radio-button-off'}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>

      {/* Promo Code */}
      <View style={styles.promoContainer}>
        <Text style={styles.promoText}>Promo Code</Text>
        <TextInput
          placeholder="Enter Promo Code"
          placeholderTextColor="#888"
          style={styles.promoInput}
        />
      </View>

      {/* Confirm Taxi Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('TankuScreen')}>
        <Text style={styles.confirmButtonText}>CONFIRM TAXI</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303b71',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    top: 70,
  },
  containers: {
    height: 450,
    width: '100%',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    backgroundColor: '#2D3A5F',
    padding: 20,
    top:300

  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303b71',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  selectedOption: {
    backgroundColor: '#3B4C80',
  },
  paymentInfo: {
    flex: 1,
    marginLeft: 15,
  },
  paymentText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  defaultText: {
    color: '#aaa',
  },
  cardText: {
    color: '#aaa',
  },
  promoContainer: {
    marginTop: 20,
  },
  promoText: {
    color: '#fff',
    marginBottom: 10,
  },
  promoInput: {
    backgroundColor: '#303b71',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  confirmButtonText: {
    textAlign: 'center',
    color: '#2D3A5F',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MapExample;
