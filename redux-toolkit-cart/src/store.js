import { configureStore} from "@reduxjs/toolkit";
import cartSliceReducer from "./features/cartSlice";
import modalsliceReducer from "./features/modalslice";
export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        modal: modalsliceReducer
    }
})