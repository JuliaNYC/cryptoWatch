import React from "React";
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
    return  (
        <View style={styles.container}>
            <Icon style={styles.searchIcon} name="search" size={30} color="#030F26"/>
        <TextInput
            style={styles.searchBar}
            placeholder='Search'
        >
            <Icon style={styles.delete} name="backspace" size={30} color="#030F26"/>
        </TextInput>

        </View>
        )

}
export default Search;

const styles = {
    container: {
      /*  flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',*/
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
    },
    searchBar: {
        flex: 1,
        borderColor: '#030F26',
        borderWidth: 1,
        color: "#030F26"
        /*flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: 'black',
        color: '#424242',
        borderColor: '#030F26',
        borderWidth: 1,
        width: "100%"*/
      /*  height: 40,
        width: "100%",
        borderColor: '#030F26',
        borderWidth: 1,
        marginTop: 30,
        marginBottom: 20,
        textAlign: "center",
        color: "#030F26"*/
    },
    searchIcon: {
       // padding: 10,
    },
    delete: {
        flex: 2
    }
}