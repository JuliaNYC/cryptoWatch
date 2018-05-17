import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import CryptoContainer from "./src/containers/CryptoContainer";
import Header from "./src/components/Header";
import Store from './src/Store';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={Store}>
      <View style={styles.container}>
      <Header />
          <CryptoContainer />
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
