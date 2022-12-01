import React, {useContext} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provaider/AuthProvaider';
import useTittle from '../../useTittle';
import toast from 'react-hot-toast';



const Login = () => {
  const {login,googleSignIn}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  useTittle('login')
  
  const from=location.state?.from?.pathname || '/'



  const handleSubmit=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)

    login(email,password)
    .then(result=>{
      const user=result.user
      const currentUser={
        email:user.email
      }
      console.log(user)
      toast('Login successfully')
      // get jwt token
      fetch('http://localhost:5000/jwt',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        localStorage.setItem('genius-token',data.token)
        navigate(from ,{replace:true})
      })

    })
    .catch(error=>console.log(error))
    

  }
  const handleGooleSignIn=()=>{
    googleSignIn()
    .then(result=>{
      const user=result.user
      console.log(user)
      toast('Login successfully')
      navigate('/')
      const user2={
        name:user.displayName,
        email:user.email,
        role:"seler"
      }

      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user2)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
    
    })
    .catch(error=>console.error(error))
   
  }
    return (
      <div>
      <div className="w-full my-20 hero">
    <div className="grid flex-col gap-20 hero-content md:grid-cols-2 lg:flex-row">
      <div className="text-center lg:text-left">
      {/* <img src=""></img> */}
      </div>
      <div className="w-full max-w-sm shadow-2xl card bg-base-100">
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
            <input type="password" name='password' placeholder="password" className="input input-bordered" />
            <label className="label">
              <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
            </label>
          </div>
          <div className="mt-6 form-control">
          <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <div  className="w-full text-center ">
          <button  onClick={handleGooleSignIn} className="px-10 m-4 btn btn-primary"><FaGoogle></FaGoogle> Sign In With google</button>
        </div>
        
       <div>
         <p className='text-center'>New to City Tours <Link className='font-bold text-orange-600' to="/signup">Sign Up</Link> </p>
       </div>
      </div>
    </div>
  </div>
        
    </div>
            
        
    );
};

export default Login;