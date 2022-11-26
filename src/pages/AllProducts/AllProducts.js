import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const allproducts=useLoaderData()
    
    return (
        <div className='grid grid-cols-3'>
            {
                allproducts.map(product=><ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default AllProducts;