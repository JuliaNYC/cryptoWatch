// export default (coins, {text, sortBy}) => {
export default (coins, {text, sortBy}) => {
    console.warn("BEFORE", coins, typeof text)
    //if (coins) {

    return Object.values(coins).filter(coin => {
        console.log("coin", coin)
        console.warn("trim", coin.name, coin.symbol)
       // return coin.name.toLowerCase().includes(text.toLowerCase().trim()) || coin.symbol.toLowerCase().includes(text.toLowerCase().trim());
      return coin.name.toLowerCase().includes(text.toLowerCase().trim()) || coin.symbol.toLowerCase().includes(text.toLowerCase().trim());
    })

        .sort((coin1, coin2) => {


            if (sortBy === 'sortByLowestPrice') {
                return parseInt(coin1.price_usd) < parseInt(coin2.price_usd) ? -1 : 1;
            }
            if (sortBy === 'sortByHighestPrice') {
                return parseInt(coin1.price_usd) > parseInt(coin2.price_usd) ? -1 : 1;
            }
            if (sortBy === 'sortByLowestRank') {
                return parseInt(coin1.rank) > parseInt(coin2.rank) ? -1 : 1;
            }
            if (sortBy === 'sortByHighestRank') {
                return parseInt(coin1.rank) < parseInt(coin2.rank) ? -1 : 1;
            }


        });

}

