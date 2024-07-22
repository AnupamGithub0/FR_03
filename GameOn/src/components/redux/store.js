// import { configureStore } from '@reduxjs/toolkit'
// import userSlice from './userSlice'

// export const store = configureStore({
//     reducer:{
//         user:userSlice
//     }
// })

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ user: userSlice });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

const persistor = persistStore(store);

export { store, persistor };
