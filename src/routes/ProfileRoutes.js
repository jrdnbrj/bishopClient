import React from 'react'

import Header from '../components/Header'
import Profile from '../pages/Profile'
import AddProduct from '../pages//AddProduct'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator()

const ProfileRoutes = () => {
    return <Stack.Navigator initialRouteName="Profile"
        screenOptions={{
            gestureEnabled: true,
        }}
    >
        <Stack.Screen name='Profile' component={Profile} options={{ title: 'Perfil', header: props => <Header {...props} /> }} />
        <Stack.Screen name='AddProduct' component={AddProduct} options={{ title: 'Agregar Producto', header: props => <Header {...props} /> }} />
    </Stack.Navigator>
}

export default ProfileRoutes