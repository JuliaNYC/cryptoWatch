import React from "react";
import {connect} from "react-redux";
import {
    ActivityIndicator,
    Text,
    View
} from "react-native";

import Button from "../components/Button";
import {emailChanged, passwordChanged, loginUser, signUpUser} from "../actions/AuthAction";
import LoginOrSignupWithEmail from "../components/LoginOrSignupWithEmail";
import LoginWrapper from "../components/LoginWrapper";

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
                onPress={this.state.showLoginForm ? this.onLogin : this.onSignup}
            >
                <Text style={styles.submit}>{this.state.showLoginForm ? "LOG IN" : "REGISTER"}</Text>
            </Button>
        )
    }

    renderError = () => {
        if (this.props.error) {
            return <Text style={styles.errorMsg}>{this.props.error}</Text>
        }
    }

    setShowLoginForm = () => {
        this.setState({showLoginForm: !this.state.showLoginForm})
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginWrapper
                    setShowLoginForm={this.setShowLoginForm}
                />

                <LoginOrSignupWithEmail
                    email={this.props.email}
                    password={this.props.password}
                    onEmailChange={this.onEmailChange}
                    onPasswordChange={this.onPasswordChange}
                />

                <View style={styles.loginButton}>
                    {this.renderButton()}
                </View>


                <View>
                    {this.renderError()}
                </View>

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
};

export default connect(mapStateToProps,
    {emailChanged, passwordChanged, loginUser, signUpUser})(LoginFormContainer)

const styles = {

    container: {
        margin: 30
    },
    title: {
        textAlign: "center"
    },
    loginTitleWrapper: {
        backgroundColor: "#5ac6dd",
        marginTop: 30
    },
    signupTitleWrapper: {
        backgroundColor: "#99ff52",
        marginTop: 30
    },
    loginButton: {
        backgroundColor: "#5ac6dd",
        borderRadius: 10,
        width: "80%",
        height: 40,
        marginLeft: 30,
        marginTop: 10
    },
    errorMsg: {
        color: "red",
        marginLeft: 100,
        marginTop: 25,
        marginBottom: 10
    },
    submit: {
        color: "black",
        paddingTop: 25,
        fontSize: 16,
        top: 30
    }
}