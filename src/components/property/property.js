import React,{useState,useEffect} from 'react'
import Header from "../../components/header/header"
import cityOptions  from '../../content/property.json'
import {selectloginUser,userDetails} from '../createslice'
import {  useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import axios from 'axios';
import "./property.css"
import {  useNavigate } from 'react-router-dom'

const Property=()=>{
  const [city,setCity]=useState([]);
  const dispatch = useDispatch();
  console.log(cityOptions)
  const navigate = useNavigate()
  const loginDetails = useSelector(selectloginUser)
  const email = loginDetails.email
    
    const client = axios.create({
      baseURL: "http://localhost:8080/propertycity" 
    });
    
    const  getcity = (email) => {
      client.post('', {
          email:email,
          city:city,
         })
         .then((response) => {
            console.log(response)
         }).catch((err)=>{
          console.log(err);
         })
    };
    const postCity =()=>{
      getcity(email);
      dispatch(userDetails({
        city:city
      }))
      navigate("/applydetails")
    }

  return (
    <>
  
  <Header/>
  <div className='property'>
  <div className='propertyForm'>
    <p id="choose">Choose your city</p>
  <select id='city' onChange={(e)=>setCity(e.target.value)}>
        {
            cityOptions.map(item=>{
                return(
                    <option value={item.value}>{item.label}</option>
                )
            })
        }
  </select>
  </div>
  <button className='postBtn' onClick={postCity}>Post Now</button>
  </div>
 </>

  )
}

export default Property




  