import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="bg-blue-700 p-4 flex items-center">
            <div className="title text-white text-xl font-bold flex-grow">KinBech</div>
            <div className="links">
                <ul className="flex justify-end items-center space-x-4">
                    <li >
                        <NavLink to="/cart" className="text-white hover:text-gray-400 cursor-pointer">
                            🛒
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/" className="text-white hover:text-gray-400 cursor-pointer">
                            Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/login" className="text-white hover:text-gray-400 cursor-pointer">
                            Login
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/createaccount" className="text-white hover:text-gray-400 cursor-pointer">
                            Signup
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
