import React from "react";
import {
    Text,
    TextInput,
    TouchbleOpacity,
    View
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "./Button";

const AddCoinToWatchList = ({addCoinToWatch, added, coin: {id, symbol, name}}) => {

    const addToWatch = () => {
        addCoinToWatch({id, symbol, name})
    }

    const renderIcon = () => {
        if (added) {
            return (
                <Icon
                    style={styles.icon}
                    name="check"
                    size={20}
                    color="#5ac6dd"
                >
                    <Text style={styles.title}>Watching {name}</Text>
                </Icon>
            )
        } else {
            return (
                <Button onPress={addToWatch}>
                    <Icon
                        style={styles.icon}
                        name="plus-circle"
                        size={20}
                        color="#5ac6dd"
                    ><Text style={styles.title}> Watch {name}</Text></Icon>
                </Button>
            )
        }
    }

    return (
        <View>
            {renderIcon()}
        </View>
    )

}

export default AddCoinToWatchList;

const styles = {
    icon: {
        textAlign: "center",
        marginTop: 10,
        padding: 10
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 25,
        padding: 100
    }
}