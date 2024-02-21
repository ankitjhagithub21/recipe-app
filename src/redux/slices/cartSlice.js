import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
    value: JSON.parse(localStorage.getItem('meals')) || [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const mealIndex = state.value.findIndex(meal => meal.id === action.payload.id);

            if (mealIndex === -1) {
                const updatedValue = [...state.value, action.payload];
                state.value = updatedValue;
                localStorage.setItem('meals', JSON.stringify(updatedValue));
                toast.success("Added to favourite");
            } else {
                toast.error("Already in favourite Meals");
            }
        },
        removeFromCart: (state, action) => {
            const updatedValue = state.value.filter(meal => meal.id !== action.payload);
            state.value = updatedValue;
            localStorage.setItem('meals', JSON.stringify(updatedValue));
            toast.success("Removed from favourite.")
        },
    },
})



export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer