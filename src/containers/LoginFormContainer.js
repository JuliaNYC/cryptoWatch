import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    StyleSheet
} from "react-native";

import {emailChanged, passwordChanged, loginUser, signUpUser} from "../actions/AuthAction";
import LoginOrSignupWithEmail from "../components/LoginOrSignupWithEmail";

class LoginFormContainer extends React.Component {
    state = {
        showLoginForm: true
    };

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

    onSignup = () => {
        const {email, password} = this.props;
        this.props.signUpUser({email, password})
    }

    renderButton = () => {
        if (this.props.isFetchingUser) {
            return <ActivityIndicator size="large" color="#5ac6dd"/>
        }
        return (
            <Button
                title="Submit"
                color="white"
                onPress={this.state.showLoginForm ? this.onLogin : this.onSignup}
            />
        )
    }

    renderError = () => {
        if (this.props.error) {
            return (
                <View>
                    <Text style={styles.errorMsg}>{this.props.error}</Text>
                </View>
            )
        }
    }

    render() {
        const {showLoginForm} = this.state;

        return (
            <View style={styles.container}>

                <Text>{showLoginForm ? "Please Log In" : "Please Sign Up"}</Text>

                <LoginOrSignupWithEmail
                    email={this.props.email}
                    password={this.props.password}
                    onEmailChange={this.onEmailChange}
                    onPasswordChange={this.onPasswordChange}
                />

                <View style={styles.loginButton}>
                    {this.renderButton()}
                </View>

                <View style={styles.loginSignUpNavigation}>
                    <Button
                        title={showLoginForm ? "Go Sign Up" : "Go Log In"}
                        color="white"
                        onPress={() => this.setState({showLoginForm: !showLoginForm})}
                    />
                </View>

                <Text>
                    {this.renderError()}
                </Text>

            </View>
        )
    }
}

const mapStateToProps = ({auth}) => {
    console.warn("auth----->", auth.user)
    const {email, password, isFetchingUser, errorMsg} = auth;
    return {
        email,
        password,
        isFetchingUser,
        error: errorMsg
    }
};

export default connect(mapStateToProps,
    {emailChanged, passwordChanged, loginUser, signUpUser})(LoginFormContainer)

const styles = StyleSheet.create({

    container: {
        margin: 30
    },
    loginButton: {
        backgroundColor: "#5ac6dd",
        borderRadius: 10,
        width: "80%",
        height: 40,
        marginLeft: 30,
        marginTop: 10
    },
    loginSignUpNavigation: {
        backgroundColor: "#99ff52",
        marginTop: 40
    },
    errorMsg: {
        color: "red",
        marginLeft: 100,
        marginTop: 25,
        marginBottom: 10
    }
})