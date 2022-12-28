import React from 'react'
import "../header/header.css"

import Homelogo from "../../images/homepage/homelogo.svg"
import { useNavigate } from 'react-router-dom'

const Header=()=>{
    const navigate = useNavigate();

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
            <button onClick={signupClick} className="btn btn-primary">Signup</button>
            <button onClick={loginClick} className="btn btn-primary homeLogin">Login</button>
          </div>
        </div>
      </div>

   </>
  )
}

export default Header