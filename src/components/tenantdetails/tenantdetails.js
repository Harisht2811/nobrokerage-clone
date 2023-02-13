import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { Table } from 'antd';
import "./tenantdetails.css"
import axios from 'axios';
import { selectloginUser, } from '../createslice'
import { useSelector } from 'react-redux'
import cityOptions from '../../content/property.json'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Filters from '../../components/filters/filters'


const Tenantdetails = () => {
    const [city, setCity] = useState([]);
    const [owner, setOwner] = useState([]);
    const [cityDetails, setCitydetails] = useState([]);
    const [modal2Open, setModal2Open] = useState(false);



    let IndianRupees = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumSignificantDigits: 3 
    });


    const filterData = (data) => {
        console.log("datat", data)
        if (data.apartmentType.filterVilla === 'Independant Villa' || data.apartmentType.filterApartment === 'Apartment' || data.apartmentType.filterGated === 'Gated Community Villa') {
            return setCitydetails(cityDetails.filter(item => 
                item.apartment === data.apartmentType.filterVilla || item.apartment === data.apartmentType.filterGated || item.apartment === data.apartmentType.filterApartment))
        }
        if (data.bhkType.oneBHK === '1' || data.bhkType.twoBHK === '2' || data.bhkType.threeBHK === '3' || data.bhkType.fourBHK === '4' || data.bhkType.fourPlusBHK === '4+') {
            return setCitydetails(cityDetails.filter(item => 
                item.bhk === data.bhkType.oneBHK || item.bhk === data.bhkType.twoBHK || item.bhk === data.bhkType.threeBHK || item.bhk === data.bhkType.fourBHK || item.bhk === data.bhkType.fourPlusBHK))
        }
        if (data.parking.twoWheeler === '2' || data.parking.fourWheeler === '4') {
            return setCitydetails(cityDetails.filter(item => item.parking === data.parking.twoWheeler || item.parking === data.parking.fourWheeler))
        }
        if (data.furnish.fullFurnish === 'Full' || data.furnish.semiFurnish === 'Semi' || data.furnish.none === 'None') {
            return setCitydetails(cityDetails.filter(item => 
                item.furnish === data.furnish.fullFurnish || item.furnish === data.furnish.semiFurnish || item.furnish === data.furnish.None))
        }
        if (data.preferedTenants.all === 'All' || data.preferedTenants.bachelor === 'Bachelor' || data.preferedTenants.family === 'Family') {
            return setCitydetails(cityDetails.filter(item => 
                item.prefered === data.preferedTenants.all || item.prefered === data.preferedTenants.bachelor || item.prefered === data.preferedTenants.family))
        }
        if (data.availability.after30days === 'After 30 Days' || data.availability.immediate === 'Immediate' || data.availability.within15days === 'Within 15 days' || data.availability.within30days === 'Within 30 Days') {
            return setCitydetails(cityDetails.filter(item => 
                item.availability === data.availability.immediate || item.availability === data.availability.after30days || item.availability === data.availability.within30days || item.availability === data.availability.within15days))
        }
        
    }

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
                <p id='propText'>Properties:</p>
                <div style={{ display: 'inline-flex', width: '100%', padding: '0 5%' }}>
                    <div style={{ width: '30%' }}>
                        <Filters filterDetails={filterData} />
                    </div>
                    <div style={{ display: 'block', width: '50%', height: '30%', margin: '0 0 5% 10%' }}>

                        {
                            cityDetails.map(props => {
                                return (
                                    <>
                                        <Card style={{ margin: '0 0 3% 0' }}>

                                            <ListGroup variant="flush" className='gridItems' style={{ width: '100%' }}>
                                                <ListGroup.Item>  <Card.Title>Rent Amount</Card.Title> {IndianRupees.format(Math.round(parseInt(props.rent)))} /- <p>(Rent Negotiable)</p></ListGroup.Item>
                                                <ListGroup.Item>  <Card.Title>Deposit</Card.Title>{IndianRupees.format(props.deposit)} /-</ListGroup.Item>
                                                <ListGroup.Item> <Card.Title>Area</Card.Title><i class="fa fa-arrows-h" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.area}  sq.ft</ListGroup.Item>
                                                <ListGroup.Item>  <Card.Title>Location</Card.Title><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.city}</ListGroup.Item>
                                            </ListGroup>
                                            <hr></hr>
                                            <div style={{ display: 'flex' }}>
                                                <Carousel style={{ width: '330px' }} interval={null} >

                                                    {
                                                        props.image.map((url, index) => {
                                                            return (
                                                                url.length === 1 ?
                                                                    <img className='tenantImages' key={index} src={url} alt='images'></img> :
                                                                    <Carousel.Item  >
                                                                        <img className='tenantImages' key={index} src={url} alt='images'></img>
                                                                    </Carousel.Item>
                                                            )
                                                        })
                                                    }
                                                </Carousel>
                                                <ListGroup variant="flush" className='gridItems1'>
                                                    <div>
                                                        <ListGroup.Item>  <Card.Title>Furnished</Card.Title><i class="fa fa-building-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.furnish}</ListGroup.Item>
                                                        <ListGroup.Item> <Card.Title>Prefered</Card.Title><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.prefered}</ListGroup.Item>
                                                    </div>
                                                    <div>
                                                        <ListGroup.Item>  <Card.Title>Apartment type</Card.Title><i class="fa fa-building-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.bhk} BHK</ListGroup.Item>
                                                        <ListGroup.Item>  <Card.Title>Facing </Card.Title><i class="fa fa-location-arrow" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; {props.direction}</ListGroup.Item>
                                                    </div>
                                                </ListGroup>
                                                <hr></hr>

                                            </div>


                                            <hr></hr>
                                            <div style={{ display: 'flex' }}>
                                                <button className='ownerBtn' onClick={() => getOwnerDetails(props.ownerid)}>Get Owner Details</button>
                                                <button className='rentButton' onClick={() => { bookProperty(props.id) }} >Book Now</button>
                                            </div>
                                        </Card>
                                    </>

                                )
                            })

                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default Tenantdetails


