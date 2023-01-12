import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/addservices'}>Add Services</Link>
            <Link to={'/myservices'}>All Services</Link>
        </ul>
    </nav>
  );
};

export default Navbar;
