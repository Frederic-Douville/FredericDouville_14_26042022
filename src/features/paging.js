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

/**
 * A function that initialize the number of pages for all the employees data
 * @param {Function} store hook from react-redux: useStore()
 * @returns {ReducerAction}
 */
export function initializePaging(store) {
    const employeeTotal = selectEmployees(store.getState()).response.length;
    var numberOfPages = Math.ceil(employeeTotal / 10);
    if ((numberOfPages - 1) * 10 + (numberOfPages - 1) === employeeTotal + 1) {
        numberOfPages = numberOfPages - 1;
    }
    store.dispatch(pagingInitialize(numberOfPages));
}

/**
 * A function that calculate the number of pages when user does a search
 * @param {Function} store hook from react-redux: useStore()
 * @param {Array.<Object>} searchArray contains the employees data that match with the search content
 * @returns {ReducerAction}
 */
export function searchPaging(store, searchArray) {
    const employeeResult = searchArray.length;
    var numberOfPages = Math.ceil(employeeResult / 10);
    if ((numberOfPages - 1) * 10 + (numberOfPages - 1) === employeeResult + 1) {
        numberOfPages = numberOfPages - 1;
    }
    store.dispatch(pagingInitialize(numberOfPages));
}

/**
 * A function that modify the number of pages, the number of elements by page and the index of the last element.
 * @param {Function} store hook from react-redux: useStore()
 * @param {Number} choice number of elements by page
 * @returns {ReducerAction}
 */
export function choosePaging(store, choice) {
    const employeeTotal = selectEmployees(store.getState()).response.length;
    var numberOfPages = Math.ceil(employeeTotal / choice);
    if (
        (numberOfPages - 1) * choice + (numberOfPages - 1) ===
        employeeTotal + 1
    ) {
        numberOfPages = numberOfPages - 1;
    }
    var numberOfElement;
    numberOfPages > 1
        ? (numberOfElement = choice)
        : (numberOfElement = employeeTotal);
    store.dispatch(
        pagingChoiceUpdate([choice, 0, numberOfElement, numberOfPages])
    );
}

/**
 * A function that modify the index of the first and the last elements to show
 * @param {Function} store hook from react-redux: useStore()
 * @param {Number} choicePage number of the page choice
 * @returns {ReducerAction}
 */
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
        newStartNbr = (choicePage - 1) * (choicePaging - 1) + (choicePage - 1);
        newEndNbr = newStartNbr + choicePaging;
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
