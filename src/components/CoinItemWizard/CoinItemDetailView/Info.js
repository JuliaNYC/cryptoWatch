import React from "react";
import {View, Text, StyleSheet} from "react-native";

const CryptoCoinInfo = (props) => {

    return (
        <View style={styles.infoContainer}>
            <Text style={styles.title}> DETAILS</Text>

            <View style={styles.infoWrapper}>
                <Text style={styles.label}> Available Supply: </Text>
                <Text style={styles.info}> {props.availableSupply} </Text>
            </View>

            <View style={styles.infoWrapper}>
                <Text style={styles.label}> Max. Supply: </Text>
                <Text style={styles.info}>{props.maxSupply}</Text>
            </View>

            <View style={styles.infoWrapper}>
                <Text style={styles.label}> Total Supply: </Text>
                <Text style={styles.info}>{props.totalSupply}</Text>
            </View>
        </View>
    )
}

export default CryptoCoinInfo;

const styles = {
    infoContainer: {},

    title: {
        textAlign: 'center',
        padding: 10,
        fontWeight: "bold",
    },
    infoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#ece8e8",
        marginTop: 3
    },

    info: {},
    label: {
        fontWeight: "bold"
    }
}