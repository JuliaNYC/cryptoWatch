import React from "react";
import {
    View,
    Button
} from "react-native";

const Filters = ({sortBy,pageCounter, fetchCoinData, resetState, resetPageToOne,  setInitialFilter}) => {
    console.warn("filters--->", pageCounter)
    return (
        <View>
           {/* <Button
                title="Lowest Price"
                onPress={() => sortBy('sortByLowestPrice')}
            />
            <Button
                title="Highest Price"
                onPress={() => sortBy('sortByHighestPrice')}
            />

            <Button
                title="Lowest Rank"
                onPress={() => sortBy('sortByLowestRank')}
            />
            <Button
                title="Highest Rank"
                onPress={() => sortBy('sortByHighestRank')}
            />
            <Button
                title="VULUME FILTER"
                onPress={() => {
                   // const page = pageCounter === 1 ? 0 :pageCounter
                    fetchCoinData(page, 'volume_24h')
                }}
            />*/}
            <Button
                title="Highest 24 Hrs % Change"
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'percent_change_24h')
                    resetPageToOne()
                    setInitialFilter('percent_change_24h')
                }}
            />
            <Button
                title="Highest 24 Hrs Volume Change"
                onPress={() => {
                    resetState()
                    fetchCoinData(0, 'volume_24h')
                    resetPageToOne()
                    setInitialFilter('volume_24h')
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