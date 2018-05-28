import React from "react";
import {connect} from "react-redux";
import { View, Button, ScrollView} from "react-native";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import {fetchCoinData} from "../actions/FetchCoinDataAction";
import {searchCoins, sortBy} from "../actions/FilterDataAction";

import Spinner from "react-native-loading-spinner-overlay";
import { SearchBar} from 'react-native-elements'

import filterData from '../selectors';

class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCoinData()
    }

    searchResults = (input) => {
        console.warn("input", input)
        this.props.searchCoins(input)
    }

    renderCryptoItems() {
        return this.props.cryptoCoins.map((cryptoCoin, index) =>
            <CryptoItem
                key={index}
                infos={cryptoCoin}
            />
        )

    }

    render() {
        if (this.props.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={this.props.isFetching}
                        textContent={"Loading..."}
                        animation="fade"
                    />
                </View>
            )
        }
        return (
            <View>
            <ScrollView style={styles.scroll}>
               <SearchBar
                lightTheme
                onChangeText={this.searchResults}
                clearIcon
                placeholder='Type Here...'
                platform='ios'
            />
                <Button
                    title="Filter me"
                    onPress={() => this.props.sortBy('price_usd')}
                />

                    {this.renderCryptoItems()}
            </ScrollView>
            </View>
        )
    }


}

const styles = {
    scroll: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

function mapStateToProps(state) {
    console.warn("STATEEEEE", state)
    const {data} = state.crypto;

    return {
        isFetching: state.crypto.isFetching,
        filters: state.filters,
        cryptoCoins: filterData(data, state.filters)
      //  cryptoCoins: data !== null ? data.filter((coin) => coin.name.toLowerCase().includes((searchItem).toLowerCase()) || coin.symbol.toLowerCase().includes((searchItem).toLowerCase())) : []
    }
}

export default connect(mapStateToProps, {fetchCoinData, searchCoins, sortBy})(CryptoContainer)