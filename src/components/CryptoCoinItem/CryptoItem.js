import React from "react";
import {View, Button, StyleSheet} from "react-native";

import CryptoCoinDetailView from "./CryptoCoinDetailView/CryptoCoinDetailView";
import CryptoItemSummary from "./CryptoItemSummary";
import Spinner from "react-native-loading-spinner-overlay";

export default class CryptoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDetailView: false
        }
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
                <Spinner
                    visible={this.state.loading}
                    textContent={"Loading..."}
                    animation="fade"
                />
            )
        }
        return (
            <Button
                onPress={this.renderDetailView}
                title={!this.state.showDetailView ? 'Learn more' : 'close'}
                color="#841584"
            />
        )

    }


    render() {
        const {itemContainer, button} = styles;

        return (
            <View >
                <CryptoItemSummary
                    cryptoCoin={this.props.cryptoCoin}
                />

                <View style={button}>
                    {this.renderButton()}
                </View>

                {this.state.showDetailView ?
                    <CryptoCoinDetailView
                        cryptoCoin={this.props.cryptoCoin}
                        showDetailView={this.state.showDetailView}/>
                    : null
                }

            </View>
        )
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    button: {
        backgroundColor: 'pink'
    }
})



