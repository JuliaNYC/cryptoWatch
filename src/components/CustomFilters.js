import React from "react";
import {
    View,
    Button
} from "react-native";

const CustomFilters = ({sortBy, loadMoreData}) => {
    return (
        <View>
             <Button
                title="Lowest Price"
                onPress={() => {
                    sortBy('sortByLowestPrice')
                    loadMoreData()
                }}
            />
            <Button
                title="Highest Price"
                onPress={() => {
                    sortBy('sortByHighestPrice')

                }}
            />

            <Button
                title="Lowest Rank"
                onPress={() => sortBy('sortByLowestRank')}
            />
            <Button
                title="Highest Rank"
                onPress={() => sortBy('sortByHighestRank')}
            />


        </View>
    )
}

export default CustomFilters;