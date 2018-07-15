import React from "react";
import { StyleSheet, View } from "react-native";
import {VictoryChart, VictoryBar, VictoryLabel } from "victory-native";

export default class Chart extends React.Component {
    render() {
        return (
        <View>
            <VictoryChart

                style={{
                    parent: {
                        width: "60%",
                    }
                }}
                domainPadding={100}
            >
                <VictoryBar
                    style={{ data: { fill: "orange" }, labels: {color: "orange"} }}
                    labels={(data) => `${data.y} %`}
                    labelComponent={<VictoryLabel angle={20} dy={(data)=> data.x>0 ? 20 : 20}/>}
                    data={[{x: "1 Hour", y: this.props.oneHrs}, {x: "24 Hours", y: this.props.oneDay}, {x: "7 Days", y: this.props.sevenDays}]}
                />
            </VictoryChart>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
       /* alignItems: "center",*/
        backgroundColor: "#f5fcff"
    }
});