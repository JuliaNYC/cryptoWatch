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

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import Filters from "../components/Filters";
import {fetchCoinData, resetState} from "../actions/FetchCoinDataAction";
import {searchCoins, sortBy} from "../actions/FilterDataAction";
import {SearchBar} from 'react-native-elements'
import Spinner from "react-native-loading-spinner-overlay";
import filterData from '../selectors';

class CryptoContainer extends React.Component {

    state = {
        page: 0,
        sortedBy: undefined,
        isOpen: false
    }

    componentDidMount() {
        this.props.fetchCoinData(0)
        this.setPage()
    }

    keyExtractor = (item, index) => item.id.toString();

    renderItem = ({item}) => (
        <CryptoItem
            id={item.id}
            cryptoCoin={item}
        />

    );
    resetPageToOne = () => {
        this.setState({
            page: 1
        })
    }
    setPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    setInitialFilter = (sortParam) => {
        this.setState({
            sortedBy: sortParam
        })
    }

    renderLoadMoreButton = () => {
        return <Button
            title="Load more"
            onPress={this.loadMoreData}
        />
    }

    loadMoreData = () => {
        this.props.fetchCoinData(this.state.page, this.state.sortedBy);
        this.setPage()
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.isFetching ?
                    <View>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Spinner
                            visible={this.props.isFetching}
                            animation="fade"
                        />
                    </View>
                    : null
                }
                <SearchBar
                    lightTheme
                    clearIcon
                    placeholder='Type Here...'
                    platform='ios'
                />
                <Filters
                    fetchCoinData={this.props.fetchCoinData.bind(this)}
                    setInitialFilter={this.setInitialFilter}
                    resetState={this.props.resetState.bind(this)}
                    resetPageToOne={this.resetPageToOne}
                    sortBy={this.props.sortBy}
                />
                <FlatList
                    data={this.props.cryptoCoins}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ListFooterComponent={this.renderLoadMoreButton}
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


export default connect(mapStateToProps, {fetchCoinData, searchCoins, sortBy, resetState})(CryptoContainer)


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