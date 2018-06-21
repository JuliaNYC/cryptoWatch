import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
    TextInput,
    Button,
    ActivityIndicator,
    StyleSheet
} from "react-native";
import {Icon} from 'react-native-elements'
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
                    <Text style={{color: "red", marginLeft: 100, marginTop: 25, marginBottom: 10}}>{this.props.error}</Text>
                </View>
            )
        }

    }

    renderButton = () => {
        if (this.props.isFetchingUser) {
            return <ActivityIndicator size="large" color="orange"/>
        }
        return (
            <View style={styles.loginButton}>
            <Button
                title="Log In"
                color="black"
                onPress={this.onLogin}
            />
            </View>
        )
    }

    render() {
        const {container, inputWrapper, input} = styles;
        console.warn("render password", this.props.isFetchingUser)
        return (
            <View style={container}>
                <View style={inputWrapper}>
                    <View>
                        <Icon name='email' size={30} color="#ff9e00"/>
                    </View>
                    <TextInput
                        style={input}
                        placeholder="Enter Your Email Here"
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                </View>

                <View style={inputWrapper}>
                    <View>
                        <Icon name='lock-open' size={30} color="#ff9e00"/>
                    </View>
                    <TextInput
                        style={input}
                        placeholder="Enter Your Password Here"
                        onChangeText={this.onPasswordChange}
                        value={this.props.password}
                    />
                </View>
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
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 20
    },
    input: {
        width: 150,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40
    },
    loginButton: {
        backgroundColor: "#ff9e00",
        borderRadius: 10,
        width: "80%",
        height: 40,
        marginLeft: 30
    }
});
