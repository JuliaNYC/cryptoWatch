import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Chart from "./Chart";
import CryptoIcon from "react-native-crypto-icons";
import {colors} from "../utils/Constants";

const CryptoItem = (props) => {
    console.log("propsss", props)
    const color = colors[Math.floor(Math.random()*colors.length)];
    return (
        <View style = {styles.itemContainer}>
            <View style = {styles.itemWrapper}>
                <CryptoIcon name={props.symbol.toLowerCase()} style={{ fontSize: 45, color: color }} />

                <Text style = {styles.itemSymbol}> {props.symbol} </Text>
                <Text style = {styles.itemName}>{props.name}</Text>
                <Text style = {styles.itemPrice}>$ {props.price}</Text>
            </View>
            <View style = {styles.statisticsWrapper}>
                <Text>24h:
                    <Text style={props.percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {props.percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text style={props.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {props.percent_change_7d} % </Text>
                </Text>
            </View>
            <Chart
                oneHrs={props.percent_change_1h}
                oneDay={props.percent_change_24h}
                sevenDays={props.percent_change_7d}
            />
        </View>
    )
}

export default CryptoItem;

const styles = StyleSheet.create ({
    itemContainer: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    itemWrapper: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    statisticsWrapper: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    itemName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },

    itemSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },

    itemPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    }
})
