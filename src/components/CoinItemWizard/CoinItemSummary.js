import React from "react";
import {View, Text, StyleSheet} from "react-native";
import CryptoIcon from "react-native-crypto-icons";
import {colors} from "../../utils/Constants";

const CoinItemSummary = ({coin}) => {
    const {name, symbol, quotes: {USD: {price, percent_change_24h, percent_change_7d}}} = coin;
    const setIconColor = () => {
        const symbo = symbol.split("")[0];
        let color;
        switch (symbo) {
            case (symbo.match(/[a-d]/i) || {}).input:
                color = colors[0];
                break;
            case (symbo.match(/[e-h]/i) || {}).input:
                color= colors[1];
                break;
            case (symbo.match(/[j-m]/i) || {}).input:
                color= colors[2];
                break;
            case (symbo.match(/[n-q]/i) || {}).input:
                color= colors[3];
                break;
            case (symbo.match(/[r-u]/i) || {}).input:
                color= colors[4];
                break;
            case (symbo.match(/[v-z]/i) || {}).input:
                color= colors[5];
                break;
        }
        return color;

    }

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemWrapper}>
                <CryptoIcon name={symbol.toLowerCase()} style={{fontSize: 45, color: setIconColor()}}/>

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
    itemContainer: {
       // backgroundColor: "red"
    },
    itemWrapper: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15,

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
        color: "#76DB12",
        fontWeight: "bold",
        marginLeft: 5
    }
})
