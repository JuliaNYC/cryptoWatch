import React from "react";
import {View, Text} from "react-native";

export default class WatchedItem extends React.Component {

    render() {
        console.log("hhhhh", this.props.coin.coin, "--------------------->", this.props.coin)
        return (
            <View>
               <Text>{this.props.coin.name}</Text>

            </View>
        )
    }
}