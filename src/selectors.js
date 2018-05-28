export default (coins, { text, sortBy}) => {
    console.warn("BEFORE", coins, typeof text)
    if (coins) {
        return coins.filter(coin => {
            return coin.name.toLowerCase().includes(text.toLowerCase()) || coin.symbol.toLowerCase().includes(text.toLowerCase());

        }).sort((coin1, coin2) => {
                if (sortBy === 'sortByLowestPrice') {
                    return parseInt(coin1.price_usd) < parseInt(coin2.price_usd) ? -1 : 1;
                }
            if (sortBy === 'sortByHighestPrice') {
                return parseInt(coin1.price_usd) > parseInt(coin2.price_usd) ? -1 : 1;
            }
            });
    }


}

/*
sortByLowestPrice
sortByHighestPrice

sortByLowestRank
sortByHighestRank

sortByLowestPricePercentageUp7d
sortByHighestPercentageDrop7d
*/
