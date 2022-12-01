import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provaider/AuthProvaider';

const BookingModal = ({booking,setbooking}) => {
    const {name,price}=booking
    const {user}=useContext(AuthContext)

    const handleBooking=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value
        const email=form.email.value;
        const productName=form.productName.value
        const price=form.price.value
        const location=form.location.value
        const mnumber=form.mnumber.value

        const bookinginfo={
            name,
            email,
            productName,
            price,
            location,
            mnumber
        }

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookinginfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                setbooking(null)
                toast.success('Booking confirmed')
            }
            
        })

        console.log(bookinginfo)
        

    }
    return (
        <>
   <input type="checkbox" id="booking-modal" className="modal-toggle" />
    <div className="modal">
     <div className="relative modal-box">
     <label htmlFor="booking-modal" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
     <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
     <input name='name' type="text" defaultValue={user && user?.displayName} placeholder="Type here" disabled className="w-full input input-bordered" />
     <input name='email' type="text"defaultValue={user && user?.email} placeholder="Type here"  disabled className="w-full input input-bordered" />
     <input name='productName' type="text" defaultValue={name} disabled placeholder="Type here" className="w-full input input-bordered" />
     <input name='price' type="text" defaultValue={price} disabled placeholder="Type here" className="w-full input input-bordered" />
     <input name='location' type="text" placeholder="Write your location" className="w-full input input-bordered" />
     <input name='mnumber' type="number" placeholder="Enter Your Mobile Number" className="w-full input input-bordered" />
     <br></br>
     <input className='w-full btn btn-accent ' type="submit" value="Submit"></input>
     </form>
  </div>
</div>
            
        </>
    );
};

export default BookingModal;