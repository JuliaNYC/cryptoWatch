import React from "react";
import {connect} from "react-redux";
import {
    ActivityIndicator,
    FlatList,
    Platform,
    Text,
    View,
} from "react-native";
import _ from "lodash";
import {fetchCoinData, resetState} from "../actions/FetchCoinDataAction";
import {fetchWatchedCoins} from "../actions/WatchCoinsListAction";
import {searchCoins, sortBy} from "../actions/FilterDataAction";
import {addCoinToWatchList} from "../actions/WatchCoinsListAction";
import Button from "../components/Button";
import CoinItem from "../components/CoinItemWizard/CoinItem";
import Filters from "../components/Filters";
import Search from "../components/Search";
import filterData from '../selectors';

class CoinContainer extends React.Component {

    state = {
        page: 0,
        sortedBy: undefined,
        refreshing: false
    }

    componentDidMount() {
        this.props.fetchWatchedCoins();
        this.props.fetchCoinData(this.state.page);
        this.setPage();
    }

    renderItem = ({item}) => (
        <CoinItem
            id={item.id}
            coin={item}
            addCoinToWatch={this.addCoinToWatch}
            added={this.props.watchedCoinsById.includes(item.id)}
        />
    )

    handleRefresh = () => {
        this.setState({refreshing: true});
        this.props.resetState();
        this.props.fetchCoinData(0, this.state.sortedBy).then(() => {
            this.setState({refreshing: false});
        })
    }

    keyExtractor = (item, index) => item.id.toString();

    setPage = () => {
        this.setState(currentState => ({page: currentState.page + 1}));
    }

    resetPageToOne = () => {
        this.setState({
            page: 1
        })
    }

    setInitialSortParam = (sortParam) => {
        this.setState({
            sortedBy: sortParam
        })
    }

    renderLoadMoreButton = () => {
        if (this.props.coins.length > 0) {
            return (
                <Button
                    onPress={this.loadMoreData}
                    buttonStyle={styles.loadMoreButton}
                >
                    Load more
                </Button>
            )
        } else {
            return null;
        }
    }

    filterResults = (input) => {
        this.props.searchCoins(input)
    }

    loadMoreData = () => {
        this.props.fetchCoinData(this.state.page, this.state.sortedBy);
        this.setPage()
    }

    addCoinToWatch = (coin) => {
        this.props.addCoinToWatchList(coin)
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.isFetching ?
                    <View>
                           <ActivityIndicator size="large" color="#c5c1c1"/>
                    </View>
                    : null
                }
                {this.props.hasError ?
                    <View>
                        <Text>Sorry :( we are working on it, please come back later!</Text>
                    </View>
                    : <View>
                        <Search
                            onChangeText={this.filterResults}
                        />
                        <Filters
                            fetchCoinData={this.props.fetchCoinData}
                            setInitialSortParam={this.setInitialSortParam}
                            resetState={this.props.resetState}
                            resetPageToOne={this.resetPageToOne}
                            sortBy={this.props.sortBy}
                        />
                        <FlatList
                            data={this.props.coins}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            ListFooterComponent={this.renderLoadMoreButton}
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleRefresh}
                        />
                    </View>
                }
            </View>
        );
    }
}

mapStateToProps = state => {
    const {data} = state.coins;
    const watchedCoinsById = _.map(_.map(_.values(state.watchList.coins), "coin"), "id");

    return {
        isFetching: state.coins.isFetching,
        hasError: state.coins.hasError,
        coins: filterData(data, state.filters),
        watchedCoinsById
    }
}

export default connect(mapStateToProps, {
    fetchCoinData, resetState, searchCoins, sortBy, addCoinToWatchList, fetchWatchedCoins
})(CoinContainer)

const styles = {
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 25,
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    loadMoreButton: {
        backgroundColor: "#5ac6dd",
        padding: 15,
        marginBottom: 110,
        borderRadius: 20
    }
};