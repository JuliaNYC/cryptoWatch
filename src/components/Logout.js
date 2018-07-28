import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from "react-native";
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "./Button";
import {logoutUser} from "../actions/AuthAction";

const Logout = ({logoutUser}) => {
    const {logoutContainer, title, button, buttonText} = styles;
    return (
        <View style={logoutContainer}>
            <Button
                buttonStyle={button}
                onPress={() => logoutUser()}
            >
                <Text style={buttonText}>
                Logout
                </Text>
            </Button>
            <Text style={title}>See you soon
                <Icon
                    name="hand-peace-o"
                    size={20}
                    color="#030F26"
                />
            </Text>
        </View>
    )
}

const styles = {
    logoutContainer: {
        margin: 60
    },
    title: {
        textAlign: "center",
        fontSize: 15,
        color: "#030F26",
        marginTop: 15,
        marginRight: 15
    },
    button: {
        backgroundColor: "#FA9702",
        height: 40,
        borderRadius: 10,
        fontSize: 20
    },
    buttonText: {
        fontSize: 20
    }
}

export default connect(null, {logoutUser})(Logout)
