import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    {document.body.style.backgroundColor="#b7acac"};
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email:"",password:""})
    const handleonsubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json= await response.json(); 
          // console.log(json);
          if(json.success){
            localStorage.setItem("token",json.Authtoken);
            navigate("/");
            props.showAlert("login successfull","success");
          }
          else{
            props.showAlert("Invalid Credentials","danger");
          }
    }
    const handleonchange=(e)=>{ 
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }
  return (
    <div className="container">
        <h1 className='text-center my-2 font-bold text-3xl'>Login to continue</h1>
    <form onSubmit={handleonsubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label font-bold">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleonchange} name="email" placeholder='Enter your email address'/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label font-bold">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleonchange} placeholder='Enter your password'/>
        </div>
        <div className='text-center d-grid gap-2 col-6 mx-auto mb-3'>
        <button type="submit" className="btn bg-black text-white mb-3">Login <i className="fa-solid fa-right-to-bracket"></i></button>
        <h1 className='mb-3 text-xl text-gray-200'>New user? Create an Account</h1>
        <Link to="/signup" className="btn bg-black text-white mb-3">Signup <i className="fa-sharp fa-solid fa-user-plus"></i></Link>
        </div>
    </form>
    </div>
  )
}

export default Login