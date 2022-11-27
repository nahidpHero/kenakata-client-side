import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const handleSubmit=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)

  }
  const handleGooleSignIn=()=>{
   
  }
    return (
      <div>
      <div className="hero w-full my-20">
    <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
      <div className="text-center lg:text-left">
      <img src=""></img>
      </div>
      <div className="card  w-full  max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" name='password' placeholder="password" className="input input-bordered" />
            <label className="label">
              <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
            </label>
          </div>
          <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <div  className="text-center w-full ">
          <button onClick={handleGooleSignIn} className="btn btn-primary m-4 px-10"><FaGoogle></FaGoogle> Sign In With google</button>
        </div>
        
       <div>
         <p className='text-center'>New to City Tours <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
       </div>
      </div>
    </div>
  </div>
        
    </div>
            
        
    );
};

export default Login;