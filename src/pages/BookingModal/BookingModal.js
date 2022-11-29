import React from 'react';

const BookingModal = ({booking,setbooking}) => {
    const {name}=booking

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
     <div className="modal-box relative">
     <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
     <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
     <input type="text" placeholder="Type here" className="input w-full input-bordered" />
     <input type="text" placeholder="Type here" className="input w-full input-bordered" />
     <input type="text" placeholder="Type here" className="input w-full input-bordered" />
     <input type="text" placeholder="Type here" className="input w-full input-bordered" />
     <input type="text" placeholder="Type here" className="input w-full input-bordered" />
     <input type="text" placeholder="Type here" className="input w-full input-bordered" />
     <br></br>
     <input className='btn btn-accent w-full ' type="submit" value="Submit"></input>
     </form>
  </div>
</div>
            
        </>
    );
};

export default BookingModal;