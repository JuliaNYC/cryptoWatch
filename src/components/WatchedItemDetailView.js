import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "./Button";
import DetailViewWrapper from "./CoinItemWizard/CoinItemDetailView/Wrapper";
import CoinItemSummary from "./CoinItemWizard/CoinItemSummary";

import {fetchWatchedCoin, deleteWatchedCoin} from "../actions/WatchCoinsListAction";


 class WatchedItemDetailView extends React.Component {
    state = {
        showDetailView: false
    }

    componentDidMount () {
        this.props.fetchWatchedCoin(this.props.id)
    }

    deleteCoin = () => {
          this.props.deleteWatchedCoin(this.props.uid)
    }

    render() {
        const {container, summaryWrapper, detailsViewWrapper} = styles;
        return (

            <View style={container}>

                <Button  onPress={this.deleteCoin}>
                    <Icon
                        name="info-circle"
                        size={25}
                        color="#5ac6dd"
                    />
                </Button>

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
    {fetchWatchedCoin, deleteWatchedCoin})(WatchedItemDetailView)


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



