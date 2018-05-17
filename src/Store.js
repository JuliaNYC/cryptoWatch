import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const middleware = applyMiddleware(promise, thunk, logger);

const Store = createStore(
    compose(
        middleware
    )
);



export default Store;