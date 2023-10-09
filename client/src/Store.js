import ActionReducer from "./ActionReducer/ActionReducer";
import { configureStore } from '@reduxjs/toolkit';


export default configureStore({
    reducer:{
        counter:ActionReducer,
    }
})



