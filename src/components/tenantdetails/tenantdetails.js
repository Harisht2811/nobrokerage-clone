import React, { useState } from 'react'
import "./tenantdetails.css"
import cityOptions from '../../content/property.json'


const Tenantdetails = () => {
    const [city,setCity]=useState([]);
    
    const getTenant = ()=>{

    }
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
                <button className='postBtn' >Get Details</button>
            </div>
        </div>
    )
}

export default Tenantdetails