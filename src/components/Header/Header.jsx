import React from 'react';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='h-20 bg-slate-800 flex justify-between items-center px-16'>
            <img src={logo} alt="logo" />
            <div>
                <Link className='text-white text-lg pr-8 duration-200 hover:text-orange-400' to="/">Shop</Link>
                <Link className='text-white text-lg pr-8 duration-200 hover:text-orange-400' to="/orders">Orders</Link>
                <Link className='text-white text-lg pr-8 duration-200 hover:text-orange-400' to="/inventory">Inventory</Link>
                <Link className='text-white text-lg pr-8 duration-200 hover:text-orange-400' to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;