import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { createFilter } from 'redux-persist-transform-filter';

import rootReducer from "./../reducers";

const enhancers = [];
const middleware = [
    reduxThunk
];

const keepLoadedIn = createFilter(
    'auth',
    ['loggedIn', '_token', 'firstName', 'userName', 'email', '_id'],
    ['loggedIn', '_token', 'firstName',  'userName', 'email', '_id']
);

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ["auth"],
    transforms: [
        keepLoadedIn,
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export const store = createStore(persistedReducer, composedEnhancers);
export const persistor = persistStore(store);