import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProducts } from './myServiceSlice';

const EditProducts = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [name, setName] = useState(location.state.name)
    const [quantity, setQuantity] = useState(location.state.quantity)
    const dispatch = useDispatch()
    const handleFormSubmit = event =>{
        event.preventDefault()
        dispatch(updateProducts({id: location.state.id, name, quantity}))
        navigate('/myservices')
    }
    return (
        <div>
            <h1 className='services-title'>Edit Product</h1>
            <hr />
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
                <button type='submit'>Update Product</button>
            </form>
        </div>
    );
};

export default EditProducts;