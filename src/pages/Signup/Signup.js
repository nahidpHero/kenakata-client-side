import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provaider/AuthProvaider';

const Signup = () => {
    const {createAccount}=useContext(AuthContext);

    const handleSubmitSignup=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        createAccount(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user)
          form.reset()
        })
        .catch(error=>console.error(error))
      }
  


    return (
        <div className="w-full my-20 hero">
        <div className="grid flex-col gap-20 hero-content md:grid-cols-2 lg:flex-row">
          <div className="text-center lg:text-left">
          {/* <img src={signupImg}></img> */}
          </div>
          <div className="w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleSubmitSignup} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confurm Password</span>
                </label>
                <input type="password" name='confurm-password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
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