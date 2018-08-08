import React from "react";
import {
    ActivityIndicator,
    ScrollView,
    Text,
    View
} from "react-native";
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import {fetchWatchedCoin, deleteWatchedCoin} from "../actions/WatchCoinsListAction";
import Button from "./Button";
import DetailViewWrapper from "./CoinItemWizard/CoinItemDetailView/Wrapper";
import CoinItemSummary from "./CoinItemWizard/CoinItemSummary";

class WatchedItemDetailView extends React.Component {
    state = {
        showDetailView: false
    }

    componentDidMount() {
        this.props.fetchWatchedCoin(this.props.id)
    }

    deleteCoin = () => {
        this.props.deleteWatchedCoin(this.props.uid)
    }

    render() {
        const {container, wrapper, summaryWrapper, detailsViewWrapper, deleteWrapper, deleteTitle} = styles;
        const {coin} = this.props;
        return (

            <View style={container}>

                {this.props.isFetchingCoin === false ?
                    <ScrollView>
                    <View style={wrapper}>
                        <View style={detailsViewWrapper}>
                            <View style={summaryWrapper}>
                                <CoinItemSummary coin={coin}/>
                            </View>
                            <View>
                                <DetailViewWrapper coin={coin}/>
                            </View>
<View style={deleteWrapper}>
                                <Button onPress={this.deleteCoin}>
                                    <Icon
                                        name="trash"
                                        size={25}
                                        color="#5ac6dd"
                                    />
                                    <Text style={deleteTitle}>Delete Coin from Watch List</Text>
                                </Button>
</View>
                        </View>

                    </View>
                    </ScrollView>
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
        coin: state.watchList.coin,
        isFetchingCoin: state.watchList.isFetchingCoin
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
       marginBottom: 50
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
    },
    deleteWrapper: {
        marginBottom: 50
    },
    deleteTitle: {
        color: "black"
    }
}



