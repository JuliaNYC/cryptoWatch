import React from "React";
import { TextInput } from 'react-native'

const Search = () => {
    return  (
        <TextInput
            style={styles.searchBar}
            placeholder='Search'
        />
        )

}
export default Search;

const styles = {
    searchBar: {
        height: 40,
        width: "80%",
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 30,
        marginBottom: 20,
        textAlign: "center",
        color: "#030F26"
    }
}