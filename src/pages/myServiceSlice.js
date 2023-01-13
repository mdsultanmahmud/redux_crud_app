import { createSlice } from "@reduxjs/toolkit";
const initialProducts = [
    {id: 1, name: 'Potato', quantity: 5},
    {id: 2, name: 'Mango', quantity: 10},
]
export const myServiceSlice = createSlice({
    name: 'myService',
    initialState: initialProducts,
    reducers: {
        showProducts: state => state
    }

})

export const {showProducts} =  myServiceSlice.actions
export default myServiceSlice.reducer