import React, { useState } from 'react'
import "./tenantdetails.css"
import axios from 'axios';
import {selectloginUser,userDetails} from '../createslice'
import {  useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import cityOptions from '../../content/property.json'


const Tenantdetails = () => {
    const [city,setCity]=useState([]);
    const loginDetails=useSelector(selectloginUser)
    const dispatch = useDispatch();
    
    const getTenant = ()=>{
        console.log(city)
        getCity(city)
        dispatch(userDetails({
            city:city
          }))
    }

    const client = axios.create({
        baseURL: "http://localhost:8080/tenantcity" 
      });
      
      const  getCity = (city) => {
        client.post('', {
            city:city
           })
           .then((response) => {
             console.log("tenant Details",response)
             let cityData = JSON.parse(response.data.data)
             console.log("city",cityData)
          
           }).catch((err)=>{
            console.log(err);
           })
      };
 
    return (
        <div className='tenantdetails'>
            <div className='property'>
                <div className='propertyForm'>
                    <p id="choose">Choose your city</p>
                    <select id='city' onChange={(e) => setCity(e.target.value)}>
                        {
                            cityOptions.map(item => {
                                return (
                                    <option value={item.value}>{item.label}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button className='postBtn' onClick={getTenant} >Get Details</button>
            </div>
        </div>
    )
}

export default Tenantdetails