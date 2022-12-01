import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provaider/AuthProvaider';
import useTittle from '../../useTittle';
import img from '../../assets/images/signup.jpg'

const Signup = () => {
    const {createAccount,updateUser}=useContext(AuthContext);
    useTittle('Signup')
    const navigate=useNavigate()
   

    const handleSubmitSignup=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value
        const email=form.email.value;
        const password=form.password.value;
        const options=event.target.radio.value;
      
        
        createAccount(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user)
          toast('User Created Successfully')
          saveUser(name,email,options)
          form.reset()
          const userInfo={
            displayName:name
           
          }
          
  
          updateUser(userInfo)
          .then(()=>{})
          .catch(error=>console.log(error))
  
          
        })
        .catch(error=>console.error(error))
        
        const saveUser=(name,email,options)=>{
          const user={
            name,
            email,
            role:options==='seler'?options:'buyer'
          
          };
          console.log(user)
          fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(user)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            getUserToken(email)
            
          })
        }
       
      }

      const getUserToken=email=>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
          if(data.accessToken){
            localStorage.setItem('accessToken',data.accessToken)
            navigate('/')
          }
        })
      }
  


    return (
        <div className="w-full my-20 hero">
        <div className="grid flex-col gap-20 hero-content md:grid-cols-2 lg:flex-row">
          <div className="text-center lg:text-left">
          <img src={img}></img>
          </div>
          <div className="w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleSubmitSignup} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                <label className="label">
                  <span className="font-bold label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                </div>
                <div>
                  <input type="radio" value="buyer"  name="radio" className="radio checked:bg-red-500"  />Create a Buyer Account
                  <br></br>
                  <input type="radio" value="seler" name="radio" className="radio checked:bg-blue-500" />Create a Seler Account
                 </div>
              <div className="mt-6 form-control">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
           <div>
             <p className='text-center'>Alredy have an Acount <Link className='font-bold text-orange-600' to="/login">Login</Link> </p>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;