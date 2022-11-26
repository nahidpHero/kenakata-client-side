import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [allcategories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
          <h1 className='text-5xl text-center font-bold mt-20 '>Select Your Favorite Brands and Buy One</h1>
        <div className=' grid lg:grid-cols-3 sm:grid-cols-1  text-center mt-20 mb-20'>
            {
                allcategories.map(category=><CategoryCard
                key={category._id}
                category={category}
                ></CategoryCard>)
            }
        </div>
        </div>
             
      
        
    );
};

export default Categories;