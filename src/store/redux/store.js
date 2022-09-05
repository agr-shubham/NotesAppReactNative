import {configureStore} from '@reduxjs/toolkit';
import notes from './notes';
import notesReducer from './notes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['notesList', 'autoIncrementId'],
};
const persistedReducer = persistReducer(persistConfig, notesReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
