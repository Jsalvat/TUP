import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TestState {
  test: string;
  loading: boolean;
}

const initialState: TestState = {
  test: 'initialState',
  loading: false,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (state) => ({
      ...state,
      loading: true,
    }),
    setTestOk: (state) => ({
      ...state,
      test: 'OK',
      loading: false,
    }),
    setTestKo: (state, action: PayloadAction<string>) => ({
      ...state,
      test: 'KO',
      error: action.payload,
      loading: false,
    }),
  },
});

export default testSlice;
