import React from 'react'
import { View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons'

import Home from './routes/HomeRoutes'
import Search from './routes/SearchRoutes'
import Profile from './routes/ProfileRoutes'

const Stack = createStackNavigator()
const Drawer  = createDrawerNavigator()
const Tab = createBottomTabNavigator()


const AppLayout = () => {
  return <View style={{ flex: 1 }}>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName
            if(route.name === 'Home')
              iconName = focused ? 'home-sharp' : 'home-outline'
            else if(route.name === 'Search')
              iconName = focused ? 'search' : 'search-outline'
            else if(route.name === 'Profile')
              iconName = focused ? 'person-sharp' : 'person-outline'

            return <Icon name={iconName} size={25} color='#96FF9A' />
          }
        })}
        tabBarOptions={{
          showLabel: false,
          inactiveBackgroundColor: '#3E2B88',
          activeBackgroundColor: '#3E2B88',
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
        <Tab.Screen name="Search" component={Search} options={{ title: 'Buscar' }} />
        <Tab.Screen name="Profile" component={Profile} options={{ title: 'Perfil', tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  </View>
}

export default AppLayout