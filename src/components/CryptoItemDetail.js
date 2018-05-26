import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Chart from "./Chart";

const CryptoItemDetail = (props) => {
    console.warn("details", props)
   /* if (props.showDetailView == true) {*/
        return <View>
            <Chart
                oneHrs={props.chartMeasurements.percent_change_1h}
                oneDay={props.chartMeasurements.percent_change_24h}
                sevenDays={props.chartMeasurements.percent_change_7d}
            />
        </View>
  /*  }
    return null;*/
}

export default CryptoItemDetail;


{/* <View>
        <Chart
            oneHrs={props.chartMeasurements.percent_change_1h}
            oneDay={props.chartMeasurements.percent_change_24h}
            sevenDays={props.chartMeasurements.percent_change_7d}
        />
        </View>*/}