import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { useQuery, gql } from "@apollo/client"
import { useSelector, useDispatch } from "react-redux";


const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      name
      email
      birth
      phoneNumber
      password
      nickname
      email
      dni
      role
    }
  }
`;


const Home = ({ navigation }) => {

  const dispatch = useDispatch()

  const token = useSelector(state => state.user.token)

  dispatch({
    type: 'SET_TOKEN',
    payload: 'asd4543sd'
  })

  console.log('Token:', token)

  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) console.log('Loading...')
  if (error) console.log('Error:', error)

  console.log("Data:", data)

  return <View style={styles.background}>
    <Text style={styles.text}>HOME</Text>
    <Text style={styles.text}>{data && data.getUsers[0].nickname}</Text>
    <Text style={styles.text}>Token: {token}</Text>
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

export default Home