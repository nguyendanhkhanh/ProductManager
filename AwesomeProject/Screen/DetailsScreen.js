import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, FlatList, TouchableOpacity, ScrollView, Image,
StyleSheet, } from 'react-native';
import styles from '../styles/styleSheet'


//Details Screen
function DetailsScreen({navigation}) {
  const [nameProduct, setNameProduct] = useState("Paradon");
    const [unitProduct, setUnitProduct] = useState("box");  
    const [lotNumber, setLotNumber] = useState("123321");
    const [priceProduct, setPriceProduct] = useState("50000");

    const [direction, setDirection] = useState("");  

    function submitForm() {
        console.log(nameProduct, unitProduct, lotNumber, priceProduct);  
    }

    return(
        <SafeAreaView 
        style={styles.container}>
            <View>
              <Text style={styles.label}>Product Details</Text>  
            </View>
            <ScrollView style={styles.topic}>
                <View>
                    <Text style={styles.textTopic}>Product name:</Text>
                    <TextInput 
                    editable={false} 
                    style={styles.input} 
                    placeholder="Type here..."
                    value={nameProduct}
                    onChangeText={(text) => setNameProduct(text)} />
                </View>
                <View>
                    <Text style={styles.textTopic}>Unit:</Text>
                    <TextInput 
                    editable={false} 
                    style={styles.input}
                    placeholder="Type here..."
                    value={unitProduct}
                    onChangeText={(text) => setUnitProduct(text)} 
                    />
                </View>
                <View>
                    <Text style={styles.textTopic}>Lot number:</Text>
                    <TextInput 
                    editable={false} 
                    style={styles.input}
                    placeholder="Type here..." 
                    value={lotNumber}
                    onChangeText={(text) => setLotNumber(text)} 
                    />
                </View>
                <View>
                    <Text style={styles.textTopic}>Price (VND):</Text>
                    <TextInput
                    editable={false} 
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
                <View style={styles.row}>
                  <TouchableOpacity 
                  style={styles.button}
                  onPress={submitForm}>
                    <Text style={styles.buttonText}>EDIT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style={styles.button}
                  disabled
                  onPress={submitForm}>
                    <Text style={styles.buttonText}>DELETE</Text>
                  </TouchableOpacity>
                </View> 
            </ScrollView>
        </SafeAreaView>        
    )
}

export default DetailsScreen;