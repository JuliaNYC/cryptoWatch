import React from "react";
import { View } from "react-native";
import Chart from "./Chart";
import Info from "./Info";
import AddCoinToWatchList from "../../AddCoinToWatchList";

const DetailViewWrapper = ({coin}) => {
    const {circulating_supply, total_supply, max_supply, quotes: {USD: {percent_change_1h, percent_change_24h, percent_change_7d}}} = coin;
        return <View>
            <AddCoinToWatchList />
            <Info
                availableSupply={circulating_supply}
                maxSupply={max_supply}
                totalSupply={total_supply}
            />
            <Chart
                oneHrs={percent_change_1h}
                oneDay={percent_change_24h}
                sevenDays={percent_change_7d}
            />
        </View>

}

export default DetailViewWrapper;

