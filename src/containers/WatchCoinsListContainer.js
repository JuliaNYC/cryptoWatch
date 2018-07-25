import React from "react";
import {connect} from "react-redux";
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    StyleSheet
} from "react-native";

import {fetchWatchedCoins} from "../actions/WatchCoinsListAction";
import LoginOrSignupWithEmail from "../components/LoginOrSignupWithEmail";

class WatchCoinsListContainer extends React.Component {

    componentDidMount () {
        this.props.fetchWatchedCoins()
    }

    render() {

        return (
    <View>
        <Text>Watch Coins</Text>
    </View>
        )
    }
}

/*const mapStateToProps = ({auth}) => {
    const {email, password, isFetchingUser, errorMsg} = auth;
    return {
        email,
        password,
        isFetchingUser,
        error: errorMsg
    }
};*/

export default connect(null,
    {fetchWatchedCoins})(WatchCoinsListContainer)
