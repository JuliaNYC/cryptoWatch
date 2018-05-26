import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import CryptoItemDetail from "./CryptoItemDetail";
import CryptoIcon from "react-native-crypto-icons";
import {colors} from "../utils/Constants";

export default class CryptoItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showDetailView: false
        }
    }

    renderDetailView = () => {
        console.warn("renderDetailView called")
        this.setState({
            showDetailView: !this.state.showDetailView
        })
    }

   /* closeDetailView = () => {
        console.warn("closeDetailView called")
        this.setState({
            showDetailView: false
        })
    }*/

    render () {
        console.log("propsss", this.state.showDetailView)
        const color = colors[Math.floor(Math.random() * colors.length)];
/*
        const button = this.state.showDetailView === true ? (
            <Button
                onPress={this.renderDetailView}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        ) : (
            <Button
                onPress={this.closeDetailView}
                title="Close"
                color="green"
                accessibilityLabel="Close Detail View"
            />
        );*/

        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemWrapper}>
                    <CryptoIcon name={this.props.symbol.toLowerCase()} style={{fontSize: 45, color: color}}/>

                    <Text style={styles.itemSymbol}> {this.props.symbol} </Text>
                    <Text style={styles.itemName}>{this.props.name}</Text>
                    <Text style={styles.itemPrice}>$ {this.props.price}</Text>
                </View>
                <View style={styles.statisticsWrapper}>
                    <Text>24h:
                        <Text
                            style={this.props.percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus}> {this.props.percent_change_24h}
                            % </Text>
                    </Text>
                    <Text>7d:
                        <Text
                            style={this.props.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus}> {this.props.percent_change_7d}
                            % </Text>
                    </Text>
                </View>
                <Button
                    onPress={this.renderDetailView}
                    title={!this.state.showDetailView ? 'Learn more': 'close'}
                    color={!this.state.showDetailView ? 'green' : 'yellow' }
                />

                { this.state.showDetailView === true ?
                    <CryptoItemDetail
                        chartMeasurements={this.props}
                        showDetailView={this.state.showDetailView}/>
                    : null
                }

            </View>
        )
    }
}








const styles = StyleSheet.create ({
    itemContainer: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    itemWrapper: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    statisticsWrapper: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    itemName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },

    itemSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },

    itemPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    }
})
