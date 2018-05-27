import React from "react";
import {connect} from "react-redux";
import { View, Text, TextInput, ScrollView} from "react-native";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import {FetchCoinData, FilterResults} from "../actions/FetchCoinData";
import Spinner from "react-native-loading-spinner-overlay";
import { SearchBar, buttonStyle } from 'react-native-elements'
class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.FetchCoinData()
    }

    filterResults = (input) => {
        console.warn("input", input)
        this.props.FilterResults(input)
    }

    renderCryptoItems() {
       /* return this.props.crypto.data.map((cryptoCoin, index) =>*/
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
    const {searchItem, data} = state.crypto;
    return {
        isFetching: state.crypto.isFetching,
        cryptoCoins: data !== null ? data.filter((coin) => coin.name.toLowerCase().includes((searchItem).toLowerCase()) || coin.symbol.toLowerCase().includes((searchItem).toLowerCase())) : []
    }
}

export default connect(mapStateToProps, {FetchCoinData, FilterResults})(CryptoContainer)