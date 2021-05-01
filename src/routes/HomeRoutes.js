import React from 'react'

import Home from '../pages/Home'
import Header from '../components/Header'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator()

const HomeRoutes = () => {
    return <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} options={{ title: 'Inicio', header: props => <Header {...props} /> }} />
    </Stack.Navigator>
}

export default HomeRoutes