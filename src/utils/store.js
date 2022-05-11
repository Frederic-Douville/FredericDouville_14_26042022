import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form.js';

export default configureStore({
    reducer: {
        form: formReducer,
    },
});
