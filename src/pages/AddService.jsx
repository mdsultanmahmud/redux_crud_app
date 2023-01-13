import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProducts } from './myServiceSlice';

const AddService = () => {
    const numberOfProducts = useSelector(state => state.products.products.length)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [name, setName] = useState('')
    let [quantity, setQuantity] = useState()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const product = {id: numberOfProducts + 1,name, quantity}
        dispatch(addProducts(product))
        navigate('/myservices', {replace: true})
    }
    return (
        <div>
            <h1 className='services-title'>Please add a Products</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="input-field">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id='name'
                        placeholder='Enter Products Name'
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        required
                        />
                        
                </div>
                <div className="input-field">
                    <label htmlFor="quantity">Quantity: </label>
                    <input 
                    type="number" 
                    id='quantity' 
                    placeholder='Enter Products Quantity' 
                    value={quantity} 
                    onChange={e => setQuantity(e.target.value)}
                    required
                    />
                </div>
                <button type='submit'>Add Product</button>
            </form>
        </div>
    );
};

export default AddService;