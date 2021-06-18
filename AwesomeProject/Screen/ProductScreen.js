import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, FlatList, TouchableOpacity, ScrollView, Image,
StyleSheet, } from 'react-native';
import styles from '../styles/styleSheet';
// import { MaterialIcons } from '@expo/vector-icons';

//ProductScreen

const listItems = [
  {
    id: '1',
    name: 'Paradon',
    unit: 'Box',
    lot: '123321',
    img: './images.jpg',
    price: '100.000',
  },
  {
    id: '2',
    name: 'Paradon Extra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'Paradon Extra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'Paradon Extra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'ParadonExtra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'ParadonExtra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'ParadonExtra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'ParadonExtra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'ParadonExtra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'ParadonExtra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'ParadonExtra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'ParadonExtra',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  {
    id: '2',
    name: 'ParadonExtra1',
    unit: 'Box', 
    lot: '123456',   
    img: './images.jpg',
    price: '200.000',
  },
  
];
const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item, styles.row}>
    <Image 
      style={styles.img}
      source={require('../images.jpg')} />
    <View style={styles.spaceAround}>
      <Text style={[styles.itemTextName]}>{item.name}</Text>
      <Text style={[styles.itemTextPrice]}>Price: {item.price} VND</Text>
    </View>
  </TouchableOpacity>
);
const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
};

function ProductScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const renderItem = ({ item }) => {
  return (
      <Item
        item={item}
        //onPress={}
      />
    );
  };  

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.label}>Products List</Text>    
        <TouchableOpacity
        style={styles.buttonCreate, styles.absolute}
        onPress={() => {
        navigation.navigate('Create Screen');
        }}>

          <Text>hihi</Text>
        </TouchableOpacity>
      </View>  
      <View style={styles.topic}>
        <TextInput 
        style={styles.search}
        placeholder="Search">
        </TextInput>
        <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => {
        navigation.navigate('Product Details Screen');
        }}>
          <Text>PDetail</Text>
        </TouchableOpacity>
        <FlatList
        data={listItems}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </View>
    </SafeAreaView>
  );
}
export default ProductScreen;
