import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Chart from "./Chart";
import CryptoCoinInfo from "./Info";

const CryptoCoinDetailView = ({infos}) => {
    console.warn("infos", infos)
    const {percent_change_1h, percent_change_24h, percent_change_7d} = infos;

        return <View>
            <CryptoCoinInfo

            />
            <Chart
                oneHrs={percent_change_1h}
                oneDay={percent_change_24h}
                sevenDays={percent_change_7d}
            />
        </View>

}

export default CryptoCoinDetailView;

