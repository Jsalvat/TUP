import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { SelectOpenRegisterLoginModal } from './types';

export interface RegisterLoginModalProps {
  title: string;
  text: ReactNode;
}

interface ModalOpen {
  isOpen: true;
  dataModal: RegisterLoginModalProps;
}

interface ModalClose {
  isOpen: false;
}

export type RegisterLoginModalState = ModalOpen | ModalClose;

const initialState: RegisterLoginModalState = {
  isOpen: false,
};

const registerLoginSlice = createSlice({
  name: 'registerLogin',
  initialState: initialState as RegisterLoginModalState,
  reducers: {
    selectOpenModal: (
      state,
      action: PayloadAction<SelectOpenRegisterLoginModal>
    ) => ({
      ...state,
      isOpen: true,
      dataModal: action.payload,
    }),
    selectCloseModal: () => initialState,
  },
});

export default registerLoginSlice;
