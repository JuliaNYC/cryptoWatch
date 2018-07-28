import React from "react";
import {View, Text} from "react-native";
import Button from "./Button";

export default class WatchedItem extends React.Component {
getCoin = () => {
    console.warn("calledd")
    this.props.getCoin(this.props.coin.id)

}
    render() {
        console.log("hhhhh", this.props.coin.coin, "--------------------->", this.props.coin)
        return (
            <View>
                <Button onPress={this.getCoin}>
               <Text>{this.props.coin.symbol}</Text>
                <Text>{this.props.coin.name}</Text>
                </Button>
                <View>
                </View>
            </View>
        )
    }
}