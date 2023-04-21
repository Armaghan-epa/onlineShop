import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/products-slice";
import userReducer from "./reducers/user-slice";

const store = configureStore({
  reducer: { user: userReducer, product: productsSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
