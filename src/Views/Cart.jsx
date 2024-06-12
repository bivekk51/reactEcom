import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-24 h-24 object-cover mr-4"
                            />
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                                <p className="text-gray-700 mb-2">${product.price}</p>
                                <p className="text-gray-500">{product.category}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="bg-red-500 hover:bg-red-700 text-white rounded-full px-4 py-2 ml-4"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
