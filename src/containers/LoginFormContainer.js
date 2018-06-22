import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    StyleSheet
} from "react-native";
import {emailChanged, passwordChanged, loginUser} from "../actions/AuthAction";
import LoginWithEmailPassword from "../components/LoginWithEmailPassword";

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
                    <Text style={{
                        color: "red",
                        marginLeft: 100,
                        marginTop: 25,
                        marginBottom: 10
                    }}>{this.props.error}</Text>
                </View>
            )
        }

    }

    renderButton = () => {
        if (this.props.isFetchingUser) {
            return <ActivityIndicator size="large" color="#5ac6dd"/>
        }
        return (
            <View style={styles.loginButton}>
                <Button
                    title="Log In"
                    color="white"
                    onPress={this.onLogin}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginWithEmailPassword
                    email={this.props.email}
                    password={this.props.password}
                    onEmailChange={this.onEmailChange}
                    onPasswordChange={this.onPasswordChange}
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
        margin: 30
    },
    loginButton: {
        backgroundColor: "#5ac6dd",
        borderRadius: 10,
        width: "80%",
        height: 40,
        marginLeft: 30
    }
});
