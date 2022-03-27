import {configureStore} from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';
import {useDispatch} from "react-redux";

const store = configureStore({
    reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // E

export default store;
