import { createSlice } from "@reduxjs/toolkit";
const initialProducts = [
    {id: 1, name: 'Potato', quantity: 5},
    {id: 2, name: 'Mango', quantity: 10},
]
export const myServiceSlice = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {
        showProducts: state => state,
        addProducts: (state, action) =>{
            state.push(action.payload)
        }
    }

})

export const {showProducts, addProducts} =  myServiceSlice.actions
export default myServiceSlice.reducer