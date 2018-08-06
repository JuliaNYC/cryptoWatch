import React from "react";
import {View, Text, ActivityIndicator} from "react-native";
import DetailViewWrapper from "./CoinItemWizard/CoinItemDetailView/Wrapper";
import CoinItemSummary from "./CoinItemWizard/CoinItemSummary";

import {fetchWatchedCoin} from "../actions/WatchCoinsListAction";
import {connect} from "react-redux";

 class WatchedItemDetailView extends React.Component {
    state = {
        showDetailView: false
    }

    componentDidMount () {
        this.props.fetchWatchedCoin(this.props.id)
    }

    render() {
        const {container, summaryWrapper, detailsViewWrapper} = styles;
        return (

            <View style={container}>


                {this.props.isFetchingCoin === false ?

                    <View style={detailsViewWrapper}>
                        <View style={summaryWrapper}>
                            <CoinItemSummary coin={this.props.coin}/>
                        </View>
                        <View>
                            <DetailViewWrapper coin={this.props.coin}/>
                        </View>
                    </View>

                     :
                    <View>
                        <ActivityIndicator size="large" color="#c5c1c1"/>
                    </View>
                }

            </View>
        )
    }
}


mapStateToProps = state => {
    return {
        coin: state.watchedCoin.coin,
        isFetchingCoin: state.watchedCoin.isFetchingCoin
    }

}


export default connect(mapStateToProps,
    {fetchWatchedCoin})(WatchedItemDetailView)


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
        marginLeft: 5
    },
    detailsViewWrapper: {
        display: "flex",
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        marginTop: 20,
        marginLeft: 7

    }
}



