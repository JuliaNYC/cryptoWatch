import React from 'react'
import {connect} from "react-redux";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {isUserLoggedIn} from "../actions/AuthAction";

class Loading extends React.Component {

    componentDidMount () {
        this.props.isUserLoggedIn()
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <Text>I am loading your app</Text>
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