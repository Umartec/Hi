import { StyleSheet, Text, View, TouchableOpacity, TextInput, SectionList, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    title: 'A',
    data: [
      { id: '1', name: 'Aihan soysakal', status: 'Invite', image: require('../../src/Assets/All.jpg') },
      { id: '2', name: 'Aarius Ciocirlan', status: 'Done', image: require('../../src/Assets/fell.jpg') },
      { id: '3', name: 'Aosh Howard', status: 'Invite', image: require('../../src/Assets/fell.jpg') },
    ],
  },
  {
    title: 'B',
    data: [
      { id: '4', name: 'Gregory Hayes', status: 'Done', image: require('../../src/Assets/ima.jpg') },
      { id: '5', name: 'Barshan Patel', status: 'Invite', image: require('../../src/Assets/imagess.jpg') },
      { id: '6', name: 'Gregory Hayes', status: 'Done', image: require('../../src/Assets/All.jpg') },
    ],
  },
];

const InviteFriend = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.avatar} />
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity style={[styles.button, item.status === 'Done' ? styles.doneButton : styles.inviteButton]}>
        <Text style={[styles.buttonText, item.status === 'Done' ? styles.doneButtonText : styles.inviteButtonText]}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
          <Ionicons name="arrow-back-sharp" size={30} color="white" style={{ left: 10 }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Invite Friends</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell-badge-outline" size={30} color="white" style={{ right: 10 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Search Friends"
          placeholderTextColor="#45518d"
          style={styles.searchInput}
          selectionColor="#d0d4e7" 
        />
        <Ionicons name="search" size={24} color="#d0d4e7" style={styles.searchIcon} />
      </View>
      <View style={styles.listContainer}>
        <SectionList
          sections={DATA}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.sectionListContent}
        />
      </View>
    </View>
  );
};

export default InviteFriend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303b71',
  },
  headerContainer: {
    flexDirection: 'row',
    top: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: '#242f62',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingVertical: 25,
    marginTop: 35,
  },
  sectionListContent: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303b71',
    marginTop: 10,
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#303b71',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
   height:32,
   width: 70,
  },
  inviteButton: {
    backgroundColor: '#303b71',
    borderRadius:5
  },
  doneButton: {
   borderColor:'black',
   borderWidth:1,
   borderRadius:5
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  inviteButtonText: {
    color: 'white',
  },
  doneButtonText: {
    color: '#303b71',
  },
});
