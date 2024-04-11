import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from "../feautures/AuthSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer)
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export default store;
