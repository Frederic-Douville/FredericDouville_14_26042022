import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form.js';
import employeesReducer from '../features/employees.js';
import pagingReducer from '../features/paging.js';

export default configureStore({
    reducer: {
        form: formReducer,
        employees: employeesReducer,
        paging: pagingReducer,
    },
});
