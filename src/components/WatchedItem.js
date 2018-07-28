import React from "react";
import {View, Text} from "react-native";
import Button from "./Button";
import WatchedItemDetailView from "./WatchedItemDetailView";

export default class WatchedItem extends React.Component {
    state = {
        showDetailView: false
    }

    getCoin = () => {
        this.props.getCoin(this.props.coin.id)
        this.setState({
            showDetailView: !this.state.showDetailView
        })
    }

    render() {
        return (
            <View>
                <Button onPress={this.getCoin}>
                    <Text>{this.props.coin.symbol}</Text>
                    <Text>{this.props.coin.name}</Text>
                </Button>
                <View>
                    {this.state.showDetailView ?
                        <WatchedItemDetailView coin={this.props.coin}/>
                        : null}
                </View>
            </View>
        )
    }
}