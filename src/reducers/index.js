import {combineReducers} from 'redux';
import CoinsReducer from "./CoinsReducer";
import FilterReducer from './FilterReducer';
import AuthReducer from './AuthReducer';
import WatchCoinsListReducer from './WatchCoinsListReducer';
import WatchCoinReducer from './WatchCoinReducer';

export default combineReducers({
    coins: CoinsReducer,
    filters: FilterReducer,
    auth: AuthReducer,
    watchList: WatchCoinsListReducer,
    watchedCoin: WatchCoinReducer
});
