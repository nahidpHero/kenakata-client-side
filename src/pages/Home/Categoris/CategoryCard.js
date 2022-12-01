import React from 'react';
import './CategoryCard.css'
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {name,img,id}=category
    return (
    <div className='mx-auto text-center '>
    <Link to={`/category/${id}`}>
    <div className="shadow-xl card w-72 bg-base-100 card-hover">
    <figure><img className=' w-72' src={img} alt="Shoes" /></figure>
    <div className="card-body">
    <p className='text-2xl font-bold '>{name}</p>
     </div>
     </div>
     </Link>
     </div>
    );
};

export default CategoryCard;