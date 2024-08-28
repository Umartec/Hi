import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <TouchableOpacity onPress={() => navigation.navigate('DriverRequestScreen')}>
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
      <View style={styles.routeContainer}>
        <View style={styles.routePoint}>
          <Icon name="location-outline" size={14} color="#FF3D00" />
          <Text style={styles.routeText}>Helden st</Text>
        </View>
        <Icon name="chevron-forward-outline" size={14} color="#FFFFFF" />
        <View style={styles.routePoint}>
          <Icon name="navigate-outline" size={14} color="#FF8C00" />
          <Text style={styles.routeText}>Chalotte St</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Icon name="location-outline" size={14} color="#FFFFFF" />
          <Text style={styles.infoText}>34 Km</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="time-outline" size={14} color="#FFFFFF" />
          <Text style={styles.infoText}>1h30m</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="cash-outline" size={14} color="#FFFFFF" />
          <Text style={styles.infoText}>$45.20</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.finishButton} onPress={() => navigation.navigate('DriverMapScreen')}>
        <Text style={styles.finishButtonText}>FINISH RIDE</Text>
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
    backgroundColor: '#303b71',
   
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    top:550,
    height: 200,
    borderTopLeftRadius:40,
    borderTopRightRadius:40
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  routePoint: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeText: {
    color: '#FFFFFF',
    marginLeft: 4,
    fontSize: 14,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: '#FFFFFF',
    marginLeft: 4,
    fontSize: 14,
  },
  finishButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    top:5
  },
  finishButtonText: {
    color: '#26307D',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapExample;
