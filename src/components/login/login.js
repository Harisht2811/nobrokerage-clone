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
  const [details,setDetails] = useState([]);
  const signupDetails=useSelector(selectUser)
  // console.log(signupDetails);
  // const role = signupDetails.role

  useEffect(()=>{
    // axios.get('http://localhost:8080/details').then(res=>{
    //   setDetails(res.data)
    //   console.log("details get",res.data)
    fetch("http://localhost:8080/details",{headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }

    }).then(res=>{
      setDetails(res.data)
      console.log("afterApi",res)
      return res.json()
    }).then(data=>{
      console.log(data)
    })
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
          if(response.data ==='Found'){
            navigate("/home")
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
      {
        details.map(item=>{
          return(
            <>
            <p>{item.role}</p>
            </>
          )
        })
      }
      <button type="submit" className="btn btn-primary">Login</button>
      <a className='signupLink' href="/signup">Sign up</a>
    </div>
  </div>
</form>
    </div>

    </>
  )
}

export default Login