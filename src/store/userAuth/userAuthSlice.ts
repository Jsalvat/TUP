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
    login: (state, action: PayloadAction<string>) => ({
      ...state,
      user: action.payload,
    }),
    logout: (state) => ({
      ...state,
      user: null,
    }),
  },
});

export default userAuthSlice;
