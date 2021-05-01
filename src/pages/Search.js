import React from 'react';

import { StyleSheet, View, Text } from 'react-native';


const Search = ({ navigation }) => {
    return <View style={styles.background}>
        <Text style={styles.text}>Search</Text>
    </View>
}

const styles = StyleSheet.create({
    background: {
        // backgroundColor: '#36FF94',
        // flex: 1
    },
    text: {
        fontSize: 20
    }
});

export default Search