/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'

// Apollo
import { ApolloProvider } from "@apollo/client/react"
import client from "./src/adapters/apolloClient"

// Redux
import { Provider as ReduxProvider } from "react-redux"
import store from './src/adapters/store'

import AppLayout from './src/AppLayout'


const App = () => {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <SafeAreaView style={styles.background}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#36FF95'}/>
          <AppLayout />
        </SafeAreaView>
      </ReduxProvider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#36FF95',
    flex: 1
  },
});

export default App
