import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
    TextInput,
    Button,
    ActivityIndicator,
    StyleSheet, Platform,
    TouchableOpacity,
    ScrollView
} from "react-native";

import {emailChanged, passwordChanged, loginUser} from "../actions/AuthAction";


class LoginFormContainer extends React.Component {
    onEmailChange = (text) => {
        this.props.emailChanged(text)
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text)
    }
    onLogin = () => {
        const {email, password} = this.props;
        this.props.loginUser({email, password})
    }
    renderError = () => {
    if (this.props.error) {
        return (
            <View>
                <Text style={{color: "red"}}>{this.props.error}</Text>
            </View>
        )
    }
    }

    render () {
        console.warn("render password", this.props.password)
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder="email@email.com"
                    onChangeText={this.onEmailChange}
                    value={this.props.email}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder="password"
                    onChangeText={this.onPasswordChange}
                    value={this.props.password}
                />
                
                {this.renderError()}

                <Button
                    title="Log In"
                    onPress={this.onLogin}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginFormContainer)