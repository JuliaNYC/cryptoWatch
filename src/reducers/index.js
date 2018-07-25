import {combineReducers} from 'redux';
import CoinsReducer from "./CoinsReducer";
import FilterReducer from './FilterReducer';
import AuthReducer from './AuthReducer';
import FullDataReducer from './FullDataReducer';
import WatchCoinsListReducer from './WatchCoinsListReducer';

export default combineReducers({
    coins: CoinsReducer,
    allData: FullDataReducer,
    filters: FilterReducer,
    auth: AuthReducer,
    watchList: WatchCoinsListReducer
});
