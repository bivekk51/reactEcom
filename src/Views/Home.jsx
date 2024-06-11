import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md p-4 relative">
                        <NavLink to={`/product/${product.id}`} >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover mb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
                            />
                        </NavLink>
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-700 mb-2">${product.price}</p>
                        <p className="text-gray-500">{product.category}</p>
                        <button className="bg-blue-800 hover:bg-blue-900 text-white rounded-full px-4 py-2 absolute bottom-4 right-4">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
