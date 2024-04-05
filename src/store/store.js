import {configureStore} from '@reduxjs/toolkit';
import dataSlice from '../feature/dataSlice.js'
export default configureStore({
    reducer: {
     data : dataSlice
    },
});