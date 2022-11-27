import React from 'react';

const ProductCard = ({product,setbooking}) => {
    const {name,img}=product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <label htmlFor="booking-modal" onClick={()=>setbooking(product)} className="btn btn-primary text-white">Buy now</label>
          </div>
        </div>
        </div>
    
    );
};

export default ProductCard;

