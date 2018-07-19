import React from "react";
import {View, Text, StyleSheet} from "react-native";
import CryptoIcon from "react-native-crypto-icons";
import {colors} from "../../utils/Constants";

const CoinItemSummary = ({coin}) => {
    const {name, symbol, quotes: {USD: {price, percent_change_24h, percent_change_7d}}} = coin;
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <View>
            <View style={styles.itemWrapper}>
                <CryptoIcon name={symbol.toLowerCase()} style={{fontSize: 45, color: color}}/>

                <Text style={styles.itemSymbol}> {symbol} </Text>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.itemPrice}>$ {price}</Text>
            </View>
            <View style={styles.statisticsWrapper}>
                <Text>24h:
                    <Text
                        style={percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus}> {percent_change_24h}
                        % </Text>
                </Text>
                <Text>7d:
                    <Text
                        style={percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus}> {percent_change_7d}
                        % </Text>
                </Text>
            </View>
        </View>
    )

}

export default CoinItemSummary;


const styles = StyleSheet.create({

    itemWrapper: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 5
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
