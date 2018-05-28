import React from "react";
import {connect} from "react-redux";
import { View, Button, ScrollView} from "react-native";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
/*import {FetchCoinData, FilterResults, filterDataByPrice} from "../actions/FetchCoinData";*/
import {fetchCoinData} from "../actions/FetchCoinDataAction";
import {filterDataAction} from "../actions/FilterDataAction";

import Spinner from "react-native-loading-spinner-overlay";
import { SearchBar} from 'react-native-elements'

import filterData from '../selectors';

class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCoinData()
    }

    filterResults = (input) => {
        console.warn("input", input)
        this.props.filterResults(input)
    }

    renderCryptoItems() {
      //  console.warn("  renderCryptoItems", this.props.cryptoCoins)
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
                onChangeText={this.filterResults}
                clearIcon
                placeholder='Type Here...'
                platform='ios'
            />
                <Button
                    title="Filter me"
                    onPress={() => this.props.filterDataByPrice()}
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

export default connect(mapStateToProps, {fetchCoinData, filterDataAction})(CryptoContainer)