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
import CoinItem from "../components/CoinItemWizard/CoinItem";
import Filters from "../components/Filters";
import {fetchCoinData, resetState} from "../actions/FetchCoinDataAction";
import {searchCoins, sortBy} from "../actions/FilterDataAction";
import filterData from '../selectors';

class CoinContainer extends React.Component {

    state = {
        page: 0,
        sortedBy: undefined
    }

    componentDidMount() {
        this.props.fetchCoinData(this.state.page);
        this.setPage()
    }

    renderItem = ({item}) => (
        <CoinItem
            id={item.id}
            coin={item}
        />
    )

    
    keyExtractor = (item, index) => item.id.toString();

    setPage = () => {
        this.setState(currentState => ({ page: currentState.page + 1 }));
    }

    //needed for filters - after initial fetching (count===0) based on filter param, count must be 1
    //because this.setState.. happens inside here, not filter omponent
    resetPageToOne = () => {
        this.setState({
            page: 1
        })
    }

   setInitialSortParam = (sortParam) => {
        console.warn("setInitialFilter", sortParam)
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
        console.warn("this.state.sortedBy", this.state.sortedBy)
        this.props.fetchCoinData(this.state.page, this.state.sortedBy);
        this.setPage()
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
                <SearchBar
                    lightTheme
                    clearIcon
                    placeholder='Type Here...'
                    platform='ios'
                />
                <Filters
                    fetchCoinData={this.props.fetchCoinData}
                    setInitialSortParam={this.setInitialSortParam}
                    resetState={this.props.resetState.bind(this)}
                    resetPageToOne={this.resetPageToOne}
                    sortBy={this.props.sortBy}
                />
                <FlatList
                    data={this.props.coins}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ListFooterComponent={this.renderLoadMoreButton}
                />
            </View>
        );
    }
}

mapStateToProps = state => {
    const {data} = state.coins;
    return {
        isFetching: state.coins.isFetching,
        coins: filterData(data, state.filters)

    }
}


export default connect(mapStateToProps, {fetchCoinData, resetState, searchCoins, sortBy})(CoinContainer)


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