import React from "react";
import {View, Text, TextInput, TouchbleOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "./Button";

const AddCoinToWatchList = ({ addCoinToWatch, added, coin: {id, symbol, name}}) => {

  const addToWatch = () => {
     //  addCoinToWatch(id)
      addCoinToWatch({id, symbol, name})
    }

    const renderIcon = () => {
            if (added) {
                return <Icon
                    name="check"
                    size={30}
                    color="#5ac6dd"

                />
            } else {
                return <Icon
                    name="plus-circle"
                    size={30}
                    color="#5ac6dd"

                />
            }
    }

        return (
            <View>
                <Button onPress={addToWatch}>
                    {renderIcon()}
                </Button>
            </View>
        )

}

export default AddCoinToWatchList;