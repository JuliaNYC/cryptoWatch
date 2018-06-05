import React from "react";
import {
    View,
    Button
} from "react-native";

const Filters = ({sortBy, pageCounter, fetchCoinData}) => {
    return (
        <View>
            <Button
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
                title="ID Filter"
                onPress={() => fetchCoinData(pageCounter, 'id')}
            />
          {/*  <Button
                title="Highest Rank"
                onPress={() => fetchCoinData(pageCounter, 'rank')}
            />*/}
        </View>
    )
}

export default Filters;