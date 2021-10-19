import { createSlice } from '@reduxjs/toolkit'

export const feedRed = createSlice({
    name: 'selectedFeed',
    initialState: {
        value: {},
    },
    reducers: {
        selectFeed: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { selectFeed } = feedRed.actions;

export default feedRed.reducer;