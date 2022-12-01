import React from 'react';

const ProductCard = ({product,setbooking}) => {
    const {name,img,location,marketPrice,price,selarName,post,mobile,useOfyear,condition}=product
    return (
        <div className="mb-10 shadow-xl card card-compact w-96 bg-base-100">
        <div className='w-72 '>
        <figure><img src={img} alt="Shoes" /></figure>
        </div>
        <div className="font-bold card-body">
          <h2 className="card-title">Name:{name}</h2>
          <p>Location:{location}</p>
          <p>Original Price:{marketPrice}</p>
          <p>Resale Price:{price}</p>
          <p>Use of Years:{useOfyear}</p>
          <p>Sellar Name:{selarName}</p>
          <p>Sellar Number:{mobile}</p>
          <p>Condition type:{condition}</p>
          <p>Post:{post}</p>
          <div className="justify-end card-actions">
            <label htmlFor="booking-modal" onClick={()=>setbooking(product)} className="text-white btn btn-primary">BOOKING</label>
          </div>
        </div>
        </div>
    
    );
};

export default ProductCard;

