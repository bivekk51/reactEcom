import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    const userRegister = () => {
        // Add your registration logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Gender:', gender);
        console.log('Password:', password);
    };



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="register bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Register</h2>
                <label htmlFor="name" className="block text-gray-700">Full Name:</label>
                <input
                    type="text"
                    id="name"
                    className="block w-full p-2 border border-gray-300 rounded mt-2 mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="regemail" className="block text-gray-700">Email: </label>
                <input
                    type="email"
                    id="regemail"
                    className="block w-full p-2 border border-gray-300 rounded mt-2 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="block text-gray-700">Gender</label>
                <div className="flex items-center mt-2 mb-4">
                    <input
                        type="radio"
                        name="gen"
                        id="male"
                        value="male"
                        className="mr-2"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                    />
                    <label htmlFor="male" className="mr-4">Male</label>
                    <input
                        type="radio"
                        name="gen"
                        id="female"
                        value="female"
                        className="mr-2"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                    />
                    <label htmlFor="female" className="mr-4">Female</label>
                    <input
                        type="radio"
                        name="gen"
                        id="others"
                        value="others"
                        className="mr-2"
                        checked={gender === 'others'}
                        onChange={() => setGender('others')}
                    />
                    <label htmlFor="others">Others</label>
                </div>
                <label htmlFor="regpassword" className="block text-gray-700">Password</label>
                <input
                    type="password"
                    id="regpassword"
                    className="block w-full p-2 border border-gray-300 rounded mt-2 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="mb-4 text-center">
                    Already have an account?{' '}
                    <span className="text-blue-500 cursor-pointer">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </span>
                </p>
                <input
                    type="button"
                    value="Register"
                    id="register-btn"
                    className="bg-blue-500 text-white p-2 rounded w-full cursor-pointer"
                    onClick={userRegister}
                />
            </div>
        </div>
    );
};

export default RegisterForm;
