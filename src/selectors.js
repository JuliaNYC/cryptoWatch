// export default (coins, {text, sortBy}) => {
export default (coins, {text, sortBy}) => {
    console.warn("BEFORE", coins, typeof text)
    //if (coins) {

        return coins.filter(coin => {
            return coin.name.toLowerCase().includes(text.toLowerCase().trim()) || coin.symbol.toLowerCase().includes(text.toLowerCase().trim());
            /*const filtereCoins = text != "" ? coin.name.toLowerCase().includes(text.toLowerCase()) || coin.symbol.toLowerCase().includes(text.toLowerCase());
            return filtereCoins;*/
        })
         /*   .sort((coin1, coin2) => {
        return parseInt(coin1.price_usd) > parseInt(coin2.price_usd) ? -1 : 1;})*/
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

