import React from "react";
import {
    View,
    Text
} from "react-native";
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "./Button";

const WatchedItem = ({ uid, coin: {name, symbol, id}}) => {
   const showCoinInfo = () => {

        Actions.watchedCoin({id: id, uid: uid})
    }


        const {container, wrapper, symbolStyle, nameStyle, iconStyle} = styles;

        return (

            <View style={container}>
                <View style={wrapper}>
                    <Text style={symbolStyle}> {symbol} </Text>
                    <Text style={nameStyle}> {name} </Text>

                    <Button style={iconStyle} onPress={showCoinInfo}>
                        <Icon
                            name="info-circle"
                            size={25}
                            color="#5ac6dd"
                        />
                    </Button>
                </View>
            </View>
        )

}

export default WatchedItem;

const styles = {
    container: {
        display: "flex",
        width: "100%",
        marginTop: 3,
        backgroundColor: "#f7f4f4",
    },
    wrapper: {
        flexDirection: "row"
    },
    symbolStyle: {
        flexGrow: 1
    },
    nameStyle: {
        flexGrow: 2
    },
    iconStyle: {
        flexGrow: 1
    }
}










