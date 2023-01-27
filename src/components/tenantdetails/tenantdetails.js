import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import "./tenantdetails.css"
import axios from 'axios';
import { selectloginUser, } from '../createslice'
import { useSelector } from 'react-redux'
import cityOptions from '../../content/property.json'
import { json } from 'react-router-dom';


const Tenantdetails = () => {
    const [city, setCity] = useState([]);
    const [imageDetails, setimageDetails] = useState([]);
    const [tenantId, setTenantid] = useState([]);
    const [cityDetails, setCitydetails] = useState([]);
    const loginDetails = useSelector(selectloginUser)
    const [modal2Open, setModal2Open] = useState(false);

    const getTenant = () => {
        console.log(city)
        getProperty()
    }



    const client1 = axios.create({
        baseURL: "http://localhost:8080/getproperty"
    });

    const getProperty = () => {
        client1.post('', {
            city: city
        })
            .then((response) => {
                let cityDataprop = JSON.parse(response.data.data)
                setCitydetails(cityDataprop)
                console.log(cityDataprop.data)
                setimageDetails(cityDataprop[0].image.map(item => {
                    return JSON.parse(item).url
                }))
            })

    };


    const client2 = axios.create({
        baseURL:"http://localhost:8080/booking"
    })
    const bookProperty = (id) => {
        const bookingId = parseInt(id)
        client2.post('', {
            bookingId:bookingId,
            status:'Booked'
        })
            .then((response) => {
                let cityDataprop = JSON.parse(response.data.data)
                console.log(cityDataprop)
            })
            // open()

    };
    const open = (tenantd)=>{
        setModal2Open(true)
        console.log(tenantd);
        setTenantid(tenantd)
        // delpropImages();
        // window.location.reload();
    }
    // const client3 = axios.create({
    //     baseURL: `http://localhost:8080/deleteimage/${tenantId}`
    //   });
    
    //   const delpropImages = () => {
    //     client2.delete('', {
    //     })
    //       .then((response) => {
    //         console.log("after then", response)
    //       })
    
    //   };
    return (
        <>

      <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        okText = "Confirm"
        onCancel={() => setModal2Open(false)}
      >
        <p id='bookText'>Shall i book this?</p>
      </Modal>
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
            <p id='propText'>Property Images :</p>
            <div className='wholeImages'>
                {  
                
                    imageDetails.map(item => {
                        return(
                            <>
                            <div className='booking'>
                            <img className='tenantImages' src={item} alt='images'></img>
                            <button className='bookBtn'  onClick={() => setModal2Open(true)}>Get Owner Details</button>
                            </div>
                            </>
                        ) 
                    })
                }
            </div>
            <div className='specificDetails'>


                {
                    cityDetails.map(item => {
                        return (
                            <>
                                <div style={{ "display": "block" }}>
                                    <div className='wholeDetails'>
                                        <div className='detailiedProps' >
                                            <p>Type: {item.apartment}</p>
                                            <p>BHK: {item.BHK}</p>
                                            <p>Floor: {item.floor} Floor</p>
                                            <p>Total Floor: {item.totalfloor} Floor</p>
                                            <p>Age of Property: {item.age}</p>
                                            <p>Facing: {item.direction}</p>
                                            <p>Area: {item.area}</p>
                                        </div>

                                    </div>
                                    {/* <button className='rentButton'  onClick={()=>{open(item.id)}}>Book Now</button> */}
                                    <button className='rentButton' onClick={()=>{bookProperty(item.id)}} >Book Now</button>

                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Tenantdetails



