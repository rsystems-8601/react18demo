// import { configureStore } from '@reduxjs/toolkit';
// import reducers from './reducers';
// const store = configureStore({
//   reducer: reducers
// });
// const { dispatch } = store;
// export { store, dispatch };
// =======================|| Persist Approach || ======================//
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['menu'], // exclude storage
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer)
const persistor = persistStore(store)
export { store,  persistor};

