/*
import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
    Button,
    FlatList,
    ActivityIndicator,
    StyleSheet, Platform,
    TouchableOpacity,
    ScrollView
} from "react-native";
import {SearchBar} from 'react-native-elements'
import Spinner from "react-native-loading-spinner-overlay";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import CustomFilters from "../components/CustomFilters";
import {fetchAllCoinData, loadMoreData} from "../actions/FetchCoinDataAction";
import {searchCoins, sortBy} from "../actions/FilterDataAction";
import filterData from '../selectors';

class FilterAnSearchContainer extends React.Component {

    state={
        data:[],
        page: 0,
        posts:[]
    }

    componentDidMount() {
        this.props.fetchAllCoinData().then(()=>this.props.loadMoreData(0))
    }

    renderItem = ({item}) => (

        <CryptoItem
            id={item.id}
            cryptoCoin={item}
        />
    );

    keyExtractor = (item, index) => item.id;

    renderLoadMoreButton = () => {
        return <Button
            title="Load more"
            onPress={this.loadMoreData}
        />
    }

    loadMoreData = () => {
        console.warn("load more called")
        this.setState({
            page: this.state.page + 1
        }, () =>  this.props.loadMoreData(this.state.page))
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.isFetching ?
                    <View>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                    : null
                }
              {/!*  <SearchBar
                    lightTheme
                    clearIcon
                    placeholder='Type Here...'
                    platform='ios'
                />*!/}
                <CustomFilters
                    sortBy={this.props.sortBy}
                    loadMoreData={this.loadMoreData}
                />

                <FlatList
                    data={this.props.cryptoCoins}
                    keyExtractor={this.keyExtractor}
                    initialNumToRender={5}
                    renderItem={this.renderItem}
                    ListFooterComponent={this.renderLoadMoreButton}
                    onEndThreshold={0}
                />
            </View>
        );
    }
}

mapStateToProps = state => {
    console.warn("logging partial data -------->")
    const {partialAndFilteredData, data} = state.allData;
    return {
        isFetching: state.allData.isFetching,
        //cryptoCoins: partialAndFilteredData
        cryptoCoins: filterData(data, state.filters)
    }
}


export default connect(mapStateToProps, {fetchAllCoinData, searchCoins, sortBy, loadMoreData})( FilterAnSearchContainer)


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
    Text,
    Button,
    FlatList,
    ActivityIndicator,
    StyleSheet, Platform,
    TouchableOpacity,
    ScrollView
} from "react-native";
import {SearchBar} from 'react-native-elements'
import Spinner from "react-native-loading-spinner-overlay";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import CustomFilters from "../components/CustomFilters";
import {fetchAllCoinData, loadMoreData} from "../actions/FetchCoinDataAction";
import {searchCoins, sortBy} from "../actions/FilterDataAction";
import filterData from '../selectors';

class FilterAnSearchContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAllCoinData()
    }

    renderItem = ({item}) => (

        <CryptoItem
            id={item.id}
            cryptoCoin={item}
        />
    );

    keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>
                {this.props.isFetching ?
                    <View>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                    : null
                }
                  <SearchBar
                    lightTheme
                    clearIcon
                    placeholder='Type Here...'
                    platform='ios'
                />
                <CustomFilters
                    sortBy={this.props.sortBy}
                    loadMoreData={this.loadMoreData}
                />

                <FlatList
                    data={this.props.cryptoCoins}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    onEndThreshold={0}
                />
            </View>
        );
    }
}

mapStateToProps = state => {
    const {data} = state.allData;
    return {
        isFetching: state.allData.isFetching,
        cryptoCoins: filterData(data, state.filters)
    }
}


export default connect(mapStateToProps, {fetchAllCoinData, searchCoins, sortBy, loadMoreData})( FilterAnSearchContainer)


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