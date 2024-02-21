import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../cartItems';

const initialState = {
    cartItems: cartItems,
    ItemsAmount: 4,
    total: 0,
    isLoading: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increaseAmount: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount = cartItem.amount + 1
        },
        decreaseAmount: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            if (cartItem.amount > 1)
                cartItem.amount = cartItem.amount - 1
        },
        calculateTotal: (state) => {
            let totalItems = 0
            let totalPrice = 0
            state.cartItems.forEach((item) => {
                totalItems += item.amount
                totalPrice += item.price * item.amount
            })
            state.ItemsAmount = totalItems
            state.total = totalPrice
        }
    }

})
export const { clearCart, removeItem, increaseAmount, decreaseAmount, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;