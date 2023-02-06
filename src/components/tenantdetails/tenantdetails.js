import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import {Table } from 'antd';

import "./tenantdetails.css"
import axios from 'axios';
import { selectloginUser, } from '../createslice'
import { useSelector } from 'react-redux'
import cityOptions from '../../content/property.json'
import Carousel from 'react-bootstrap/Carousel';



const Tenantdetails = () => {
    const [city, setCity] = useState([]);
    const [owner, setOwner] = useState([]);
    const [cityDetails, setCitydetails] = useState([]);
    const loginDetails = useSelector(selectloginUser)
    const [modal2Open, setModal2Open] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const getTenant = () => {
        console.log(city)
        getProperty()
    }
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


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
                console.log(cityDataprop)
            })

    };
    const client2 = axios.create({
        baseURL: "http://localhost:8080/booking"
    })
    const bookProperty = (id) => {
        const bookingId = parseInt(id)
        alert("Booked Successfully")
        client2.post('', {
            bookingId: bookingId,
            status: 'Booked'
        })
            .then((response) => {
                let cityDataprop = JSON.parse(response.data.data)
                console.log(cityDataprop)
            })
        // open()

    };
    const getOwnerDetails = (ownerid) => {
        let currentUser = parseInt(ownerid);
        fetch(`http://localhost:8080/details/${currentUser}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log("afterApi", res)
            return res.json()
        }).then(data => {
            console.log(data)
            setOwner(data)
        })
        setModal2Open(true)

    }

    return (
        <>

            <Modal
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                {
                    owner.map(item => {
                        return (
                            <>
                                <p>Name: {item.name}</p>
                                <p>Email: {item.email}</p>
                                <p>Phone: {item.phone}</p>
                            </>
                        )
                    })
                }
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
                    cityDetails.map(item=>{
                        return(
                            <>
                        <Carousel activeIndex={index} onSelect={handleSelect} style={{width:'325px'}}>
                 
                        {
    
                          item.image.map(url => {
                            return (
                                <Carousel.Item>
                                <div className='booking'>
                                    <img className='ownerImages' src={url} alt='images'></img>
                                </div>
                                </Carousel.Item>
                            )
                          })
    
                        }
                        </Carousel>
                        <button className='ownerBtn' onClick={() => getOwnerDetails(item.ownerid)}>Get Owner Details</button>
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
                                                <p>BHK: {item.bhk}</p>
                                                <p>Floor: {item.floor} Floor</p>
                                                <p>Total Floor: {item.totalfloor} Floor</p>
                                                <p>Age of Property: {item.age}</p>
                                                <p>Facing: {item.direction}</p>
                                                <p>Area: {item.area}</p>
                                                <p>Rent Amount: &#x20a8;. {item.rent}/-</p>

                                            </div>

                                        </div>
                                        {/* <button className='rentButton'  onClick={()=>{open(item.id)}}>Book Now</button> */}
                                        <button className='rentButton' onClick={() => { bookProperty(item.id) }} >Book Now</button>

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



