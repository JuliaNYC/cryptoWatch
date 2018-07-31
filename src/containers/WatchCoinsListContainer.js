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

    getCoin = (id) => {
        this.props.fetchWatchedCoin(id)
    }

    keyExtractor = (item, index) => item.id.toString();

    renderItem = ({item}) => {
       return <WatchedItem
            coin={item}


            //hier hätte ich einmal item übergeben und dann noch den jeweiligen coin, den man bekommt nachdem die getCoin function aufgerufen wurde und hier liegt das problem
         //   fetchWatchedCoin={this.props.fetchWatchedCoin}
         //   getCoin={this.getCoin}

        />
    }

    render() {
        console.warn("one coin watch here", this.props.allCoins, this.props.items, this.props.coins)
        return (
            <View style={styles.container}>
                <FlatList
                    //hier hätte ich normalerweise die mit 'limitierten daten' übergeben
                  // data={this.props.coins}
                    data={this.props.allCoins.filter(coin => this.props.coins.find(elem => (elem.id === coin.id)))}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        //allCoins: alle coins mit vollen daten
        allCoins: filterData(state.coins.data, state.filters),
        //coins: die vom user gespeicherten coins mit limitierten daten obj. - name, symbol, id
        coins: _.map(_.values(state.watchList.coins), "coin"),

        //coin: das wäre der jeweils einzelne coin den man nach api request per id mit vollen daten bekommt
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
}
