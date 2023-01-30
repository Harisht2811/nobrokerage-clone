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
    updateDataTable();
  }, []);

  const updateDataTable = async () => {
    let docref = doc(db, 'user_images', email);
    console.log(docref);
    let sp = await getDoc(docref);
    console.log(sp)
                let data = sp.data();
                if(data === undefined){
                    setDoc(doc(db, "user_images", email), {
                   }); 
                }
                setpropImage(data.userImageDetails);

};
    
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
  <p id='titleText'>My properties :</p>

  <div className='myProps'>
    {
     propImage.map(item=>{
      return(
        <>
        <div className='properties'>
          <div className='fullData'>
          <p id='mypropText'>{item.city}</p>
          <img className='myImages' src={item.url} alt='Images'></img>
          <img  className='deleteIcon' src={Deleteicon} alt='close-image'></img>
          </div>
        </div>
        </>
      )
     })
    }
  </div>
 </>

  )
}

export default Property




  