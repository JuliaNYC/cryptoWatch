import React from "react";
import {View, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "./Button";
import DetailViewWrapper from "./CoinItemWizard/CoinItemDetailView/Wrapper";
import CoinItemSummary from "./CoinItemWizard/CoinItemSummary";

export default class WatchedItem extends React.Component {
    state = {
        showDetailView: false
    }

    //hier wäre die action aus WatchCoinsListContainer aufgerufen worden (einzelner coin per ID requested)
    /*getCoin = () => {
        this.props.getCoin(this.props.coinSummary.id)
        this.setState({
            showDetailView: !this.state.showDetailView
        })
    }*/

    setShowDetailView = () => {
        this.setState({
            showDetailView: !this.state.showDetailView
        })
    }

    render() {
        const {coin: {name, symbol}} = this.props;
        const {container, wrapper, summaryWrapper, detailsViewWrapper, symbolStyle, nameStyle, iconStyle} = styles;

        return (

            <View style={container}>
                <View style={wrapper}>
                    <Text style={symbolStyle}> {symbol} </Text>
                    <Text style={nameStyle}> {name} </Text>
                   {/* hier wäre der aufruf der getCoin function*/}
                    {/*<Button style={iconStyle} onPress={this.getCoin}>*/}
                    <Button style={iconStyle} onPress={this.setShowDetailView}>
                        <Icon
                            name={this.state.showDetailView ? "times-circle" : "info-circle"}
                            size={25}
                            color="#5ac6dd"
                        />
                    </Button>
                </View>

                <View>
                    {this.state.showDetailView ?
                        <View style={detailsViewWrapper}>
                            <View style={summaryWrapper}>
                                <CoinItemSummary coin={this.props.coin}/>
                            </View>
                            <View>
                                <DetailViewWrapper coin={this.props.coin}/>
                            </View>
                        </View>
                        : null}
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        display: "flex",
        width: "100%",
        marginTop: 3,
        backgroundColor: "#f7f4f4",
    },
    wrapper: {
        flexDirection: "row"
    },
    summaryWrapper: {
        marginLeft: 10
    },
    detailsViewWrapper: {
        display: "flex",
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        marginTop: 20,
        marginLeft: -7
    },
    symbolStyle: {
        flexGrow: 1
    },
    nameStyle: {
        flexGrow: 2
    },
    iconStyle: {
        flexGrow: 1
    }
}












