import React from "react";
import {View, Text} from "react-native";
import Button from "./Button";


export default class WatchedItemDetailView extends React.Component {

    render() {
       const {name} = this.props.coin;
        return (
            <View style={{backgroundColor: "red"}}>

                    <Text>{name}</Text>


            </View>
        )
    }
}