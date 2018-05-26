import { SearchBar } from 'react-native-elements'

export default const SearchField = () => {
    return  <SearchBar
        lightTheme
        onChangeText={this.filterCoins}
        placeholder='Type Here...'
        platform='ios'
    />
}