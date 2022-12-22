import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import '../login/login.css'
import store from '../store'
import {login, selectUser} from '../createslice'
import { Provider, useSelector } from 'react-redux'
// import bcrypt from "bcrypt";

const Login=()=>{
  const navigate = useNavigate();
  const [loginEmail,setloginEmail]=useState('');
  const [loginPassword,setloginPassword]=useState('');
 
const user = useSelector(selectUser);
 console.log(user)
const signupDetails=useSelector(selectUser)
console.log(signupDetails);

const afterLogin=()=>{
  if(signupDetails.email===loginEmail && signupDetails.password===loginPassword){
    navigate("/home")
  }
}

  // const bcrypt = require('bcrypt');
  // const saltRounds = 10;
  // const myPlaintextPassword = 's0/\/\P4$$w0rD';
  // const someOtherPlaintextPassword = 'not_bacon';
  // const salt = bcrypt.genSaltSync(saltRounds);
  // const hash = bcrypt.hashSync(myPlaintextPassword, salt);

  // bcrypt.compareSync(myPlaintextPassword, hash); // true
  // bcrypt.compareSync(someOtherPlaintextPassword, hash); // false

  // const[email,setEmail]=useState('');
  // const[password,setPassword]=useState('');
  return (
    <>

  <div className='login'>
      <h1>Login</h1>
    <form onSubmit={(e)=>handleSubmit=>(e)}> 

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
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Role</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
          <label className="form-check-label" >
            Owner
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
          <label className="form-check-label" >
            Tenant
          </label>
        </div>
       
      </div>
    </div>
  </fieldset>
  
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