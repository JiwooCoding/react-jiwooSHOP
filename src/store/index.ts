import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import CategoriesSlice from "./categories/categories.slice";
import productsSlice from './products/products.slice';
import cartSlice from './cart/cart.slice';
import productSlice from './products/product.slice';
import orderSlice from './order/order.slice';

export const store = configureStore({
    reducer: {
        userSlice,
        CategoriesSlice,
        productsSlice,
        cartSlice,
        productSlice,
        orderSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch; 
