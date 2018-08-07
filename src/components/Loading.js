import React from 'react'
import {connect} from "react-redux";
import {
    ActivityIndicator,
    Text,
    View
} from 'react-native'
import {isUserLoggedIn} from "../actions/AuthAction";

class Loading extends React.Component {
    componentDidMount() {
        this.props.isUserLoggedIn()
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
                <Text>Loading CryptoWatch</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5ac6dd'
    }
}

export default connect(null, {isUserLoggedIn})(Loading)