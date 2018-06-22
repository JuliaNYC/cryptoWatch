import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    ActivityIndicator,
    StyleSheet
} from "react-native";

import {Icon} from 'react-native-elements'

const LoginWithEmailPassword = ({email, password, onEmailChange, onPasswordChange}) => {
    const {inputWrapper, input} = styles;
    return (
        <View>
            <View style={inputWrapper}>
                <View>
                    <Icon name='email' size={30} color="#5ac6dd"/>
                </View>
                <TextInput
                    style={input}
                    placeholder="Enter Your Email Here"
                    onChangeText={onEmailChange}
                    value={email}
                />
            </View>

            <View style={inputWrapper}>
                <View>
                    <Icon name='lock-open' size={30} color="#5ac6dd"/>
                </View>
                <TextInput
                    style={input}
                    placeholder="Enter Your Password Here"
                    onChangeText={onPasswordChange}
                    value={password}
                />
            </View>
        </View>
    )
}

export default LoginWithEmailPassword;

const styles = StyleSheet.create({
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
    }
});
