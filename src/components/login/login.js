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

  useEffect(()=>{
    const getData = async () => {
      let response = await client.get('?_limit=10');
      setuserDetails(response.data);
   };
   getData()
  },[])
  const client = axios.create({
    baseURL: "http://localhost:8080/login" 
  });
  
  const  getLogin = (email,password) => {
    console.log('entered add post',password)
    client.post('', {
        email:email,
        password:password,
       })
       .then((response) => {
          console.log("after then",response)
          setuserDetails([response.data, ...userDetails]);
       }).catch((err)=>{
        console.log(err);
       })
    
  };

const handleSubmit=(e)=>{
    e.preventDefault();
 }
 
const signupDetails=useSelector(selectUser)
console.log(signupDetails);

const afterLogin=()=>{
  getLogin(loginEmail,loginPassword);
  // navigate("/home")
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