import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, FlatList, TouchableOpacity, ScrollView, Image,
StyleSheet, } from 'react-native';
import styles from '../styles/styleSheet'


//Create Screen
function CreatScreen({navigation}) {
    const [nameProduct, setNameProduct] = useState("");
    const [unitProduct, setUnitProduct] = useState("");  
    const [lotNumber, setLotNumber] = useState("");
    const [priceProduct, setPriceProduct] = useState("");

    function submitForm() {
      console.log(nameProduct, unitProduct, lotNumber, priceProduct);
    }
  return (
    <SafeAreaView style={styles.container}>
            <View>
              <Text style={styles.label}>Create new Product</Text>  
            </View>
            <ScrollView style={styles.topic}>
                <View>
                    <Text style={styles.textTopic}>Product name:</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Type here..."
                    value={nameProduct}
                    onChangeText={(text) => setNameProduct(text)} />
                </View>
                <View>
                    <Text style={styles.textTopic}>Unit:</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="Type here..."
                    value={unitProduct}
                    onChangeText={(text) => setUnitProduct(text)} 
                    />
                    {/* {isValidName(text) ? (
                      <Text style={styles.validateText}>Name is not validate!</Text>
                    ) : null} */}
                </View>
                <View>
                    <Text style={styles.textTopic}>Lot number:</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="Type here..." 
                    value={lotNumber}
                    onChangeText={(text) => setLotNumber(text)} 
                    />
                </View>
                <View>
                    <Text style={styles.textTopic}>Price (VND):</Text>
                    <TextInput 
                    style={styles.input} 
                    keyboardType="numeric"
                    placeholder="Type here..."
                    value={priceProduct} 
                    onChangeText={(text) => setPriceProduct(text)} 
                    />
                </View>
                <View>
                    <Text>Image:</Text>
                </View>
                <TouchableOpacity 
                style={styles.button}
                onPress={submitForm}>
                  <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>    
  );
}

export default CreatScreen;