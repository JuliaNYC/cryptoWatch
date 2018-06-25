import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from "react-native";
import {connect} from "react-redux";
import {logoutUser} from "../actions/AuthAction";

class Logout extends React.Component {
    render () {
        const {logoutContainer, title, button} = styles;
        return (
        <View style={logoutContainer}>
            <Text style={title}>Logout</Text>
            <Button
                title="Logout"
                style={button}
                onPress={()=> this.props.logoutUser()}
            />
        </View>
        )
    }
}

const styles = {
    logoutContainer: {
        margin: 30
    },
    title: {
       textAlign: "center",
        color: "#5ac6dd"
    },
    button: {
        backgroundColor: "#5ac6dd"
    }
}

export default connect(null, {logoutUser})(Logout)
