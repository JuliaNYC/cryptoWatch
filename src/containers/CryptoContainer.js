import React from "react";
import {connect} from "react-redux";
import { View, Text} from "react-native";

class CryptoContainer extends React.Component {
    render() {
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

export default connect(mapStateToProps)(CryptoContainer)