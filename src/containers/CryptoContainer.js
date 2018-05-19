import React from "react";
import {connect} from "react-redux";
import { View, Text} from "react-native";

import FetchCoinData from "../actions/FetchCoinData";

class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.FetchCoinData()

    }


    render() {
        console.log("crypto", this.props.crypto)
        return (
            <View>
                <Text>Hello Container</Text>
            </View>
            )

    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer)