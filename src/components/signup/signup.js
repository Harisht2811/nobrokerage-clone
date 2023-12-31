import React,{useEffect, useState} from 'react'
import '../signup/signup.css'
import axios from "axios";
import {signup} from '../createslice'
import {  useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../userAuth';




const Signup=()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[posts,setPosts] = useState('');
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[phonenumber,setPhonenumber] = useState('');
  const[ownerRole,setOwner]=useState('');
  const[tenantRole,setTenant]=useState('');
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();


  const bcrypt = require('bcryptjs');
  const saltRounds = 10;
  const hash = bcrypt.hash(password,saltRounds);
  
  console.log(hash)

const onchangeOwner =()=>{
  setOwner('Owner')
  setTenant('')
}  
const onchangeTenant =()=>{
  setTenant('Tenant')
  setOwner('')
}

const handleSubmit=async(e)=>{
   e.preventDefault();
}


const onClicksignup=async(e)=>{
  e.preventDefault();
  console.log("owner",ownerRole);
  console.log("tenant",tenantRole);
  let role = ownerRole!==''?ownerRole:tenantRole;
  try {
    let role = ownerRole!==''?ownerRole:tenantRole;
     await signUp(email, password,role);
   } catch (err) {
     setError(err.message);
 
   }
  dispatch(signup({
    name:name,
    email:email,
    password:password,
    phonenumber:phonenumber,
    role
   }))
  addPosts(name, email,password,phonenumber,role);
  navigate('/')

}

// var admin = require("firebase-admin");

//     admin
//       .auth()
//       .setCustomUserClaims(uid, { admin: true })
//       .then(() => {
    
//       }); 

const onClicklogin=()=>{
  navigate('/')
}

useEffect(()=>{
  const fetchPost = async () => {
    let response = await client.get('?_limit=10');
    setPosts(response.data);
 };
 fetchPost()
},[])
const client = axios.create({
  baseURL: "http://localhost:8080/userdetails" 
});

const addPosts =(name, email,password,phonenumber,role) => {
  client.post('', {
      name:name,
      email:email,
      password:password,
      phonenumber:phonenumber,
      role:role
     })
     .then((response) => {
        console.log("after then",response)
        setPosts([response.data, ...posts]);
     }).catch((err)=>{
      console.log(err);
     })
  
};


  return (
    <>

    <div className='signup'>
      <h1>Sign Up</h1>
    <form onSubmit={(e)=>handleSubmit(e)}>
    <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="name" className="form-control" id="inputEmail3" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
    </div>
  </div>

  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Phone Number</label>
    <div className="col-sm-10">
      <input type="phonenumber" className="form-control" id="inputEmail3" placeholder="Phone Number" onChange={(e) => setPhonenumber(e.target.value)}></input>
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Role</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"  onChange={onchangeOwner}></input>
          <label className="form-check-label">
            Owner
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" onChange={onchangeTenant}></input>
          <label className="form-check-label" >
            Tenant
          </label>
        </div>
       
      </div>
    </div>
  </fieldset>
  
  <div className="form-group row">
    <div className="col-sm-10">
      <button onClick={onClicksignup}  className="btnSignup">Sign up </button>
      <button onClick={onClicklogin}  className="btnLogin loginBtn">Login</button>
    </div>
  </div>
</form>
    </div>

    </>
  )
}

export default Signup




