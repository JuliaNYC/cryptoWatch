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
import Spinner from "react-native-loading-spinner-overlay";
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

    renderButton = () => {
        if (this.props.isFetchingUser) {
            return <ActivityIndicator size="large" color="#0000ff" />
        }
        return (
            <Button
                title="Log In"
                onPress={this.onLogin}
            />
        )
    }

    render () {
        console.warn("render password", this.props.isFetchingUser)
        return (
            <View style={styles.container}>
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
                <Text>
                    {this.renderError()}
                </Text>
                {this.renderButton()}
            </View>
        )
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, isFetchingUser, errorMsg} = auth;
    return {
        email,
        password,
        isFetchingUser,
        error: errorMsg
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginFormContainer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});