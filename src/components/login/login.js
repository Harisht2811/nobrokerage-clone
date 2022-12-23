import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
import '../login/login.css'
import {selectUser} from '../createslice'
import {  useSelector } from 'react-redux'
import axios from 'axios';

const Login=()=>{
  const navigate = useNavigate();
  const [loginEmail,setloginEmail]=useState('');
  const [loginPassword,setloginPassword]=useState('');
  const [userDetails,setuserDetails] = useState(''); 

  const fetchData =async() => {
    console.log("harish")
   const response = await axios.get("http://localhost:8080/userdetails")
   setuserDetails(response.data);
   console.log(userDetails)
  }

  useEffect(() => {
    fetchData();
  },[])  

const handleSubmit=(e)=>{
    e.preventDefault();
 }
 
const signupDetails=useSelector(selectUser)
console.log(signupDetails);

const afterLogin=()=>{
  if(userDetails.email===loginEmail && userDetails.password===loginPassword ){
    navigate("/home")
  }
}



  return (
    <>

  <div className='login'>
      <h1>Login</h1>
    <form onSubmit={(e)=>handleSubmit(e)}> 

  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={(e)=>setloginEmail(e.target.value)}></input>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={(e)=>setloginPassword(e.target.value)}></input>
    </div>
  </div>
  
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary" onClick={afterLogin}>Login</button>
    </div>
  </div>
</form>
    </div>

    </>
  )
}

export default Login