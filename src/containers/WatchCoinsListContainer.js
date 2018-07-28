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

    componentDidMount () {
        this.props.fetchWatchedCoins()
       // this.props.fetchWatchedCoin(id)
    }

   /* getCoin = (id) => {
        this.props.fetchWatchedCoin(id)
    }*/

    getCoin = (id) => {
        console.warn("getCoin", id)
        this.props.fetchWatchedCoin(id)
    }

    keyExtractor = (item, index) => item.uid;

    renderItem = ({item}) => (
        <WatchedItem
            id={item.uid}
            coin={item}
            fetchWatchedCoin={this.props.fetchWatchedCoin}
            getCoin={this.getCoin}
        />
    )

    render() {
        console.warn(" watchList from reduer", this.props.watchList, "coin!!!!!!!!!!", this.props.coin)
        return (
    <View>
        <Text>Watch Coins</Text>
        <FlatList
            //data={this.props.watchList}
            data={this.props.list}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
        />
    </View>
        )
    }
}

mapStateToProps = state => {
   /* const watchList = _.map(state.watchList.coins, (val, uid) => {
        console.warn("hereeee", val, uid, "test--->", {...val, uid})
        return {...val, uid}
    })*/
    const list = _.map(_.values(state.watchList.coins), "coin")
    const watchList = _.map(state.watchList.coins, (val, uid) => {
        console.warn("hereeee", val, uid, "test--->", {...val, uid})
        return {...val, uid}
    })
return {
        watchList,
    coin: state.watchList.coin,
    list
    }

}


export default connect(mapStateToProps,
    {fetchWatchedCoins, fetchWatchedCoin})(WatchCoinsListContainer)