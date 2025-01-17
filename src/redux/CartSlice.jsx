import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const itemIndex = state.products.find(item => item.id === newItem.id);
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    image:newItem.image,
                    name:newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
        removeFromcart(state,action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);
            if(findItem){
                state.totalPrice -= findItem.totalPrice
                state.totalQuantity -= findItem.quantity
                state.products = state.products.filter(item => item.id !== id)
            }
        },
        IncreaseQuantity(state,action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);
            if(findItem){
                findItem.quantity++;
                findItem.totalPrice += findItem.price
                state.totalQuantity++;
                state.totalPrice += findItem.price
            }
        },
        DecreaseQuantity(state,action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);
            if(findItem.quantity > 1){
            if(findItem){
                findItem.quantity--;
                findItem.totalPrice -= findItem.price
                state.totalQuantity--;
                state.totalPrice -= findItem.price
            }
        }
        },
    },
});

export const { addToCart, removeFromcart, IncreaseQuantity, DecreaseQuantity} = CartSlice.actions;
export default CartSlice.reducer;