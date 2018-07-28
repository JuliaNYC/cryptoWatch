import React from "react";
import {View, Text} from "react-native";

export default class WatchedItem extends React.Component {
componentDidMount () {
    this.props.getCoin(this.props.coin.coin)
   // this.props.fetchWatchedCoin(this.props.coin.coin)
}
    render() {
        console.log("hhhhh", this.props.coin.coin)
        return (
            <View>
               <Text>{this.props.coin.coin.name}</Text>

            </View>
        )
    }
}