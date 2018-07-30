import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Button from "./Button";

const Filters = ({fetchCoinData, resetState, resetPageToOne, setInitialSortParam}) => {
 const {container, button, title} = styles;
    return (
        <View style={container}>
            <Button
                buttonStyle={button}
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'percent_change_24h')
                    resetPageToOne()
                    setInitialSortParam('percent_change_24h')
                }}
            >
                <Text style={title}> 24 Hrs % </Text>
            </Button>
            <Button
                buttonStyle={button}
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'volume_24h')
                    resetPageToOne()
                    setInitialSortParam('volume_24h')
                }}
            >
                <Text style={title}>24 Hrs Volume %</Text>
            </Button>
            <Button
                buttonStyle={button}
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'rank')
                    resetPageToOne()
                }}
            >
                <Text style={title}> Highest Rank </Text>
            </Button>
        </View>
    )
}

export default Filters;

const styles = {
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25
    },
    button: {

        backgroundColor: '#f7f4f4',
        height: 30,
        width: 103
    },
    title: {
        fontSize: 12,
        color: "#848080"
    }

};