/* eslint-disable no-debugger */
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Await } from '../../api/types';
import { reduxSagaFirebase } from '../../firebase';
import userAuthSlice from './userAuthSlice';

function* registerUser(
  action: PayloadAction<{ email: string; password: string; name: string }>
) {
  try {
    console.log('test');
    //@ts-ignore
    const data = (yield call(
      reduxSagaFirebase.auth.createUserWithEmailAndPassword,
      action.payload.email,
      action.payload.password
    )) as Await<
      ReturnType<typeof reduxSagaFirebase.auth.createUserWithEmailAndPassword>
    >;
    const userData = {
      email: data.user.email,
      name: data.user.displayName,
      uid: data.user.uid,
      photoURL: data.user.photoURL,
    };
    const actionOk = userAuthSlice.actions.registerOk(userData);
    yield put(actionOk);
  } catch (e) {
    const actionKo = userAuthSlice.actions.registerKo(e.message);
    yield put(actionKo);
  }
}

function* userAuthSagas() {
  yield takeLatest(userAuthSlice.actions.register.type, registerUser);
}

export default userAuthSagas;
