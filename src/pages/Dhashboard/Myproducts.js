import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provaider/AuthProvaider';


const Myproducts = () => {
    const {user}=useContext(AuthContext);
    const [bookingItems,setBookingItem]=useState([])

    const url=`http://localhost:5000/bookings?email=${user?.email}`;
   

   useEffect(()=>{
       fetch(url)
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        setBookingItem(data)
       })
   },[])
   

    return (
        <div>
            <h3 className='mb-5 text-3xl font-bold'>My Products</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Product Name</th>
        <th>Booking Time</th>
        <th>Location</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookingItems.map((booking,i)=> <tr key={booking._id}>
            <th>{i+1}</th>
            <td>{booking.email}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Myproducts;