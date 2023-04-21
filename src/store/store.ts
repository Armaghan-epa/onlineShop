import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cart-slice";
import productsSlice from "./reducers/products-slice";
import userReducer from "./reducers/user-slice";

const store = configureStore({
  reducer: { user: userReducer, product: productsSlice, cart: cartSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
