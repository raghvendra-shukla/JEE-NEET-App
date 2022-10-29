import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signup(props) {
  {document.body.style.backgroundColor="#b7acac"};
  const navigate = useNavigate();
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    const handleonsubmit= async (e)=>{
        e.preventDefault();
        // const  {name,email,password}=credentials;
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
          });
          const json= await response.json(); 
          // console.log(json);
          if(json.success){
            localStorage.setItem("token",json.Authtoken);
            navigate("/");
            props.showAlert("Signup Successfully","success")
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
      <h1 className='text-center my-2 font-bold text-3xl'>Create a account</h1>
    <form onSubmit={handleonsubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label font-bold">Name</label>
            <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={handleonchange} placeholder='Enter your name'/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label font-bold">Email address</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={handleonchange} placeholder='Enter your email address'/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label font-bold">Password</label>
            <input type="password" className="form-control" id="password" name="password"onChange={handleonchange} minLength={5} required placeholder='Set your password'/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label font-bold">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword"onChange={handleonchange} minLength={5} required placeholder='Enter the confirm password'/>
        </div>
        <div className='text-center d-grid gap-2 col-6 mx-auto mb-1'>
        <button type="submit" className="btn bg-black text-white mb-1">Signup <i className="fa-sharp fa-solid fa-user-plus"></i></button>
        <h1 className='mb-1 text-xl text-gray-200'>Already have a account</h1>
        <Link to="/login" className="btn bg-black text-white mb-1">Login <i className="fa-solid fa-right-to-bracket"></i></Link>
        </div>
    </form>
    </div>
  )
}

export default Signup