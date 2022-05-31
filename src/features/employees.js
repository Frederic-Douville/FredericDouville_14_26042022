import { createAction, createReducer } from '@reduxjs/toolkit';
import { selectEmployees } from '../utils/selectors';

const initialState = {
    status: 'void',
    response: null,
    error: null,
};

const employeesFetchRequesting = createAction('employees/fetchRequesting');
const employeesResolved = createAction('employees/resolved');
const employeesRejected = createAction('employees/rejected');
export const employeesAddNewOne = createAction('employees/addNewOne');

export async function getEmployeesData(store) {
    const status = selectEmployees(store.getState()).status;
    if (status === 'pending' || status === 'updating' || status === 'updated') {
        return;
    }
    store.dispatch(employeesFetchRequesting());
    try {
        const response = await fetch(
            'https://raw.githubusercontent.com/Frederic-Douville/FredericDouville_14_26042022/main/src/datas/employees.json'
        );
        const data = await response.json();
        store.dispatch(employeesResolved(data));
    } catch (error) {
        store.dispatch(employeesRejected(error));
    }
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(employeesFetchRequesting, (draft) => {
            if (draft.status === 'void') {
                draft.status = 'pending';
                return;
            }
            if (draft.status === 'rejected') {
                draft.status = 'pending';
                draft.error = null;
                return;
            }
            if (draft.status === 'resolved') {
                draft.status = 'updating';
                return;
            }
        })
        .addCase(employeesResolved, (draft, action) => {
            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.status = 'resolved';
                draft.response = action.payload;
                return;
            }
        })
        .addCase(employeesRejected, (draft, action) => {
            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.status = 'rejected';
                draft.response = null;
                draft.error = action.payload;
                return;
            }
        })
        .addCase(employeesAddNewOne, (draft, action) => {
            if (draft.status === 'resolved') {
                draft.status = 'updated';
                draft.response = action.payload;
            }
        })
);
