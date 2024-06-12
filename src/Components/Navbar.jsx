import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();

    return (
        <nav className="bg-blue-700 p-4 flex items-center">
            <div className="title text-white text-xl font-bold flex-grow">
                <NavLink to="/">
                    KinBech
                </NavLink>
            </div>
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
                    {
                        isAuthenticated ? (
                            <li >
                                <div className="text-white hover:text-gray-400 cursor-pointer">
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                </div>
                            </li>
                        ) : (
                            <li >
                                <div className="text-white hover:text-gray-400 cursor-pointer">
                                    <button onClick={() => loginWithRedirect()}>Log In</button>
                                </div>
                            </li>
                        )

                    }


                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
