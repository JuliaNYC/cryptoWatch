import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Button from "./Button";

const Filters = ({fetchCoinData, resetState, resetPageToOne, setInitialSortParam}) => {

    return (
        <View style={styles.container}>
            <Button
                buttonStyle={styles.button}
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'percent_change_24h')
                    resetPageToOne()
                    setInitialSortParam('percent_change_24h')
                }}
                >
                24 Hrs %
            </Button>
            <Button
                buttonStyle={styles.button}
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'volume_24h')
                    resetPageToOne()
                    setInitialSortParam('volume_24h')
                }}
            >
                24 Hrs Volume %
            </Button>
            <Button
                buttonStyle={styles.button}
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'rank')
                    resetPageToOne()
                }}
            >
                Highest Rank
            </Button>
        </View>
    )
}

export default Filters;

const styles = {
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15
            },
    button: {

        backgroundColor: '#5ac6dd',
        height: 30,
        width: 99
    }

    };