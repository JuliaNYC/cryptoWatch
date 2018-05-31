import React from "react";
import {connect} from "react-redux";
import { View, Button, ScrollView, Picker} from "react-native";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import {fetchCoinData} from "../actions/FetchCoinDataAction";
import {searchCoins, sortBy} from "../actions/FilterDataAction";

import Spinner from "react-native-loading-spinner-overlay";
import { SearchBar} from 'react-native-elements'

import filterData from '../selectors';

class CryptoContainer extends React.Component {

    state = {
        pageCounter: 1
    }

    componentDidMount() {
    //    this.props.fetchCoinData()
        this.props.fetchCoinData(0)
    }

    searchResults = (input) => {
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

    loadMoreData = () => {
       // console.warn("loadmoredat called", this.state.pageCounter)
        if (this.state.pageCounter>0) {
            this.props.fetchCoinData(`${this.state.pageCounter}01`);
            this.state.pageCounter++;
        }
    }

    render() {
        console.warn("render", this.props.cryptoCoins)
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
                    title="Lowest Price"
                    onPress={() => this.props.sortBy('sortByLowestPrice')}
                />
                <Button
                    title="Highest Price"
                    onPress={() => this.props.sortBy('sortByHighestPrice')}
                />

                <Button
                    title="Lowest Rank"
                    onPress={() => this.props.sortBy('sortByLowestRank')}
                />
                <Button
                    title="Highest Rank"
                    onPress={() => this.props.sortBy('sortByHighestRank')}
                />



                    {this.renderCryptoItems()}
<View style={{marginBottom: 500}}>
                <Button
                    title="Load more"
                    onPress={this.loadMoreData}
                />
</View>
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
    }
}

export default connect(mapStateToProps, {fetchCoinData, searchCoins, sortBy})(CryptoContainer)