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
        const {container, symbolStyle, nameStyle, iconStyle} = styles;
        return (
            <View style={container}>
                <Text style={symbolStyle}> {symbol} </Text>
                <Text style={nameStyle}> {name} </Text>
                <Button style={iconStyle} onPress={this.getCoin}>
                    <Icon
                        name={this.state.showDetailView ? "times-circle" : "info-circle"}
                        size={25}
                        color="#5ac6dd"
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

const styles = {
    container: {
        flexDirection: "row",
       justifyContent: "space-around",
        backgroundColor: "red",
        marginTop: 3,
        borderBottomColor: "#f7f4f4",
        borderWidth: 1
    },
    symbolStyle: {
       // flex: 1
    },
    nameStyle: {
       // flex: 2
    },
    iconStyle: {
      //  flex: 1
    }
}