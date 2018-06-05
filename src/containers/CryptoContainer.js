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


/*
import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
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



const data = [
    {key: 'Devin'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
];

class CryptoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
           pageCounter: 3
        }
    }

    componentDidMount() {
   /!*     for (var i = 0; i < 3; i++) {
            if (this.pageCounter === 0) {
                this.props.fetchCoinData(this.pageCounter)
                this.pageCounter++;
            } else {
                this.props.fetchCoinData(`${this.pageCounter}01`)
                this.pageCounter++;
            }
        }*!/
        this.props.fetchCoinData()
          /!*  .then((response) => {
            response
        })*!/
     //   this.pageCounter++;
    }



    loadMoreData = () => {
        if (this.state.pageCounter < this.props.cryptoCoins.length) {
            this.setState((prevState) => ({pageCounter: (prevState.pageCounter + 1)}));
        }

      /!*  this.props.fetchCoinData(`${this.pageCounter}1`);
        this.pageCounter++;*!/
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

    renderNewItem = () => {
        /!*if (this.state.pageCounter < this.props.cryptoCoins) {
            this.setState((prevState) => ({ pageCounter: (prevState.pageCounter + 1) }));
        }*!/
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
                   /!* data={this.props.cryptoCoins}*!/
                  data={this.props.cryptoCoins.slice(0, this.state.pageCounter)}
                    keyExtractor={(item, index) => item.id}

                    renderItem={this.renderRow.bind(this)}
                  //  ListFooterComponent={!this.props.isFetching ? this.renderLoadMoreButton.bind(this) : null}
                    ListFooterComponent={this.renderLoadMoreButton.bind(this)}

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

*/




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


import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
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
       /* this.state = {
            itemsCount: 3
        }*/
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



    loadMoreData = () => {
        if (this.state.pageCounter < this.props.cryptoCoins.length) {
            this.setState((prevState) => ({pageCounter: (prevState.pageCounter + 1)}));
        }

        /*  this.props.fetchCoinData(`${this.pageCounter}1`);
          this.pageCounter++;*/
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

  /*  renderNewItem = () => {
        if (this.state.itemsCount < data.length) {
            this.setState((prevState) => ({ itemsCount: (prevState.itemsCount + 1) }));
        }
    }*/

    render() {




        return (
            <View >



                <FlatList
                    data={this.props.cryptoCoins}
                   /* data={data.slice(0, this.state.itemsCount)}*/
                   /* keyExtractor={(item, index) => item.key}*/
                    renderItem={this.renderRow.bind(this)}
                    ListFooterComponent={this.renderLoadMoreButton.bind(this)}
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




/*
import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
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



const data = [
    {id: "hello", key: 'Devin'},
    {id: "hello1", key: 'Jackson'},
    {id: "hello2", key: 'James'},
    {id: "hello23", key: 'Joel'},
    {id: "hello3", key: 'John'},
    {id: "hello4", key: 'Jillian'},
    {id: "hello5", key: 'Jimmy'},
    {id: "hello6", key: 'Julie'},
    {id: "helloa", key: 'Devin'},
    {id: "hello1y", key: 'Jackson'},
    {id: "hello2x", key: 'James'},
    {id: "hello2x3", key: 'Joel'},
    {id: "hello3y", key: 'John'},
    {id: "hello4x", key: 'Jillian'},
    {id: "hello5c", key: 'Jimmy'},
    {id: "hello6v", key: 'Julie'},
];

class CryptoContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsCount: 3
        }
    }


    renderRow = ({item}) => {
        return (
            <Text>{item.key}</Text>
        )
    }

    renderLoadMoreButton() {
        return <Button
            title="Load more"
            onPress={this.renderNewItem}
        />
    }

    renderNewItem = () => {
        console.warn("fucking called")
        if (this.state.itemsCount < data.length) {
            this.setState((prevState) => ({ itemsCount: (prevState.itemsCount + 3) }));
        }
    }

    render() {

        return (
            <View >



                <FlatList
                    data={data.slice(0, this.state.itemsCount)}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderRow.bind(this)}
                    ListFooterComponent={this.renderLoadMoreButton.bind(this)}
                />


            </View>
        );
    }

}

*/


