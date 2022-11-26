import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {name,img,id}=category
    return (
    <div className='text-center mx-auto'>
    <Link to={`/category/${id}`}>
    <div className="card w-72 bg-base-100 shadow-xl">
    <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
    <p className='text-2xl font-bold '>{name}</p>
     </div>
     </div>
     </Link>
     </div>
    );
};

export default CategoryCard;