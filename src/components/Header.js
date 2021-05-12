import React from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


const Header = ({ scene, previous, navigation }) => {
    const { options } = scene.descriptor
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name

    return <View style={styles.background}>
        { previous ? 
            <TouchableOpacity onPress={navigation.goBack}>
                <Icon name='md-chevron-back' size={25} color='#96FF9A' />
            </TouchableOpacity> 
            : <View style={{ marginHorizontal: 12 }}/> }
        <Text style={styles.title}>{title}</Text>
        <Icon name='md-rocket' size={25} color='#96FF9A' />
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#3E2B88',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },
    title: {
        color: '#96FF9A',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: "center",
    }
})

export default Header