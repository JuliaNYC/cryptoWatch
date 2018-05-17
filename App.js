/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import Header from "./src/components/Header";
import Store from './src/Store';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={Store}>
      <View style={styles.container}>
      <Header />
      </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
