import React,{useState,useEffect} from 'react'
import "../header/header.css"
import {selectloginUser} from '../createslice'
import {  useSelector } from 'react-redux'
import Homelogo from "../../images/homepage/homelogo.svg"
import { useNavigate } from 'react-router-dom'

const Header=()=>{
    const navigate = useNavigate();
    const [details,setDetails] = useState([]);
   

  const signupClick = () => {
    navigate("/signup")
  }
  const loginClick = () => {
    navigate("/")

  }
  
  const logOut =()=>{
    sessionStorage.clear()
    navigate("/")
  }

  let currentUser = sessionStorage.getItem('id')

  useEffect(()=>{
    fetch(`http://localhost:8080/details/${currentUser}`,{headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
    }).then(res=>{
      console.log("afterApi",res)
      return res.json()
    }).then(data=>{
      console.log("loginData",data[0].id)
      setDetails(data)
    })
  },[])
  
  return (
   <>
   <div className='header'>
    <div className='leftSide'>
          <p id="noText">No</p>
          <img className='homeLogo' src={Homelogo} alt='logo' />
        </div>
        <div className='rightSide'>
        {
              details.map(item=>{
                return(
                  <>
                 <p  id='nameText'><i className="fa fa-user" aria-hidden="true"></i>  {item.name}</p> 
                 <p id='roleText'> Role: {item.role}</p>
                 {
                  item.role === 'Owner' || 'Tenant'?
                  <button onClick={logOut} className="btnLogout homeLogin">Log out</button>:''
                 }
                  </>
                )
              })
            }
            
         
        </div>
      </div>

   </>
  )
}

export default Header