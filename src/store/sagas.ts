import { all } from 'redux-saga/effects';
import userAuthSagas from './userAuth/userAuthSagas';

function* actionWatcher() {
  yield all([userAuthSagas()]);
}

export default actionWatcher;
