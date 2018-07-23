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
import Search from "../components/Search";
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
                    </View>
                    : null
                }
                {this.props.hasError ?
                    <View><Text>Sorry, currently out of service :(</Text></View> :
                    <View>
               {/* <SearchBar
                    lightTheme
                    clearIcon
                    placeholder='Type Here...'
                    platform='ios'
                />*/}

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
                    }
            </View>
        );
    }
}

mapStateToProps = state => {
    const {data} = state.coins;
    return {
        isFetching: state.coins.isFetching,
        hasError: state.coins.hasError,
        coins: filterData(data, state.filters)

    }
}


export default connect(mapStateToProps, {fetchCoinData, resetState, searchCoins, sortBy})(CoinContainer)


const styles = StyleSheet.create(
    {
        container:
            {
                flex: 1,
                backgroundColor: "white",
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
            }

    });