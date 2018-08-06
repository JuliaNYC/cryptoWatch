/*
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
import filterData from '../selectors';

class WatchCoinsListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchWatchedCoins()
    }

    getCoin = (id) => {
        console.warn("whyyyyyyyyyyyyyy called again fuck uuuuuu", id)
        this.props.fetchWatchedCoin(id)
    }

    keyExtractor = (item, index) => item.id.toString();

    renderItem = ({item}) => (
        <WatchedItem
            coinSummary={item}
            theCoin={item.id == this.props.coin.id ? this.props.coin: null}
            coinDetails={this.props.coin}
            fetchWatchedCoin={this.props.fetchWatchedCoin}
            getCoin={this.getCoin}
        />
    )

    render() {
        console.warn("one coin watch here", this.props.coin)
        return (
            <View style={styles.container}>
                <FlatList
                 /!*   data={this.props.coins}*!/
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
        allCoins: filterData(state.coins.data, state.filters),
        coins: _.map(_.values(state.watchList.coins), "coin"),
        coin: state.watchList.coin,
        isFetchingCoin: state.watchList.isFetchingCoin
    }

}


export default connect(mapStateToProps,
    {fetchWatchedCoins, fetchWatchedCoin})(WatchCoinsListContainer)

styles= {
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 25
    },
    title: {
        textAlign: "center"
    }
}*/


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
import filterData from '../selectors';

class WatchCoinsListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchWatchedCoins()
    }

    keyExtractor = (item, index) => item.id.toString();

    renderItem = ({item}) => (
       <WatchedItem
            coin={item}
        />
)

    render() {
        console.warn("coins", this.props.coins)
        return (
            <View style={styles.container}>
                {this.props.isFetchingCoins ?
                    <View>
                        <ActivityIndicator size="large" color="#c5c1c1"/>
                    </View>
                    : null}
                <FlatList
                    //hier hätte ich normalerweise die mit 'limitierten daten' übergeben
                   data={this.props.coins}
                  //  data={this.props.allCoins.filter(coin => this.props.coins.find(elem => (elem.id === coin.id)))}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

mapStateToProps = state => {
console.warn("mapStateToProps ", state.watchList)
    return {
        coins: _.map(_.values(state.watchList.coins), "coin"),
        isFetchingCoins: state.watchList.isFetchingCoins
    }

}


export default connect(mapStateToProps,
    {fetchWatchedCoins, fetchWatchedCoin})(WatchCoinsListContainer)

styles= {
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 25
    },
    title: {
        textAlign: "center"
    }
}





/*
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
import filterData from '../selectors';

class WatchCoinsListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchWatchedCoins()
    }

    getCoin = (id) => {
        console.warn("whyyyyyyyyyyyyyy called again fuck uuuuuu", id)
        this.props.fetchWatchedCoin(id)
    }

    keyExtractor = (item, index) => item.id.toString();

    renderItem = ({item}) => (
        <WatchedItem
            coinSummary={item}
            theCoin={item.id == this.props.coin.id ? this.props.coin: null}
            coinDetails={this.props.coin}
            fetchWatchedCoin={this.props.fetchWatchedCoin}
            getCoin={this.getCoin}
        />
    )

    render() {
        console.warn("one coin watch here", this.props.coin)
        return (
            <View style={styles.container}>
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
        allCoins: filterData(state.coins.data, state.filters),
        coins: _.map(_.values(state.watchList.coins), "coin"),
        coin: state.watchList.coin,
        isFetchingCoin: state.watchList.isFetchingCoin
    }

}


export default connect(mapStateToProps,
    {fetchWatchedCoins, fetchWatchedCoin})(WatchCoinsListContainer)

styles= {
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 25
    },
    title: {
        textAlign: "center"
    }
}*/
