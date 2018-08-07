import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CoinsReducer from "./CoinsReducer";
import FilterReducer from './FilterReducer';
import WatchCoinsListReducer from './WatchCoinsListReducer';

export default combineReducers({
    coins: CoinsReducer,
    filters: FilterReducer,
    auth: AuthReducer,
    watchList: WatchCoinsListReducer
});
