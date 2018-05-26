import React from "react";
import {connect} from "react-redux";
import { View, Text, ScrollView} from "react-native";

import CryptoItem from "../components/CryptoCoinItem/CryptoItem";
import FetchCoinData from "../actions/FetchCoinData";
import Spinner from "react-native-loading-spinner-overlay";

class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.FetchCoinData()
    }

    renderCryptoItems() {
        console.log(" renderCryptoItems", this.props.crypto.data)
        return this.props.crypto.data.map((cryptoCoin, index) =>
            <CryptoItem
           /*     key={index}
                name={cryptoCoin.name}
                symbol={cryptoCoin.symbol}
                price={cryptoCoin.price_usd}
                percent_change_24h={cryptoCoin.percent_change_24h}
                percent_change_7d={cryptoCoin.percent_change_7d}
                percent_change_1h={cryptoCoin.percent_change_1h}
                available_supply={cryptoCoin.available_supply}
                total_supply={cryptoCoin.total_supply}
                max_supply={cryptoCoin.max_supply}*/
                key={index}
        /*        infos={cryptoCoin}*/
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
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer)