/*import React from "react";
import {connect} from "react-redux";
import {
    View,
    Button,
    ScrollView,
    FlatList,
    ActivityIndicator,
    StyleSheet, Platform,
    TouchableOpacity
} from "react-native";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import Filters from "../components/Filters";

import {fetchCoinData, filteredCoinData} from "../actions/FetchCoinDataAction";
import {searchCoins, sortBy} from "../actions/FilterDataAction";

import Spinner from "react-native-loading-spinner-overlay";
import {SearchBar} from 'react-native-elements'

import filterData from '../selectors';

class CryptoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            serverData: []
        }
        this.pageCounter = 0
    }

    componentDidMount() {
        /!*   this.props.fetchCoinData(this.pageCounter)
           this.pageCounter++;*!/
        for (var i = 0; i < 3; i++) {
            if (this.pageCounter === 0) {
                this.props.fetchCoinData(this.pageCounter)
                this.pageCounter++;
            } else {
                this.props.fetchCoinData(`${this.pageCounter}01`)
                this.pageCounter++;
            }
        }
    }

    loadMoreData = () => {
        this.props.fetchCoinData(`${this.pageCounter}1`);
        this.pageCounter++;
    }

    renderRow = ({item}) => {
        return (
            <CryptoItem
                key={item.id}
                cryptoCoin={item}
            />
        )
    }

    renderLoadMoreButton() {
        return <Button
            title="Load more"
            onPress={this.loadMoreData}
        />
    }

    searchResults = (input) => {
        this.props.searchCoins(input)
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
            <View style={styles.container}>

                <SearchBar
                    lightTheme
                    onChangeText={this.searchResults}
                    clearIcon
                    placeholder='Type Here...'
                    platform='ios'
                />

                <Filters
                    sortBy={this.props.sortBy}
                    pageCounter={this.pageCounter}
                    fetchCoinData={this.props.fetchCoinData.bind(this)}
                />

                <FlatList
                    style={{width: '100%'}}
                    data={this.props.cryptoCoins}
                    renderItem={this.renderRow.bind(this)}
                    ListFooterComponent={!this.props.isFetching ? this.renderLoadMoreButton.bind(this) : null}
                />


            </View>
        );
    }

}

mapStateToProps = state => {
    const {data} = state.crypto;
    return {
        isFetching: state.crypto.isFetching,
        filters: state.filters,
        cryptoCoins: filterData(data, state.filters)
    }
}

export default connect(mapStateToProps, {fetchCoinData, filteredCoinData, searchCoins, sortBy})(CryptoContainer)


const styles = StyleSheet.create(
    {
        container:
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
            }

    });*/


import React from "react";
import {connect} from "react-redux";
import {
    View,
    Button,
    ScrollView,
    FlatList,
    ActivityIndicator,
    StyleSheet, Platform,
    TouchableOpacity
} from "react-native";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import Filters from "../components/Filters";

import {fetchCoinData} from "../actions/FetchCoinDataAction";
import {searchCoins, sortBy} from "../actions/FilterDataAction";

import Spinner from "react-native-loading-spinner-overlay";
import {SearchBar} from 'react-native-elements'

import filterData from '../selectors';

class CryptoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            serverData: []
        }
        this.pageCounter = 0
    }

    componentDidMount() {
   /*     for (var i = 0; i < 3; i++) {
            if (this.pageCounter === 0) {
                this.props.fetchCoinData(this.pageCounter)
                this.pageCounter++;
            } else {
                this.props.fetchCoinData(`${this.pageCounter}01`)
                this.pageCounter++;
            }
        }*/
        this.props.fetchCoinData()
          /*  .then((response) => {
            response
        })*/
     //   this.pageCounter++;
    }

    renderLimitedAmountOfItems = () => {
        this.props.cryptooins.forEach()
    }

    loadMoreData = () => {
        this.props.fetchCoinData(`${this.pageCounter}1`);
        this.pageCounter++;
    }

    renderRow = ({item}) => {
        return (
            <CryptoItem
                key={item.id}
                cryptoCoin={item}
            />
        )
    }

    renderLoadMoreButton() {
        return <Button
            title="Load more"
            onPress={this.loadMoreData}
        />
    }

    searchResults = (input) => {
        this.props.searchCoins(input)
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
            <View style={styles.container}>

                <SearchBar
                    lightTheme
                    onChangeText={this.searchResults}
                    clearIcon
                    placeholder='Type Here...'
                    platform='ios'
                />

                <Filters
                    sortBy={this.props.sortBy}
                    pageCounter={this.pageCounter}
                    fetchCoinData={this.props.fetchCoinData.bind(this)}
                />

                <FlatList
                    style={{width: '100%'}}
                    data={this.props.cryptoCoins}
                    initialNumToRender={10}
                    renderItem={this.renderRow.bind(this)}
                  //  ListFooterComponent={!this.props.isFetching ? this.renderLoadMoreButton.bind(this) : null}
                    ListFooterComponent={!this.props.isFetching ? this.renderLoadMoreButton.bind(this) : null}
                />


            </View>
        );
    }

}

mapStateToProps = state => {
    console.warn("state", state)
    const {data} = state.crypto;
    return {
        isFetching: state.crypto.isFetching,
        filters: state.filters,
        cryptoCoins: filterData(data, state.filters)
    }
}

export default connect(mapStateToProps, {fetchCoinData, searchCoins, sortBy})(CryptoContainer)


const styles = StyleSheet.create(
    {
        container:
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
            }

    });





{/* <TouchableOpacity style={{marginBottom: 500}} activeOpacity = { 0.9 } onPress = { this.loadMoreData }>
                <Text>Load More</Text>
                {
                    ( this.props.isFetching )
                        ?
                        <ActivityIndicator color = "green" style = {{ marginLeft: 8 }} />
                        : null
                }
            </TouchableOpacity>*/
}

/*
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
}*/