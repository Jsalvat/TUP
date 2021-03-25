import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import actionWatcher from './sagas';
import userAuthSlice from './userAuth/userAuthSlice';

const appReducer = combineReducers({
  userAuth: userAuthSlice.reducer,
});

export type AppState = ReturnType<typeof appReducer>;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(actionWatcher);

export type AppDispatch = typeof store.dispatch;

export default store;
