import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "../Button";
import CoinItemSummary from "./CoinItemSummary";
import DetailViewWrapper from "./CoinItemDetailView/Wrapper";

export default class CoinItem extends React.Component {

    state = {
        showDetailView: false
    }

    renderDetailView = () => {
        this.setState({
            showDetailView: !this.state.showDetailView,
            loading: false
        })
    }

    renderButton = () => {
        if (this.state.loading) {
            return (
                <View>
                    <Text>Loading...</Text>
                    <ActivityIndicator size="large" color="#c5c1c1"/>
                </View>
            )
        }
        return (
            <Button
                onPress={this.renderDetailView}
                buttonStyle={styles.button}
            >
                <Icon
                    name={this.state.showDetailView ? "times-circle" : "info-circle"}
                    size={30}
                    color="white"
                />
            </Button>
        )
    }

    render() {
        const {itemContainer, itemSummaryWrapper, button} = styles;
        return (
            <View styles={itemContainer}>
                <View style={itemSummaryWrapper}>
                    <CoinItemSummary
                        coin={this.props.coin}
                    />
                    <View style={button}>
                        {this.renderButton()}
                    </View>
                </View>
                {this.state.showDetailView ?
                    <DetailViewWrapper
                        addCoinToWatch={this.props.addCoinToWatch}
                        added={this.props.added}
                        coin={this.props.coin}
                        showDetailView={this.state.showDetailView}
                    />
                    : null
                }
            </View>
        )
    }
}

const styles = {
    itemContainer: {
        display: "flex",
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20,

    },
    itemSummaryWrapper: {
        backgroundColor: "#f7f4f4",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#ece8e8",
        height: 30
    }
}