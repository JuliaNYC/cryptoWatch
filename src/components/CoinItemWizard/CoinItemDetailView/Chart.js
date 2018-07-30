import React from "react";
import {View} from "react-native";
import {VictoryBar, VictoryChart, VictoryTheme} from "victory-native";

export default class Chart extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <VictoryChart
                    domainPadding={{x: 33}}
                    theme={VictoryTheme.material}
                >
                    <VictoryBar
                        barRatio={0.9}
                        style={{
                            data: {fill: "#5ac6dd"}
                        }}
                        data={[{
                            x: `${this.props.oneHrs}% in 1 Hr`,
                            y: this.props.oneHrs
                        }, {
                            x: `${this.props.oneDay}% in 24 Hrs`,
                            y: this.props.oneDay
                        }, {x: `${this.props.sevenDays}% in 7 Days`, y: this.props.sevenDays}]}
                    />
                </VictoryChart>
            </View>
        );
    }
}

const styles = {
    container: {
        marginLeft: -7
    }
};