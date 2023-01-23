import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
import '../login/login.css'
import {login} from '../createslice'
import {selectUser} from '../createslice'
import {  useDispatch } from 'react-redux'
import {  useSelector } from 'react-redux'
import axios from 'axios';

const Login=()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginEmail,setloginEmail]=useState('');
  const [loginPassword,setloginPassword]=useState('');
  const [details,setDetails]=useState([]);
  const signupDetails=useSelector(selectUser)
  
 

  useEffect(()=>{
   
  },[])
  

 

  const getdetails=(id)=>{
    fetch(`http://localhost:8080/details/${id}`,{headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
    }).then(res=>{
      console.log("afterApi",res)
      return res.json()
    }).then(data=>{
      console.log("loginData",data[0].id)
      setDetails(data)
      if(data[0].role ==='Owner'){
        navigate("/city")
      }
      else if(data[0].role === 'Tenant'){
        navigate("/tenant")
      }
    })
  } 

  const client = axios.create({
    baseURL: "http://localhost:8080/login" 
  });
  
  const  getLogin = (email,password) => {
    client.post('', {
        email:email,
        password:password,
       })
       .then((response) => {
          console.log("after then",response)
          if(response.data.status ==='Found'){
            
            let id = JSON.parse(response.data.data)
            console.log("before navifgate",id.id)
            sessionStorage.setItem("id",id.id)
            
            getdetails(id.id);
            // navigate('owner')
          }
       }).catch((err)=>{
        console.log(err);
       })
  };
  
const handleSubmit=(e)=>{
  console.log("Clicked1")
    e.preventDefault();
    dispatch(login({
      email:loginEmail,
      password:loginPassword,
      // role:role
     }))
    getLogin(loginEmail,loginPassword);
    
   
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
      <button type="submit" className="btnLogin">Login</button>
      <a className='signupLink' href="/signup">Sign up</a>
    </div>
  </div>
</form>
    </div>

    </>
  )
}

export default Login