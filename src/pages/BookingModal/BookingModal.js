import React, { useContext } from 'react';
import { AuthContext } from '../../provaider/AuthProvaider';

const BookingModal = ({booking,setbooking}) => {
    const {name}=booking
    const {user}=useContext(AuthContext)

    const handleBooking=(event)=>{
        event.preventDefault();
        // const form=event.target;

        // const booking={
        //     name:name

        // }
        setbooking(null)

    }
    return (
        <>
   <input type="checkbox" id="booking-modal" className="modal-toggle" />
    <div className="modal">
     <div className="relative modal-box">
     <label htmlFor="booking-modal" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
     <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
     <input type="text" placeholder={user&& user.displayName} className="w-full input input-bordered" />
     <input type="text" placeholder={user && user.email} className="w-full input input-bordered" />
     <input type="text" placeholder="Type here" className="w-full input input-bordered" />
     <input type="text" placeholder="Type here" className="w-full input input-bordered" />
     <input type="text" placeholder="Type here" className="w-full input input-bordered" />
     <input type="text" placeholder="Type here" className="w-full input input-bordered" />
     <br></br>
     <input className='w-full btn btn-accent ' type="submit" value="Submit"></input>
     </form>
  </div>
</div>
            
        </>
    );
};

export default BookingModal;