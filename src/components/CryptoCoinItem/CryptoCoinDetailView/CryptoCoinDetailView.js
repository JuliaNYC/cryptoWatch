import React from "react";
import { View } from "react-native";
import Chart from "./Chart";
import CryptoCoinInfo from "./Info";

const CryptoCoinDetailView = ({cryptoCoin}) => {

    const {percent_change_1h, percent_change_24h, percent_change_7d, total_supply, max_supply, available_supply} = cryptoCoin;

        return <View>
            <CryptoCoinInfo
                availableSupply={available_supply}
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

export default CryptoCoinDetailView;

