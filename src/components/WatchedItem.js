import React from "react";
import {View, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
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
        const {name, symbol} = this.props.coin;
        return (
            <View>
                <Text>{symbol}</Text>
                <Text>{name}</Text>
                <Button onPress={this.getCoin}>
                    <Icon
                        name={this.state.showDetailView ? "times-circle" : "info-circle"}
                        size={30}
                        color="#030F26"
                    />
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