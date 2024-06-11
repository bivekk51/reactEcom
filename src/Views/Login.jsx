import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = () => {
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="login bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Login</h2>
                <label htmlFor="email" className="block text-gray-700">Email: </label>
                <input
                    type="email"
                    id="email"
                    className="block w-full p-2 border border-gray-300 rounded mt-2 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" className="block text-gray-700">Password: </label>
                <input
                    type="password"
                    id="password"
                    className="block w-full p-2 border border-gray-300 rounded mt-2 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="mb-4 text-center">
                    New user?{' '}
                    <span className="text-blue-500 cursor-pointer" >
                        <NavLink to="/createaccount">
                            Register
                        </NavLink>
                    </span>
                </p>
                <input
                    type="button"
                    value="Login"
                    id="login-btn"
                    className="bg-blue-500 text-white p-2 rounded w-full cursor-pointer"
                    onClick={userLogin}
                />
            </div>
        </div>
    );
};

export default LoginForm;
