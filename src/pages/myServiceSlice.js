import { createSlice } from "@reduxjs/toolkit";
const initialProducts = {
    products: [
        {id: 1, name: 'Potato', quantity: 5},
        {id: 2, name: 'Mango', quantity: 10},
    ]
}
export const myServiceSlice = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {
        showProducts: state => state,
        addProducts: (state, action) =>{
            state.products.push(action.payload)
        },
        deleteProducts: (state, action) =>{
            const id = action.payload
            state.products = state.products.filter(prod => prod.id !== id)
            console.log(state)
        }
    }

})

export const {showProducts, addProducts, deleteProducts} =  myServiceSlice.actions
export default myServiceSlice.reducer