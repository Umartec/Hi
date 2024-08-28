import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const MapExample = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          top: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
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
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('CallPersonScreen')}>
        <MaterialIcons name="my-location" size={25} color="white" />
      </TouchableOpacity>
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
  iconButton: {
    position: 'absolute',
    right: 15,
    bottom: 30,
    backgroundColor: '#303b71', // Background color
    borderRadius: 50, // Rounded border radius
    padding: 10, // Padding around the icon
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7, // Add some shadow for a nice effect
    height: 50,
    width: 50,
    top:630
  },
});

export default MapExample;
