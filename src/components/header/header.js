import React from 'react'
import "../header/header.css"
import {selectloginUser} from '../createslice'
import {  useSelector } from 'react-redux'
import Homelogo from "../../images/homepage/homelogo.svg"
import { useNavigate } from 'react-router-dom'

const Header=()=>{
    const navigate = useNavigate();
    const roleDetails=useSelector(selectloginUser)
    console.log(roleDetails);
    let roleType= roleDetails.role

  const signupClick = () => {
    navigate("/signup")
  }
  const loginClick = () => {
    navigate("/")

  }
  return (
   <>
   <div className='homepage'>
    <div className='leftSide'>
          <p id="noText">No</p>
          <img className='homeLogo' src={Homelogo} alt='logo' />
        </div>
        <div className='rightSide'>
          <div className="col-sm-15">
            <p>{roleType}</p>
            <button onClick={signupClick} className="btn btn-primary">Signup</button>
            <button onClick={loginClick} className="btn btn-primary homeLogin">Login</button>
          </div>
        </div>
      </div>

   </>
  )
}

export default Header