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

    keyExtractor = (item, index) => item.coin.id.toString();

    renderItem = ({item}) => (
        <WatchedItem
            coin={item.coin}
            uid={item.uid}
            test={this.props.test}
        />
    )

    render() {
        return (
            <View style={styles.container}>
                {this.props.isFetchingCoins ?
                    <View>
                        <ActivityIndicator size="large" color="#c5c1c1"/>
                    </View>
                    : null}
                {this.props.coins.length > 0 ?
                    <FlatList
                        data={this.props.coins}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    /> : <Text>You are currently not wathing any coins!</Text>
                }
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        coins: _.map(state.watchList.coins, (val, uid) => ({...val, uid})),
        isFetchingCoins: state.watchList.isFetchingCoins
    }

}

export default connect(mapStateToProps,
    {fetchWatchedCoins, fetchWatchedCoin})(WatchCoinsListContainer)

styles = {
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 25
    },
    title: {
        textAlign: "center"
    }
}