import { createAction, createReducer } from '@reduxjs/toolkit';
import { selectForm } from '../utils/selectors';

const initialState = {
    status: 'void',
    data: null,
    errorMessages: null,
};

const formChecking = createAction('form/checking');
const formResolved = createAction('form/resolved');
const formRejected = createAction('form/rejected');
export const formReset = createAction('form/reset');

/**
 * function that check the validity of the form entries when it is submit.
 * @param {Function} store hook from react-redux: useStore()
 * @param {Object} employeeData new employee data
 * @returns {ReducerAction} save the data if they are valid
 * @returns {ReducerAction} create an object of error messages if the data are not valid
 */
export function checkingData(store, employeeData) {
    const status = selectForm(store.getState()).status;
    if (status === 'resolved') {
        return;
    }
    store.dispatch(formChecking());
    const regexLetter = /^[a-zA-Zéèêëàâäùûüôöçîï -]+$/;
    const regexNumber = /^[0-9]+$/;
    const regexAdress = /^[a-zA-Zéèêëàâäùûüôöçîï0-9 ]+$/;
    const errorMsg = {
        firstname: '',
        lastname: '',
        birthday: '',
        startday: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        department: '',
    };
    const firstNameValid =
        employeeData.firstname.match(regexLetter) &&
        employeeData.firstname !== ''
            ? true
            : (errorMsg.firstname =
                  'Please enter a name here using only letters.');
    const lastNameValid =
        employeeData.lastname.match(regexLetter) && employeeData.lastname !== ''
            ? true
            : (errorMsg.lastname =
                  'Please enter a name here using only letters.');
    const birthdayValid =
        employeeData.birthday !== ''
            ? true
            : (errorMsg.birthday = 'Please choose a date.');
    const startdayValid =
        employeeData.startday !== ''
            ? true
            : (errorMsg.startday = 'Please choose a date.');
    const streetValid =
        employeeData.street.match(regexAdress) && employeeData.street !== ''
            ? true
            : (errorMsg.street =
                  'Please enter an adress here using only numbers and letters.');
    const cityValid =
        employeeData.city.match(regexLetter) && employeeData.city !== ''
            ? true
            : (errorMsg.city = 'Please enter a City here using only letters.');
    const stateValid =
        employeeData.state !== ''
            ? true
            : (errorMsg.state = 'Please choose a State.');
    const zipCodeValid =
        employeeData.zipcode.match(regexNumber) && employeeData.zipcode !== ''
            ? true
            : (errorMsg.zipcode =
                  'Please enter a Zip Code here using only numbers.');
    const departmentValid =
        employeeData.department !== ''
            ? true
            : (errorMsg.department = 'Please choose a department.');

    return firstNameValid === true &&
        lastNameValid === true &&
        birthdayValid === true &&
        startdayValid === true &&
        streetValid === true &&
        cityValid === true &&
        stateValid === true &&
        zipCodeValid === true &&
        departmentValid === true
        ? store.dispatch(formResolved(employeeData))
        : store.dispatch(formRejected(errorMsg));
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(formChecking, (draft) => {
            if (draft.status === 'void' || draft.status === 'rejected') {
                draft.status = 'checking';
                draft.errorMessages = null;
                return;
            }
        })
        .addCase(formResolved, (draft, action) => {
            if (draft.status === 'checking') {
                draft.status = 'resolved';
                draft.data = action.payload;
                return;
            }
        })
        .addCase(formRejected, (draft, action) => {
            if (draft.status === 'checking') {
                draft.status = 'rejected';
                draft.errorMessages = action.payload;
                return;
            }
        })
        .addCase(formReset, (draft) => {
            draft.status = 'void';
            draft.data = null;
            draft.errorMessages = null;
            return;
        })
);
