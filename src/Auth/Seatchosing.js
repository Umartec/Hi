import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text ,Image} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MapExample = () => {
  const navigation = useNavigation();
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [scheduleTime, setScheduleTime] = useState('now');

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          top: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('CallScreen')}>
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

      <View style={styles.containers}>
      {/* Route Information */}
      <View style={styles.routeContainer}>
        <Text style={styles.routeText}>
          <Ionicons name="location-outline" size={18} color="#f5a623" /> Helden St
        </Text>
        <Ionicons name="arrow-forward" size={18} color="#fff" />
        <Text style={styles.routeText}>
          <Ionicons name="location-outline" size={18} color="#f5a623" /> Charlotte St
        </Text>
      </View>

      {/* Driver Information */}
      <View style={styles.driverInfo}>
        <Image source={require('../../src/Assets/LOGss.jpg')} style={styles.driverImage} />
        <View style={styles.driverDetails}>
          <Text style={styles.driverName}>Cihan soysakal</Text>
          <Text style={styles.carDetails}>Toyota (EDF568-354)</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#f5a623" />
          <Text style={styles.ratingText}>4.4</Text>
        </View>
      </View>

      {/* Seat and Time Selection */}
      <Text style={styles.sectionTitle}>Seat And Time</Text>

      <View style={styles.selectionContainer}>
        {/* Seat Selection */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => setSelectedSeat(1)}>
          <Text style={[styles.optionText, selectedSeat === 1 && styles.selectedOptionText]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => setSelectedSeat(2)}>
          <Text style={[styles.optionText, selectedSeat === 2 && styles.selectedOptionText]}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => setSelectedSeat(3)}>
          <Text style={[styles.optionText, selectedSeat === 3 && styles.selectedOptionText]}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => setSelectedSeat(4)}>
          <Text style={[styles.optionText, selectedSeat === 4 && styles.selectedOptionText]}>4</Text>
        </TouchableOpacity>
      </View>

      {/* Time Selection */}
      <View style={styles.selectionContainer}>
        <TouchableOpacity
          style={[styles.timeOption, scheduleTime === 'now' && styles.selectedTimeOption]}
          onPress={() => setScheduleTime('now')}>
          <Text style={styles.optionText}>Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timeOption, scheduleTime === 'later' && styles.selectedTimeOption]}
          onPress={() => setScheduleTime('later')}>
          <Ionicons name="time-outline" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Promocode')}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
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
    flex: 1,
    backgroundColor: '#2D3A5F',
    padding: 20,
    height: 450,
    width: '100%',
    top:350
  },
  routeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  routeText: {
    color: '#fff',
    fontSize: 14,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  carDetails: {
    color: '#aaa',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#fff',
    marginLeft: 5,
  },
  sectionTitle: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectionContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#3B4C80',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  optionText: {
    color: '#fff',
  },
  selectedOptionText: {
    color: '#f5a623',
    fontWeight: 'bold',
  },
  timeOption: {
    backgroundColor: '#3B4C80',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedTimeOption: {
    backgroundColor: '#f5a623',
  },
  continueButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  continueButtonText: {
    textAlign: 'center',
    color: '#2D3A5F',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MapExample;
