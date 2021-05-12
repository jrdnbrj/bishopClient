import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Profile = ({ navigation }) => {
    return <View style={styles.background}>
        <TouchableOpacity style={styles.addProduct} onPress={() => navigation.navigate('AddProduct')}>
            <Text style={styles.text}>Agregar Producto</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#EEEEEE',
        flex: 1
    },
    addProduct: {
        backgroundColor: '#1B2930',
        alignItems: 'center',
        padding: 5,
        marginHorizontal: 50,
        marginTop: 10,
        borderRadius: 50
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
});

export default Profile