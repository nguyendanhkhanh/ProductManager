// In App.js in a new project

import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, FlatList, TouchableOpacity, ScrollView, Image,
StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles/styleSheet';
import CreatScreen from './Screen/CreateScreen';
import DetailsScreen from "./Screen/DetailsScreen";
import ProductScreen from "./Screen/ProductScreen";

//
// import { MaterialIcons } from '@expo/vector-icons';

// //ProductScreen

// const listItems = [
//   {
//     id: '1',
//     name: 'hiParadon',
//     unit: 'Box',
//     lot: '123321',
//     img: './images.jpg',
//     price: '100.000',
//   },
//   {
//     id: '2',
//     name: 'Paradon Extra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'Paradon Extra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'Paradon Extra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'ParadonExtra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'ParadonExtra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'ParadonExtra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'ParadonExtra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'ParadonExtra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'ParadonExtra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'ParadonExtra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'ParadonExtra',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
//   {
//     id: '2',
//     name: 'ParadonExtra1',
//     unit: 'Box', 
//     lot: '123456',   
//     img: './images.jpg',
//     price: '200.000',
//   },
  
// ];
// const Item = ({ item, onPress }) => (
//   <TouchableOpacity onPress={onPress} style={styles.item, styles.row}>
//     <Image 
//       style={styles.img}
//       source={require('./images.jpg')} />
//     <View style={styles.spaceAround}>
//       <Text style={[styles.itemTextName]}>{item.name}</Text>
//       <Text style={[styles.itemTextPrice]}>Price: {item.price} VND</Text>
//     </View>
//   </TouchableOpacity>
// );
// const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 1,
//           width: '100%',
//           backgroundColor: '#C8C8C8',
//         }}
//       />
//     );
// };

