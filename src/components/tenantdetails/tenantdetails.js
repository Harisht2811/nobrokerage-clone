import React, { useState } from 'react'
import "./tenantdetails.css"
import axios from 'axios';
import {selectloginUser,userDetails} from '../createslice'
import {  useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import cityOptions from '../../content/property.json'


const Tenantdetails = () => {
    const [city,setCity]=useState([]);
    const [imageDetails,setimageDetails]=useState([]);
    const [cityDetails,setCitydetails]=useState([]);
    const loginDetails=useSelector(selectloginUser)
    const dispatch = useDispatch();
    

    const getTenant = ()=>{
        console.log(city)
        getCity()
        getProperty()
        dispatch(userDetails({
            city:city
          }))
    }

    const client = axios.create({
        baseURL: "http://localhost:8080/tenantcity" 
      });
      
      const  getCity = () => {
        client.post('', {
            city:city
           })
           .then((response) => {
             console.log("tenant Details",response)
             let cityData = JSON.parse(response.data.data)
             console.log("city",cityData)
             setimageDetails(cityData.userimage[0])
          
           }).catch((err)=>{
            console.log(err);
           })
      };

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
                            <div className='detailiedProps'>
                            <p>{item.apartment}</p>
                            <p>{item.BHK}</p>
                            <p>{item.floor} Floor</p>
                            <p>{item.totalfloor} Floors</p>
                            <p>{item.age}</p>
                            <p>{item.direction}</p>
                            <p>{item.area}</p>
                            </div>
                            </>
                        )
                    })
                }
                {/* {
                    cityDetails.apartment
                } */}
            </div>
        </div>
    )
}

export default Tenantdetails