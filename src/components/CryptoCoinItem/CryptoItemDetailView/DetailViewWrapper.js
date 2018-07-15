import React from "react";
import { View } from "react-native";
import Chart from "./Chart";
import CryptoCoinInfo from "./Info";

const DetailViewWrapper = ({cryptoCoin}) => {
    const {circulating_supply, total_supply, max_supply, quotes: {USD: {percent_change_1h, percent_change_24h, percent_change_7d}}} = cryptoCoin;
console.warn("?!?!?!?")
    // percent_change_1h, percent_change_24h, percent_change_7d, total_supply, max_supply, available_supply,
        return <View>
            <CryptoCoinInfo
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

