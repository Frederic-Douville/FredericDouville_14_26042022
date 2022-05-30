import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form.js';
import modalReducer from '../features/modal.js';
import employeesReducer from '../features/employees.js';

export default configureStore({
    reducer: {
        form: formReducer,
        modal: modalReducer,
        employees: employeesReducer,
    },
});
