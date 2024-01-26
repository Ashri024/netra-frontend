// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDark: false,
    activeMenu: true,
    username:"Ashri"
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleDarkMode(state) {
            state.isDark = !state.isDark;
        },
        toggleActiveMenu(state) {
            state.activeMenu = !state.activeMenu;
        },
        changeUsername(state, action) {
            state.username = action.payload;
        }
    },
});

export const { toggleDarkMode, toggleActiveMenu } = slice.actions;
export default slice.reducer;