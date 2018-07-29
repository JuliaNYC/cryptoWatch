import React from "react";
import { View } from "react-native";
import Chart from "./Chart";
import Info from "./Info";
import AddCoinToWatchList from "../../AddCoinToWatchList";

const DetailViewWrapper = ({coin, addCoinToWatch,  added}) => {
    const {circulating_supply, total_supply, max_supply, quotes: {USD: {percent_change_1h, percent_change_24h, percent_change_7d}}} = coin;

    return <View style={styles.container}>
            <AddCoinToWatchList
                coin={coin}
                addCoinToWatch={addCoinToWatch}
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

const styles = {
    container: {
       backgroundColor: "#f7f4f4",
        marginBottom: 30
    }
}