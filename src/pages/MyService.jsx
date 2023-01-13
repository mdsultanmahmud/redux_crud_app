import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts } from './myServiceSlice';

const MyService = () => {
    const products = useSelector(state => (state.products.products))
    const dispatch = useDispatch()
    const handleDeleteProducts = id =>{
        dispatch(deleteProducts(id))
    }
    return (
        <div>
            {
                products.length > 0?
                <>
                    <h1 className='services-title'>My all Products</h1>
                    <hr />
                </>
                :
                <h1 className='services-title'>No Products Added</h1>
            }
            {
                products.length>0 &&
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Products Name</th>
                            <th>Products Quantity(kg)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(prod => {
                                const { id, name, quantity } = prod
                                return <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{quantity}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button onClick={() => handleDeleteProducts(id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    );
};

export default MyService;