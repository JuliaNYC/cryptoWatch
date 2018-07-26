import React from "react";
import {View, StyleSheet} from "react-native";
import Button from "../Button";
import DetailViewWrapper from "./CoinItemDetailView/Wrapper";
import CoinItemSummary from "./CoinItemSummary";
import Spinner from "react-native-loading-spinner-overlay";

export default class CoinItem extends React.Component {

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
                buttonStyle={styles.button}
            >
                {!this.state.showDetailView ? 'MORE' : 'CLOSE'}
            </Button>
        )

    }


    render() {
        const {itemContainer, button} = styles;

        return (
            <View styles={itemContainer}>
                <CoinItemSummary
                    coin={this.props.coin}
                />

                <View style={button}>
                    {this.renderButton()}
                </View>

                {this.state.showDetailView ?
                    <DetailViewWrapper
                        addCoinToWatch={this.props.addCoinToWatch}
                       // watchList={this.props.watchList}
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


const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        marginBottom: 140,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    button: {
        backgroundColor: '#030F26',
        marginTop: 10,
        marginBottom: 30,
        height: 20
    }
})



