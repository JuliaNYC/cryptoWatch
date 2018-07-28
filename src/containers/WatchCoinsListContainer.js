import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
    Button,
    FlatList,
    ActivityIndicator,
    StyleSheet
} from "react-native";
import _ from "lodash";
import {fetchWatchedCoins, fetchWatchedCoin} from "../actions/WatchCoinsListAction";
import WatchedItem from "../components/WatchedItem";

class WatchCoinsListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchWatchedCoins()
    }

    getCoin = (id) => {
        this.props.fetchWatchedCoin(id)
    }

    keyExtractor = (item, index) => item.id.toString();

    renderItem = ({item}) => (
        <WatchedItem
            coin={item}
            fetchWatchedCoin={this.props.fetchWatchedCoin}
            getCoin={this.getCoin}
        />
    )

    render() {
        return (
            <View>
                <Text>Watch Coins</Text>
                <FlatList
                    data={this.props.coins}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        coins: _.map(_.values(state.watchList.coins), "coin"),
        isFetchingCoin: state.watchList.isFetchingCoin
    }

}


export default connect(mapStateToProps,
    {fetchWatchedCoins, fetchWatchedCoin})(WatchCoinsListContainer)
