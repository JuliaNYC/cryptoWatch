import axios from "axios";
import { api_root_url } from "../../utils/Constants.js";

let CoinAPI = {
    getCoins: (startPoint, initialSortBy = "rank") => {
        const start = startPoint === 0 ? 0 : `${startPoint}1`;
        return axios.get(`${api_root_url}/v2/ticker/?start=${start}&limit=10&sort=${initialSortBy}&structure=array`)
            .then(res => res.data.data)
    }
}

export default CoinAPI;
