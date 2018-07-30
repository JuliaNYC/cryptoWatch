import React from "React";
import {View, TextInput, TouchableOpacity} from 'react-native'
import IconDelete from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSearch from 'react-native-vector-icons/FontAwesome';

export default class Search extends React.Component {
    state = {
        input: "",
        showDeleteButton: false
    }

    renderDeleteButton = () => {
        if (this.state.showDeleteButton) {
            return (
                <TouchableOpacity onPress={this.clearSearchField}>
                    <IconDelete style={styles.clearIcon} name="backspace" size={25} color="#c5c1c1"/>
                </TouchableOpacity>
            )
        } else {
            return null;
        }

    }

    clearSearchField = () => {
        this.setState({input: " "})
        this.props.onChangeText("")
    }

    render() {
        return (
            <View style={styles.container}>
                <IconSearch style={styles.searchIcon} name="search" size={20} color="#c5c1c1"/>
                <TextInput
                    style={styles.searchBar}
                    placeholder='Search'
                    placeholderTextColor="#848080"
                    autoCorrect={false}
                    value={this.state.input}
                    onChangeText={(e) => this.props.onChangeText(e)}
                    onFocus={() => this.setState({showDeleteButton: true})}
                />
                {this.renderDeleteButton()}
            </View>
        )
    }

}

const styles = {
    container: {
        flexDirection: 'row',
        backgroundColor: "#f7f4f4",
        borderRadius: 20,
        paddingBottom: 5,
        marginBottom: 25,
        alignItems: "center"
    },
    searchBar: {
        flex: 2
    },
    searchIcon: {
        flex: 1,
        padding: 5,
        marginLeft: 15
    },
    clearIcon: {
        flex: 1,
        padding: 5,
        marginRight: 10
    }
}