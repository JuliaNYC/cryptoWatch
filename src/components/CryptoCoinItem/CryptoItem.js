import React from "react";
import { View, Button, StyleSheet } from "react-native";

import CryptoCoinDetailView from "./CryptoCoinDetailView/CryptoCoinDetailView";
import CryptoItemSummary from "./CryptoItemSummary";

export default class CryptoItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showDetailView: false
        }
    }

    renderDetailView = () => {
        this.setState({
            showDetailView: !this.state.showDetailView
        })
    }


    render () {
        return (
            <View  style={styles.itemContainer}>
                <CryptoItemSummary
                    infos={this.props.infos}
                />

                <Button
                    onPress={this.renderDetailView}
                    title={!this.state.showDetailView ? 'Learn more': 'close'}
                    color={!this.state.showDetailView ? 'green' : 'yellow' }
                />

                { this.state.showDetailView === true ?
                    <CryptoCoinDetailView
                        infos={this.props.infos}
                        showDetailView={this.state.showDetailView}/>
                    : null
                }

            </View>
        )
    }
}


const styles = StyleSheet.create ({
    itemContainer: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    }
})
