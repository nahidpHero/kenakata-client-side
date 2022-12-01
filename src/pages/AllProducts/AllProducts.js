import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const allproducts=useLoaderData()
    const [booking,setbooking]=useState(null)
    
    return (
            <section>
                 <div className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                allproducts.map(product=><ProductCard
                key={product._id}
                product={product}
                setbooking={setbooking}
                ></ProductCard>)
            }
          </div>
         {booking &&
             <BookingModal
             booking={booking}
             setbooking={setbooking}
            ></BookingModal>
         }
         </section>
          
      
    );
};

export default AllProducts;