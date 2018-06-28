import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {connect} from "react-redux";

import {isUserLoggedIn} from "../actions/AuthAction";

class Loading extends React.Component {

    componentDidMount () {
        this.props.isUserLoggedIn()
          /*  if (this.props.loggedIn) {
                this.props.navigation.navigate('home')
            } else {
                this.props.navigation.navigate('login')
            }*/


    }
    render() {
        console.warn("isUserLoggedIn", this.props.loggedIn)
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

const mapStateToProps = ({auth}) => {
    return {
        loggedIn:auth.loggedIn
    }
};


export default connect(mapStateToProps, {isUserLoggedIn})(Loading)