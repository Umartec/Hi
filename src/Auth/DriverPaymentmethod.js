import { StyleSheet, Text, View ,TouchableOpacity, Image,FlatList} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: '1',
    title: 'Heiden St',
    subtitle: 'Charlotte St',
    price: '$25',
    rating: '4.3',
    date: '16 / 10 / 19',
  },
  {
    id: '2',
    title: 'Heiden St',
    subtitle: 'Manchester',
    price: '$15',
    rating: '4.8',
    date: '19 / 6 / 12',
  },
  {
    id: '3',
    title: 'Heiden St',
    subtitle: 'Charlotte St',
    price: '$50',
    rating: '4.0',
    date: '20 / 4 / 15',
  },
];



const ListItem = ({ title, subtitle, price, rating, date }) => (
  <View style={styles.itemContainer}>
    <View style={styles.row}>
      <View style={styles.leftSection}>
        <Icon name="map-marker" size={16} color="#FF5733" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.price}>{price}</Text>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
    <View style={styles.row}>
      <View style={styles.leftSection}>
        <Icon name="paper-plane" size={16} color="#FFB233" />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  </View>
);


const Paymentmethod = () => {
  
  const navigation = useNavigation();
  return (
   
       <View style={{flex: 1, backgroundColor: '#303b71'}}>
      <View
        style={{
          flexDirection: 'row',
          top: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('DriverSidebar')}>
          <Ionicons
            name={'arrow-back-sharp'}
            size={30}
            color="white"
            style={{left: 10}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
         Payment Method
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={'bell-badge-outline'}
            size={30}
            color="white"
            style={{right: 10}}
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
          gap:25
        }}>


<View style={{gap:25}}> 

                <View style={{height:100,width: '90%',borderColor:'#dedff0',borderWidth:2,backgroundColor:'#f9faff',flexDirection:'row',left: 18,borderRadius:5,alignItems:'center',gap:10,top:40}}>
                <View style={{height:50,width:50,backgroundColor:'white',elevation:1,borderRadius:5,left:15}}><Image source={require('../../src/Assets/welcome.jpg')} style={{height:45,width:45,borderRadius:10,left: 2,}}></Image></View> 
                <View style={{gap:7,left: 25,}}>
                  <Text style={{fontSize:20,color:'#777ea3',fontWeight:'bold'}}>Cash Payment</Text>
                  <Text style={{color:'#d0d4e7',left: 3,}}>Deafault Method</Text> 
                  </View>               
                  </View>
                  <View style={{height:100,width: '90%',borderColor:'#dedff0',borderWidth:2,backgroundColor:'#f9faff',flexDirection:'row',left: 18,borderRadius:5,alignItems:'center',gap:10,top:40}}>
                <View style={{height:50,width:50,backgroundColor:'white',elevation:1,borderRadius:5,left:15}}><Image source={require('../../src/Assets/hellos.jpg')} style={{height:60,width: 60,alignSelf:'center',top:-7}}></Image></View>
                <View style={{gap:7,left: 25,}}>
                  <Text style={{fontSize:20,color:'#777ea3',fontWeight:'bold'}}>Master Card</Text>
                  <Text style={{color:'#d0d4e7',left: 3,fontSize:20}}>*** *** ***</Text> 
                  </View>               
                  </View>


                  </View>
                  

<Text style={{fontSize:20,fontWeight:'bold',top:20,left:20}}>Recent Actvity</Text>

<FlatList
      data={DATA}
      renderItem={({ item }) => (
        <ListItem 
          title={item.title} 
          subtitle={item.subtitle} 
          price={item.price} 
          rating={item.rating} 
          date={item.date} 
        />
      )}
      keyExtractor={item => item.id}
    />
              <View style={{width: '100%',height: 100,backgroundColor:'#303b71',borderTopLeftRadius:40,borderTopRightRadius:40,top:-70,flexDirection:'row',justifyContent: 'space-around',gap:30}}>
                <Text style={{fontSize:20,color:'#d0d4e7',fontWeight:"bold",top:27,right:5}}>Total Balance</Text>
                <Text style={{fontSize:20,color:'white',fontWeight:"bold",top:27,}}>150$</Text>
              </View>
              
              
              </View>
              </View>
  )
}

export default Paymentmethod

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
  },
  price: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginRight: 8,
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});