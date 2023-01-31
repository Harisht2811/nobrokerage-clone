import React,{useState,useEffect,useRef} from 'react'
import Header from "../../components/header/header"
import cityOptions  from '../../content/property.json'
import {selectloginUser,userDetails} from '../createslice'
import {  useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import "./property.css"
import Deleteicon from "../../images/owner/close.svg"
import {  json, useNavigate } from 'react-router-dom'
import { storage,db } from "../firebase";
import { addDoc, collection, doc, Firestore, getDocs, getFirestore, setDoc, getDoc, arrayUnion,updateDoc } from 'firebase/firestore';


const Property=()=>{
  const [city,setCity]=useState([]);
  const [propImage,setpropImage]=useState([]);

  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);

  const navigate = useNavigate()
  const loginDetails = useSelector(selectloginUser)
  const email = loginDetails.email

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetch(`http://localhost:8080/getbookedprops`).then(response=>{
      console.log(response)
      return response.json()
    }).then(data=>{
      console.log(JSON.parse(data.data))
    })
  }, []);

 
    
    const postCity =()=>{
      dispatch(userDetails({
        city:city
      }))
      navigate("/details")
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




  