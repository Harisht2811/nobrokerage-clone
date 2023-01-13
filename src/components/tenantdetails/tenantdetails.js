import React, { useState } from 'react'
import "./tenantdetails.css"
import axios from 'axios';
import {selectloginUser,} from '../createslice'
import {  useSelector } from 'react-redux'
import cityOptions from '../../content/property.json'


const Tenantdetails = () => {
    const [city,setCity]=useState([]);
    const [imageDetails,setimageDetails]=useState([]);
    const [cityDetails,setCitydetails]=useState([]);
    const loginDetails=useSelector(selectloginUser)
    

    const getTenant = ()=>{
        console.log(city)
        getProperty()
       
    }

    

      const client1 = axios.create({
        baseURL: "http://localhost:8080/getproperty" 
      });
      
      const  getProperty = () => {
        client1.post('', {
          city:city
           })
           .then((response) => {
              console.log("after then",response)
              console.log("tenant Details",response)
              let cityDataprop = JSON.parse(response.data.data)
              console.log("city",cityDataprop)
              setCitydetails(cityDataprop)
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
            <div className='specificDetails'>
                {
                    imageDetails.map(item=>{
                        return <img className='tenantImages' src={item} alt='images'></img>
                    })
                }
                {
                    cityDetails.map(item=>{
                        return(
                            <>
                            <div className='wholeDetails'>
                            <div className='detailiedProps'>
                            <p>Type: {item.apartment}</p>
                            <p>BHK: {item.BHK}</p>
                            <p>Floor: {item.floor} Floor</p>
                            <p>Total Floor: {item.totalfloor} Floor</p>
                            <p>Age of Property: {item.age}</p>
                            <p>Facing: {item.direction}</p>
                            <p>Area: {item.area}</p>
                            </div>
                            </div>
                           
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tenantdetails