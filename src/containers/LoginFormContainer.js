import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    ActivityIndicator,
    StyleSheet, Platform,
    TouchableOpacity,
    ScrollView
} from "react-native";

import {emailChanged, passwordChanged} from "../actions/AuthAction";


class LoginFormContainer extends React.Component {
    onEmailChange = (text) => {
        this.props.emailChanged(text)
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text)
    }

    render () {
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
                <Button
                    title="Log In"
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginFormContainer)