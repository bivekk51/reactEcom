import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({})
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div className="container mx-auto mt-8 px-4">
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
                <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-4">${product.price}</p>
                <p className="text-gray-500 mb-4">{product.category}</p>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <button className="bg-blue-800 hover:bg-blue-900 text-white rounded-full px-4 py-2 w-full">
                    Add to Cart
                </button>
            </div>
        </div>
    );

}

export default Product