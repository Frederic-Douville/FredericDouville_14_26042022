import { createAction, createReducer } from '@reduxjs/toolkit';
import { selectEmployees } from '../utils/selectors';

const initialState = {
    choice: 10,
    beginNbr: 1,
    endNbr: 10,
    pagesNbr: null,
};

const pagingChoiceUpdate = createAction('paging/choiceUpdate');
const pagingChoicePage = createAction('paging/choicePage');

export function choosePaging(store, choice) {
    const employeeTotal = selectEmployees(store.getState()).response.length;
    const numberOfPages = Math.ceil(employeeTotal / choice);
    store.dispatch(pagingChoiceUpdate([choice, 1, choice, numberOfPages]));
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(pagingChoiceUpdate, (draft, action) => {
            draft.choice = action.payload[0];
            draft.beginNbr = action.payload[1];
            draft.endNbr = action.payload[2];
            draft.pagesNbr = action.payload[3];
            return;
        })
        .addCase(pagingChoicePage, (draft, action) => {
            draft.beginNbr = action.payload[0];
            draft.endNbr = action.payload[1];
            return;
        })
);
