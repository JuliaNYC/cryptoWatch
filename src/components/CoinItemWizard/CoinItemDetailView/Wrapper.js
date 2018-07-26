import React from "react";
import { View } from "react-native";
import Chart from "./Chart";
import Info from "./Info";
import AddCoinToWatchList from "../../AddCoinToWatchList";

const DetailViewWrapper = ({coin, addCoinToWatch,  added}) => {
    const {symbol, circulating_supply, total_supply, max_supply, quotes: {USD: {percent_change_1h, percent_change_24h, percent_change_7d}}} = coin;
        return <View>
            <AddCoinToWatchList
                symbol={symbol}
                addCoinToWatch={addCoinToWatch}
               // added={watchList.includes(symbol)}
                added={added}
            />
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

