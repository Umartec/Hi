import { StyleSheet, Text, View, TouchableOpacity, SectionList } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: '1',
    title: 'Heiden St',
    subtitle: 'Charlotte St',
    rating: '4.3',
    date: '31/10/2019',
  },
  {
    id: '2',
    title: 'Heiden St',
    subtitle: 'Manchester',
    rating: '4.8',
    date: '31/10/2019',
  },
  {
    id: '3',
    title: 'Heiden St',
    subtitle: 'Charlotte St',
    rating: '4.0',
    date: '31/10/2019',
  },
  {
    id: '4',
    title: 'Heiden St',
    subtitle: 'Charlotte St',
    rating: '4.3',
    date: '12/10/2019',
  },
  {
    id: '5',
    title: 'Heiden St',
    subtitle: 'Manchester',
    rating: '4.8',
    date: '12/10/2019',
  },
  {
    id: '6',
    title: 'Heiden St',
    subtitle: 'Manchester',
    rating: '4.8',
    date: '12/10/2019',
  },
];

const ListItem = ({ title, subtitle, rating }) => (
  <View style={styles.itemContainer}>
    <View style={styles.row}>
      <View style={styles.leftSection}>
        <Icon name="map-marker" size={16} color="#FF5733" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightSection}>
        <Icon name="star" size={16} color="#FFD700" style={{ top: 13 }} />
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
    <View style={styles.row}>
      <View style={styles.leftSection}>
        <Icon name="paper-plane" size={16} color="#FFB233" style={{ top: 20 }} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  </View>
);

const HistoryScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => <ListItem title={item.title} subtitle={item.subtitle} rating={item.rating} />;

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  // Group the data by date
  const groupedData = DATA.reduce((acc, item) => {
    const date = item.date;
    if (!acc[date]) {
      acc[date] = { title: date, data: [] };
    }
    acc[date].data.push(item);
    return acc;
  }, {});

  // Convert the grouped data into an array of sections
  const sections = Object.values(groupedData);

  return (
    <View style={{ flex: 1, backgroundColor: '#303b71' }}>
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
          History
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
        }}>
        <SectionList
          sections={sections}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item) => item.id}
        />
        <Text>                                                                                                                                                                                                                                 
                                
        </Text>
      </View>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
    height: 110,
    top:-20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    top: 20,
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
    top: 13,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 10,
    top:-15
  },
});
