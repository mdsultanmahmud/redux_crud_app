import React from 'react';
import { useSelector } from 'react-redux';

const MyService = () => {
    const products = useSelector(state => (state.products))
    return (
        <div>
            <h1 className='services-title'>My all services</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Products Name</th>
                        <th>Products Quantity</th>
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
                                    <button>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyService;