import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    status: false,
};

export const modalIsOpen = createAction('modal/open');
export const modalIsClose = createAction('modal/close');

export default createReducer(initialState, (builder) =>
    builder
        .addCase(modalIsOpen, (draft) => {
            draft.status = true;
            return;
        })
        .addCase(modalIsClose, (draft) => {
            draft.status = false;
            return;
        })
);
