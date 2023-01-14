import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'
const initialProducts = {
    products: [
        {id: uuidv4(), name: 'Potato', quantity: 5},
        {id: uuidv4(), name: 'Mango', quantity: 10},
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
        },
        updateProducts: (state, action) =>{
            const {id, name, quantity} = action.payload
            const isExist = state.products.filter(prod => prod.id === id)
            if(isExist){
                isExist[0].name = name
                isExist[0].quantity = quantity
            }
        }
    }

})

export const {showProducts, addProducts, deleteProducts, updateProducts} =  myServiceSlice.actions
export default myServiceSlice.reducer