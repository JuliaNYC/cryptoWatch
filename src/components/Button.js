import React from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";

const Button = ({onPress, buttonStyle, children}) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}


export default Button;

const styles = {
    text: {
        color: "white",
        textAlign: "center",
        justifyContent: "center"
    }
}