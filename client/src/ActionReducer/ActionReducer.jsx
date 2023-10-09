import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if(state.value == 0)
            {
                state.value = 0;
            }
            else
            {
                state.value -= 1
            }
            
        },
        incrementbyAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, incrementbyAmount } = counterSlice.actions;

export default counterSlice.reducer;