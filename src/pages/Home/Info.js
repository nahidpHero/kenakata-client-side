import React from 'react';

const Info = () => {
    return (
      <div className='grid grid-cols-2'>
          <div>
        <div className="card card-side bg-base-100">
       <figure><img src="https://t-mobile.scene7.com/is/image/Tmusprod/Samsung-Galaxy-Z-Flip4-Bora-Purple-frontimage" alt="Movie"/></figure>
        <div className="card-body">
        <h2 className="card-title">New Phone is released!</h2>
        <p className='text-xl font-bold'>Sumsung-Galaxy-Z.</p>
        <p>Market Price:35500 </p>
        <p>Resel Price:15500</p>
        <p>Location:Rangpur,Bangladesh</p>
        <p>Use of Year:2.5 Year</p>
        <p>Selare Name:Akram Uddin </p>
        <p>Mobile:0178656321</p>
        <p>Post:2/10/2022</p>
        </div>
         </div>            
        </div>
        <div className=''>
            <h1 className='text-3xl font-bold text-center '>Welcome to The Shop</h1>
            <br />
            <br />
            <h2 className='text-xl '>This is awsome shop .buy product and enjoy your life .This market is very popular in this world so you can buy more product and enjoy your life</h2>
            <br />
            <br />
            <button className='btn btn-success'>Learn More About This Shop</button>

        </div>
      </div>
    );
};

export default Info;