import {createSlice} from "@reduxjs/toolkit";


const initialState = [];

const cartSlice = createSlice({

    name : "cart",
    initialState,
    reducers : {
        // Update Quantity Instead of Adding New Row
        
        // addItems: (state, action) => {
        //     const existingItem = state.find(item => item.id === action.payload.id);
        //     if (existingItem) {
        //         existingItem.quantity += 1; // Increment quantity if item exists
        //     } else {
        //         state.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
        //     }
        // },


        // addItems : (state,action) => {
        //     state.push(action.payload);
        // },

        addItems: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                // state.push({ ...action.payload, quantity: 1 });
                            state.push(action.payload);

            }
        },
        removeItem: (state,action) =>{

            return state.filter(item => item.id != action.payload);
        },
        removeAllItems: (state) => {
            return[];
        }
    }
})

export const getTotalPrice = (state) => state.cart.reduce((total, item) => total + (item.price * item.quantity), 0 )
export const {addItems , removeItem,removeAllItems} = cartSlice.actions;
export default cartSlice.reducer;