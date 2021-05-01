import React from 'react'

import Search from '../pages/Search'
import Header from '../components/Header'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator()

const SearchRoutes = () => {
    return <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name='Search' component={Search} options={{ title: 'Buscar', header: props => <Header {...props} />  }} />
    </Stack.Navigator>
}

export default SearchRoutes