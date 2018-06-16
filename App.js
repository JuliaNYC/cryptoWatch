import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import CryptoContainer from "./src/containers/CryptoContainer";
import Header from "./src/components/Header";i
import Store from './src/Store';


type Props = {};
export default class App extends Component<Props> {
    componentWillMount () {
        firebase.initializeApp({
            apiKey: "AIzaSyBeTKRak354YzYxVucC4jkT1IRnI8TCt3I",
            authDomain: "cryptowatch-140c9.firebaseapp.com",
            databaseURL: "https://cryptowatch-140c9.firebaseio.com",
            projectId: "cryptowatch-140c9",
            storageBucket: "cryptowatch-140c9.appspot.com",
            messagingSenderId: "646388337925"
        })
    }
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