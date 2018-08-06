import React from "react";
import {View, Text, AsyncStorage, TouchableOpacity} from "react-native";
const FBSDK = require('react-native-fbsdk');
import {connect} from "react-redux";
import {facebookLogin} from "../actions/AuthAction";
import firebase from "firebase"
const {
    LoginButton,
    AccessToken
} = FBSDK;

/*
class FacebookLogin extends React.Component {

   /!* componentDidMount (){
        this.props.facebookLogin();
      //  AsyncStorage.removeItem("fb_token")
    }*!/
    renderFBButton() {
        return (
            <TouchableOpacity
                onPress={this.onFBButtonPress}
                title="Continue with Facebook"
            >
                <Text>
                    Continue with Facebook
                </Text>
            </TouchableOpacity>
        );
    }
    onFBButtonPress = () => {
        this.props.facebookLogin();
    }
    render () {
        return (
            <View>
                {/!*{this.renderFBButton()}*!/}
              <LoginButton
                   publishPermissions={["public_profile"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.warn(data.accessToken.toString(), data)
                                      /!*  firebase.auth().signInAndRetrieveDataWithCredential(credential)
                                            .then((user) => console.warn("user for fb", user))*!/
                                    })
                                    }
                            }
                        }

                    onLogoutFinished={() => alert("logout.")}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {

}

export default connect(null, {facebookLogin})(FacebookLogin);*/


export default class FacebookLogin extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
                <LoginButton
                    publishPermissions={["public_profile"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + error.message);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                alert("Login was successful with permissions: " + result)
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")}/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    label: {
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 48,
    },
};
