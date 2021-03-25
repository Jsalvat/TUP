import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserAuthSliceInitialState {
  loading: boolean;
  user: any;
}

const initialState: UserAuthSliceInitialState = {
  loading: false,
  user: null,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<any>) => ({
      ...state,
      loading: true,
    }),
    registerOk: (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      user: action.payload,
    }),
    registerKo: (state, action: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    logout: (state) => ({
      ...state,
      user: null,
    }),
  },
});

export default userAuthSlice;
