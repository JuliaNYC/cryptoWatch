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
import {fetchWatchedCoins} from "../actions/WatchCoinsListAction";
import WatchedItem from "../components/WatchedItem";

class WatchCoinsListContainer extends React.Component {

    componentDidMount () {
        this.props.fetchWatchedCoins()
    }
    keyExtractor = (item, index) => item.uid;

    renderItem = ({item}) => (
        <WatchedItem
            id={item.uid}
            coin={item}
        />
    )

    render() {
        console.warn(" watchList from reduer", this.props.watchList)
        return (
    <View>
        <Text>Watch Coins</Text>
        <FlatList
            data={this.props.watchList}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
        />
    </View>
        )
    }
}

mapStateToProps = state => {
console.warn("mapstate coins", state.watchList)
  /*  const watchList = Object.entries(state.watchList).forEach(([ uid, val]) => {
    console.warn("hereeee", val, uid, "test--->", {...val, uid})
    return {...val, uid}
})*/
    const watchList = _.map(state.watchList, (val, uid) => {
        console.warn("hereeee", val, uid, "test--->", {...val, uid})
        return {...val, uid}
    })
return { watchList }
   /* return {
        watchList: state.watchList

    }*/
}


export default connect(mapStateToProps,
    {fetchWatchedCoins})(WatchCoinsListContainer)
