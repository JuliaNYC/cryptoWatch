import React from "react";
import { View, TextInput, TouchbleOpacity} from "react-native";

const Button = ({onPress, children}) => {
    return (
        <TouchbleOpacity onPress={onPress}>
            <Text
                {children}
            />
        </TouchbleOpacity>
    )
}

const styles = {
    button: {

    }
}


export default Button;