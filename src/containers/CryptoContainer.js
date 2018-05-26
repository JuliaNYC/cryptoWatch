import React from "react";
import {connect} from "react-redux";
import { View, Text, TextInput, ScrollView} from "react-native";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import {FetchCoinData, FilterResults} from "../actions/FetchCoinData";
import Spinner from "react-native-loading-spinner-overlay";

class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.FetchCoinData()
    }

    filterResults = (input) => {
        console.warn("input", input)
        this.props.FilterResults(input)
    }

    renderCryptoItems() {
        console.log(" renderCryptoItems", this.props.crypto.data)
       /* return this.props.crypto.data.map((cryptoCoin, index) =>*/
        return this.props.filteredData.map((cryptoCoin, index) =>
            <CryptoItem
                key={index}
                infos={cryptoCoin}
            />
        )

    }

    render() {
        if (this.props.crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={this.props.crypto.isFetching}
                        textContent={"Loading..."}
                        animation="fade"
                    />
                </View>
            )
        }
        return (
            <View>
            <ScrollView style={styles.scroll}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={this.filterResults}
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
    const test = data !== null ? data.filter((coin) => coin.name.toLowerCase().includes((searchItem).toLowerCase()) || coin.symbol.toLowerCase().includes((searchItem).toLowerCase())) : [];
    console.warn("test", test)
    console.warn("mpstateToPROPS data", data, state.crypto, searchItem )
    return {
        crypto: state.crypto,
        filteredData: data !== null ? data.filter((coin) => coin.name.toLowerCase().includes((searchItem).toLowerCase()) || coin.symbol.toLowerCase().includes((searchItem).toLowerCase())) : []
    }
}

export default connect(mapStateToProps, {FetchCoinData, FilterResults})(CryptoContainer)