import { createAction, createReducer } from '@reduxjs/toolkit';
import { selectEmployees, selectPaging } from '../utils/selectors';

const initialState = {
    choice: 10,
    startNbr: 0,
    endNbr: 10,
    pagesNbr: null,
    page: 1,
};

const pagingInitialize = createAction('Paging/choiceInitialize');
const pagingChoiceUpdate = createAction('paging/choiceUpdate');
const pagingChoicePage = createAction('paging/choicePage');

export function initializePaging(store) {
    const employeeTotal = selectEmployees(store.getState()).response.length;
    const numberOfPages = Math.ceil(employeeTotal / 10);
    store.dispatch(pagingInitialize(numberOfPages));
}

export function searchPaging(store, searchArray) {
    const employeeResult = searchArray.length;
    const numberOfPages = Math.ceil(employeeResult / 10);
    store.dispatch(pagingInitialize(numberOfPages));
}

export function choosePaging(store, choice) {
    const employeeTotal = selectEmployees(store.getState()).response.length;
    const numberOfPages = Math.ceil(employeeTotal / choice);
    var numberOfElement;
    numberOfPages > 1
        ? (numberOfElement = choice)
        : (numberOfElement = employeeTotal);
    store.dispatch(
        pagingChoiceUpdate([choice, 0, numberOfElement, numberOfPages])
    );
}

export function changeOfPage(store, choicePage) {
    const employeeTotal = selectEmployees(store.getState()).response.length;
    const choicePaging = selectPaging(store.getState()).choice;
    const actualPage = selectPaging(store.getState()).page;
    if (actualPage === choicePage) {
        return;
    }
    var newStartNbr;
    var newEndNbr;
    if (choicePage > 1) {
        newStartNbr =
            (selectPaging(store.getState()).endNbr + 1) * (choicePage - 1);
        newEndNbr =
            (selectPaging(store.getState()).endNbr + choicePaging + 1) *
            (choicePage - 1);
    }
    if (newEndNbr > employeeTotal) {
        newEndNbr = employeeTotal;
    }
    if (choicePage === '1') {
        newStartNbr = 0;
        newEndNbr = choicePaging;
    }
    store.dispatch(pagingChoicePage([newStartNbr, newEndNbr, choicePage]));
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(pagingInitialize, (draft, action) => {
            draft.pagesNbr = action.payload;
        })
        .addCase(pagingChoiceUpdate, (draft, action) => {
            draft.choice = action.payload[0];
            draft.startNbr = action.payload[1];
            draft.endNbr = action.payload[2];
            draft.pagesNbr = action.payload[3];
            return;
        })
        .addCase(pagingChoicePage, (draft, action) => {
            draft.startNbr = action.payload[0];
            draft.endNbr = action.payload[1];
            draft.page = action.payload[2];
            return;
        })
);
