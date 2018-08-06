import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import {Icon} from 'react-native-elements'
import Button from "./Button";

export default class LoginWrapper extends React.Component {

        state = { selectedButton: "LOGIN" };

    selectionOnPress = (signupType) => {
        this.setState({ selectedButton: signupType })
        this.props.setShowLoginForm()
    }

    render() {

        return (
            <View style={styles.loginSignUpNavigation}>
                <Button onPress={() => this.selectionOnPress("LOGIN")} >
                    <View style={ this.state.selectedButton === "LOGIN" ? styles.active : styles.inActive }>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </View>
                </Button>

                <Button onPress={() => this.selectionOnPress("SIGNUP")} >
                    <View style={this.state.selectedButton === "SIGNUP" ? styles.active : styles.inActive}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </View>
                </Button>
            </View>
        )
    }

}

const styles = {
    loginSignUpNavigation: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 70,

    },
    buttonText: {
        padding: 10,
        color: "black",
        fontSize: 16
    },
    active: {
        borderBottomColor: "#5ac6dd",
        borderBottomWidth: 3,
    },
    inActive: {

    }
}