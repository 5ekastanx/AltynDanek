import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { loadState, saveState } from './persistCart';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: persistedState || { items: [] },
  },
});

store.subscribe(() => {
  saveState(store.getState().cart);
});