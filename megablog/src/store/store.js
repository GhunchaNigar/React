// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // ✅ Import the reducer

const store = configureStore({
    reducer: {
        auth: authReducer, // ✅ Add auth reducer
    }
});

export default store;
