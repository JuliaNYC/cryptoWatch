import React from "react";
import {
    View,
    Button
} from "react-native";

const Filters = ({fetchCoinData, resetState, resetPageToOne, setInitialSortParam}) => {

    return (
        <View>
            <Button
                title="Highest 24 Hrs % Change"
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'percent_change_24h')
                    resetPageToOne()
                    setInitialSortParam('percent_change_24h')
                }}
            />
            <Button
                title="Highest 24 Hrs Volume Change"
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'volume_24h')
                    resetPageToOne()
                    setInitialSortParam('volume_24h')
                }}
            />
            <Button
                title="Highest Rank"
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'rank')
                    resetPageToOne()
                }}
            />

        </View>
    )
}

export default Filters;