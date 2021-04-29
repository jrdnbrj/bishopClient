/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import AppLayout from './src/App'


const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#36FF95'}/>
      <AppLayout />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#36FF95',
    flex: 1
  },
});

export default App;
