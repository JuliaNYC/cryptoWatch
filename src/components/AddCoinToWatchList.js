import React from "react";
import { View, Text, TextInput, TouchbleOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "./Button";

export default class AddCoinToWatchList extends React.Component {
    state = {
        added: false
    }
    addToWatch = () => {
        this.props.addCoinToWatch(this.props.symbol)
        this.setState({ added: true })
    }

    renderIcon = () => {
        if (this.state.added === false) {
            return <Icon
                name="plus-circle"
                size={30}
                color="#5ac6dd"

            />
        } else {
            return <Icon
                name="check"
                size={30}
                color="#5ac6dd"

            />
        }
    }
    render () {
        return (
            <View>
                <Button onPress={this.addToWatch}>
                    {this.renderIcon()}
                </Button>
            </View>
        )
    }
}
