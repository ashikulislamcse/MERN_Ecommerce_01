import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
    reducer: {
        product: ProductSlice,
        cart: CartSlice,
    },
});

export default store;
