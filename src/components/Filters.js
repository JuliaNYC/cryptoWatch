import React from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Button from "./Button";

const Filters = ({fetchCoinData, resetState, resetPageToOne, setInitialSortParam}) => {

    return (
        <View buttonStyle={styles.container}>
            <Button
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

/*
const styles = StyleSheet.create({
    container: {
        display: "flex",
      /!*  marginBottom: 140,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20*!/
    },
    button: {
        backgroundColor: 'orange',
        color: "green"
    }
})
*/
const styles = StyleSheet.create({
        container:
            {
                flexDirection: "row"
            },
    button: {
        backgroundColor: 'orange',
        fontSize: 10
    }

    });