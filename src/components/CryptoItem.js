import React from "react";
import { View, Text, StyleSheet } from "react-native";


const CryptoItem = (props) => {

    return (
        <View>
            <View>

                <Text > {props.symbol} </Text>
                <Text >{props.name}</Text>
                <Text>$ {props.price}</Text>
            </View>
            <View >
                <Text>24h:
                    <Text> {props.percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text> {props.percent_change_7d} % </Text>
                </Text>
            </View>
        </View>
    )
}

export default CryptoItem;