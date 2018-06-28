import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import Store from './src/Store';
import {RouterWrapper} from "./src/RouterWrapper";

type Props = {};
export default class App extends Component<Props> {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBeTKRak354YzYxVucC4jkT1IRnI8TCt3I",
            authDomain: "cryptowatch-140c9.firebaseapp.com",
            databaseURL: "https://cryptowatch-140c9.firebaseio.com",
            projectId: "cryptowatch-140c9",
            storageBucket: "cryptowatch-140c9.appspot.com",
            messagingSenderId: "646388337925"

        }
        firebase.initializeApp(config)

    }

   /* componentDidMount () {
        this.props.isUserLoggedIn()
    }*/

    render() {
        console.warn("user in app" )
        return (
            <Provider store={Store}>
                    <RouterWrapper />
            </Provider>
        );
    }
}

/*export default connect(null, {isUserLoggedIn})(App)*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
