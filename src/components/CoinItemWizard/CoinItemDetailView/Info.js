import React from "react";
import {
    Text,
    View
} from "react-native";

const CryptoCoinInfo = ({availableSupply, maxSupply, totalSupply}) => {
    return (
        <View>
            <Text style={styles.title}> DETAILS</Text>

            <View style={styles.infoWrapper}>
                <Text style={styles.label}> Available Supply: </Text>
                <Text> {availableSupply} </Text>
            </View>

            <View style={styles.infoWrapper}>
                <Text style={styles.label}> Max. Supply: </Text>
                <Text>{maxSupply}</Text>
            </View>

            <View style={styles.infoWrapper}>
                <Text style={styles.label}> Total Supply: </Text>
                <Text>{totalSupply}</Text>
            </View>
        </View>
    )
}

export default CryptoCoinInfo;

const styles = {
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
    label: {
        fontWeight: "bold"
    }
}