// function ProductScreen({navigation}) {
//   const [search, setSearch] = useState('');
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   const renderItem = ({ item }) => {
//   return (
//       <Item
//         item={item}
//         //onPress={}
//       />
//     );
//   };  

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text style={styles.label}>Products List</Text>    
//         <TouchableOpacity
//         style={styles.buttonCreate, styles.absolute}
//         onPress={() => {
//         navigation.navigate('Create Screen');
//         }}>
//           {/* <MaterialIcons name="library-add" size={25} color="white"/> */}
//           <Text>Hihi</Text>
//         </TouchableOpacity>
//       </View>  
//       <View style={styles.topic}>
//         <TextInput 
//         style={styles.search}
//         placeholder="Search">
//         </TextInput>
//         <TouchableOpacity
//         style={styles.buttonBack}
//         onPress={() => {
//         navigation.navigate('Product Details Screen');
//         }}>
//           <Text>PDetail</Text>
//         </TouchableOpacity>
//         <FlatList
//         data={listItems}
//         ItemSeparatorComponent={ItemSeparatorView}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//       </View>
//     </SafeAreaView>
//   );
// }



// //Create Screen
// function CreatScreen({navigation}) {
//     const [nameProduct, setNameProduct] = useState("");
//     const [unitProduct, setUnitProduct] = useState("");  
//     const [lotNumber, setLotNumber] = useState("");
//     const [priceProduct, setPriceProduct] = useState("");

//     function submitForm() {
//       console.log(nameProduct, unitProduct, lotNumber, priceProduct);
//     }
//   return (
//     <SafeAreaView style={styles.container}>
//             <View>
//               <Text style={styles.label}>Create new Product</Text>  
//             </View>
//             <ScrollView style={styles.topic}>
//                 <View>
//                     <Text style={styles.textTopic}>Product name:</Text>
//                     <TextInput 
//                     style={styles.input} 
//                     placeholder="Type here..."
//                     value={nameProduct}
//                     onChangeText={(text) => setNameProduct(text)} />
//                 </View>
//                 <View>
//                     <Text style={styles.textTopic}>Unit:</Text>
//                     <TextInput 
//                     style={styles.input}
//                     placeholder="Type here..."
//                     value={unitProduct}
//                     onChangeText={(text) => setUnitProduct(text)} 
//                     />
//                     {/* {isValidName(text) ? (
//                       <Text style={styles.validateText}>Name is not validate!</Text>
//                     ) : null} */}
//                 </View>
//                 <View>
//                     <Text style={styles.textTopic}>Lot number:</Text>
//                     <TextInput 
//                     style={styles.input}
//                     placeholder="Type here..." 
//                     value={lotNumber}
//                     onChangeText={(text) => setLotNumber(text)} 
//                     />
//                 </View>
//                 <View>
//                     <Text style={styles.textTopic}>Price (VND):</Text>
//                     <TextInput 
//                     style={styles.input} 
//                     keyboardType="numeric"
//                     placeholder="Type here..."
//                     value={priceProduct} 
//                     onChangeText={(text) => setPriceProduct(text)} 
//                     />
//                 </View>
//                 <View>
//                     <Text>Image:</Text>
//                 </View>
//                 <TouchableOpacity 
//                 style={styles.button}
//                 onPress={submitForm}>
//                   <Text style={styles.buttonText}>SUBMIT</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//         </SafeAreaView>    
//   );
// }
// //Details Screen
// function DetailsScreen({navigation}) {
//   const [nameProduct, setNameProduct] = useState("Paradon");
//     const [unitProduct, setUnitProduct] = useState("box");  
//     const [lotNumber, setLotNumber] = useState("123321");
//     const [priceProduct, setPriceProduct] = useState("50000");

//     const [direction, setDirection] = useState("");  

//     function submitForm() {
//         console.log(nameProduct, unitProduct, lotNumber, priceProduct);  
//     }

//     return(
//         <SafeAreaView 
//         style={styles.container}>
//             <View>
//               <Text style={styles.label}>Product Details</Text>  
//             </View>
//             <ScrollView style={styles.topic}>
//                 <View>
//                     <Text style={styles.textTopic}>Product name:</Text>
//                     <TextInput 
//                     editable={false} 
//                     style={styles.input} 
//                     placeholder="Type here..."
//                     value={nameProduct}
//                     onChangeText={(text) => setNameProduct(text)} />
//                 </View>
//                 <View>
//                     <Text style={styles.textTopic}>Unit:</Text>
//                     <TextInput 
//                     editable={false} 
//                     style={styles.input}
//                     placeholder="Type here..."
//                     value={unitProduct}
//                     onChangeText={(text) => setUnitProduct(text)} 
//                     />
//                 </View>
//                 <View>
//                     <Text style={styles.textTopic}>Lot number:</Text>
//                     <TextInput 
//                     editable={false} 
//                     style={styles.input}
//                     placeholder="Type here..." 
//                     value={lotNumber}
//                     onChangeText={(text) => setLotNumber(text)} 
//                     />
//                 </View>
//                 <View>
//                     <Text style={styles.textTopic}>Price (VND):</Text>
//                     <TextInput
//                     editable={false} 
//                     style={styles.input} 
//                     keyboardType="numeric"
//                     placeholder="Type here..."
//                     value={priceProduct} 
//                     onChangeText={(text) => setPriceProduct(text)} 
//                     />
//                 </View>
//                 <View>
//                     <Text>Image:</Text>
//                 </View>
//                 <View style={styles.row}>
//                   <TouchableOpacity 
//                   style={styles.buttonDetail}
//                   onPress={submitForm}>
//                     <Text style={styles.buttonText}>EDIT</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity 
//                   style={styles.buttonDetail}
//                   disabled
//                   onPress={submitForm}>
//                     <Text style={styles.buttonText}>DELETE</Text>
//                   </TouchableOpacity>
//                 </View> 
//             </ScrollView>
//         </SafeAreaView>        
//     )
// }

// const Stack = createStackNavigator();

// function App() {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Product Screen" component={ProductScreen} />
//         <Stack.Screen name="Create Screen" component={CreatScreen} />
//         <Stack.Screen name="Product Details Screen" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// //style sheet
// const styles = StyleSheet.create({
//   //All screen
//   container: {
//     flex: 1,
//     marginTop: 10,
//     backgroundColor: "aliceblue",
//   },
//   //All Screen
//   label: {
//     fontSize: 30,
//     backgroundColor: "green",
//     textAlign: "center",
//     fontWeight: "bold",
//   },

//   //Screen 1
//   buttonBack: {
//     backgroundColor: "#5f9ea0",
//     width: "15%",
//     marginTop: 2,
//     borderRadius: 25,
//     alignItems: "center",
//   },
//   buttonCreate: {
//     backgroundColor: "black",
//     width: "9%",
//     marginTop: 2,
//     borderRadius: 5,
//     alignItems: "center",
//     flex: 2,
//     zIndex: 10,
//   },
//   //Screen 1
//   search: {
//     fontSize: 20,
//     paddingLeft: 10,
//     backgroundColor: "#f0f8ff",
//     color: "black",
//     borderWidth: 1,
//     marginBottom: 5,
//     marginTop: 0, 
//     borderRadius: 3,
//   },
//   //Screen 1
//   item: {
//     padding: 10,
//     height: 150,
//     fontSize: 18,
//     backgroundColor: "white",
//     zIndex: 9,
//   },
//   itemTextName: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   itemTextPrice: {
//     fontSize: 16,
//   },
//   //All
//   img: {
//     width: 70,
//     height: 70,
//   },

//   //Screen 2, 3
//   topic: {
//     marginLeft: 15,
//     marginTop: 10,
//     marginRight: 15,
//     marginBottom: 100,
//   },
//   //Screen 2 3
//   textTopic: {
//     fontSize: 15,
//   },
//   //All
//   input: {
//     borderWidth:1,
//     borderColor: "grey",
//     fontSize: 20,
//     borderRadius: 3,
//   },
//   //Screen 2 3
//   validateText: {
//     color: "red",
//     fontSize: 10,
//   },
//   //Screen 2
//   button: {
//     backgroundColor: "green",
//     height: 50,
//     marginTop: 10,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: "20%",
//     marginRight: "20%",
//   },
//   //Screen 23
//   buttonText: {
//     fontWeight: "bold",
//   },
//   //SCreen 3
//   buttonDetail: {
//     backgroundColor: "green",
//     width: '40%',    
//     height: 50,
//     marginTop: 10,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: "5%",
//     marginRight: "5%",
//   },

//   //flex
//   row: {
//     flexDirection: "row",
//   },
//   column: {
//     flexDirection: "column",
//   },
//   spaceAround: {

//   },
//   absolute: {
//     position: "absolute",
//     top: 8,
//     right: "5%",
//   },

// });


// export default App;
const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product Screen" component={ProductScreen} />
        <Stack.Screen name="Create Screen" component={CreatScreen} />
        <Stack.Screen name="Product Details Screen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;