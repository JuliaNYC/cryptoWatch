import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {connect} from "react-redux";

import {isUserLoggedIn} from "../actions/AuthAction";

class Loading extends React.Component {

    componentDidMount () {
        this.props.isUserLoggedIn()
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})



export default connect(null, {isUserLoggedIn})(Loading)