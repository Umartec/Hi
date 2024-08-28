import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import for icons

const HomeScreen = () => {

  const navigation = useNavigation();

  // Define the users array
  const users = [
    {
      id: '1',
      name: 'Cihan soysakal',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
    {
      id: '2',
      name: 'Gregory Hayes',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
    {
      id: '3',
      name: 'Dana Jm',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
    {
      id: '4',
      name: 'Disruptivo',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
    {
      id: '5',
      name: 'Emir Saldierna',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
    {
      id: '6',
      name: 'Cihan soysakal',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
    {
      id: '7',
      name: 'Gregory Hayes',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
    {
      id: '8',
      name: 'Dana Jm',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
    {
      id: '9',
      name: 'Disruptivo',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
    {
      id: '10',
      name: 'Emir Saldierna',
      rating: 4.4,
      likes: 15,
      comments: 4,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#303b71' }}>
      <View
        style={{
          flexDirection: 'row',
          top: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          top: 50,
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          paddingVertical: 25,
          paddingHorizontal: 10,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {users.map(user => (
            <View key={user.id} style={styles.userCard}>
              <Image source={require('../../src/Assets/fell.jpg')} style={styles.profilePic} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <View style={styles.ratingContainer}>
                  <Icon name="star" color="#F5C518" />
                  <Text style={styles.ratingText}>{user.rating}</Text>
                </View>
                <View style={styles.socialInfo}>
                  <View style={styles.iconWithText}>
                    <Icon name="thumbs-up" size={16} color="#888" />
                    <Text style={styles.iconText}>{user.likes}</Text>
                  </View>
                  <View style={styles.iconWithText}>
                    <Icon name="comment" size={16} color="#888" />
                    <Text style={styles.iconText}>{user.comments}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.callButton} onPress={() => navigation.navigate('CallScreen')}>
                <Text style={styles.callText}>Call</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    color: '#555',
  },
  socialInfo: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    marginLeft: 5,
    color: '#888',
  },
  callButton: {
    backgroundColor: '#303b71',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  callText: {
    color: '#fff',
  },
});