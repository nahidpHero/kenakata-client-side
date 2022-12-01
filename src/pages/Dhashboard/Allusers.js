import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Allusers = () => {
    const [users,setusers]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            setusers(data)
        })

    },[])

    const handleMakeAdmin=(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.upsertedCount>0){
                toast.success('Make admin successful')
            }
            console.log(data)
        })
        

    }
    return (
        <div>
            <h2 className='text-3xl'>All Users</h2>
        <div className="overflow-x-auto">
       <table className="table w-full">
        {/* <!-- head --> */}
       <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>USER</th>
        <th>delete</th>
        
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user,i)=><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td className='btn btn-success max-sm:'>delete</td>
            <td>{ user?.role!=='admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-success max-sm:'>Make Admin</button>}</td>
        </tr>)
     }
    </tbody>
  </table>
</div>
</div>

    );
};

export default Allusers;


 