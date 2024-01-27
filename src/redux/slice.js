// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDark: false,
    activeMenu: true,
    username:"Ashri",
    isLoggedIn: false,
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
        },
        changeIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
        }
    },
});

export const { toggleDarkMode, toggleActiveMenu, changeIsLoggedIn, changeUsername } = slice.actions;
export default slice.reducer;