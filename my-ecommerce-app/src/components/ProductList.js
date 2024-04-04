// // ProductList.js
// import React from 'react';
// import Product from './Product';

// const ProductList = ({ products, onAddToCart }) => {
//   return (
//     <div className="product-list">
//       {products.map(product => (
//         <Product key={product.id} product={product} onAddToCart={onAddToCart} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;
import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]); // State to store products

    useEffect(() => {
        // Function to fetch products from the backend
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data); // Update the state with the fetched products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts(); // Call the fetch function
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h2>Product List</h2>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} alt={product.name} style={{width: "100px"}} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
