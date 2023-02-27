import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import Modal1 from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button1 from 'react-bootstrap/Button';
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
import Premium from '../../components/premium/premium'
import CloseButton from '../../images/owner/close.svg';



const Tenantdetails = () => {
    const [city, setCity] = useState([]);
    const [owner, setOwner] = useState([]);
    const [cityDetails, setCityDetails] = useState([]);
    const [filterDetails, setfilterDetails] = useState([]);
    const [modal2Open, setModal2Open] = useState(false);
    const [show, setShow] = useState(false);
    const [key, setKey] = useState('home');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    let IndianRupees = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumSignificantDigits: 3
    });

    // const storeTrueObject = (state, trueObject) => {
    //     for (let key in state) {

    //         if (state[key]) {
    //             // obj[key] = state[key];
    //             return true
    //         }
    //     }

    //     return false;
    // }

    const filterData = (data) => {
        let count = 0;
        console.log("datat", data)
        for (let key in data) {
            if (data[key]) {
                count++
            }

        }
        if (!count) {
            setCityDetails(filterDetails)
            return
        }

        const filterArray = filterDetails.filter((item, index) => {
            let trueKeys = {};
            for (let key in data) {

                if (data[key]) {
                    if (((key === 'Apartment') && (item.apartment === 'Apartment')) || ((key === 'GVilla') && (item.apartment === 'Gated Community Villa')) || (key === 'IVilla') && (item.apartment === "Independant Villa")) {
                        trueKeys[key] = data[key]
                    }
                    if (((key === '1BHK') && (item.bhk === '1')) || ((key === '2BHK') && (item.bhk === '2')) || (key === '3BHK') && (item.bhk === "3") || (key === '4BHK') && (item.bhk === "4") || (key === '4+BHK') && (item.bhk === "4+")) {
                        trueKeys[key] = data[key]
                    }
                    if (((key === 'immediate') && (item.availability === 'Immediate')) || ((key === 'within15') && (item.availability === 'Within 15 Days')) || (key === 'within30') && (item.availability === "Within 30 Days") || (key === 'after30') && (item.availability === "After 30 Days")) {
                        trueKeys[key] = data[key]
                    }
                    if (((key === 'all') && (item.prefered === 'All')) || ((key === 'family') && (item.prefered === 'Family')) || (key === 'bachelor') && (item.prefered === "Bachelor")) {
                        trueKeys[key] = data[key]
                    }
                    if (((key === '2parking') && (item.parking === '2')) || ((key === '4parking') && (item.parking === '4'))) {
                        trueKeys[key] = data[key]
                    }
                    if (((key === 'full') && (item.furnish === 'Full')) || ((key === 'semi') && (item.furnish === 'Semi')) || (key === 'none') && (item.furnish === "None")) {
                        trueKeys[key] = data[key]
                    }

                }
            }
            return Object.keys(trueKeys).length > 0

        });
        setCityDetails(filterArray)


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
                setCityDetails(cityDataprop)
                setfilterDetails(cityDataprop)
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
                    <button className='searchBtn' onClick={getTenant} ><i class="fa fa-search" aria-hidden="true"></i>  Search</button>
                </div>
                <p id='propText'>Properties:</p>
                <div style={{ display: 'inline-flex', width: '100%', padding: '0 5%' }}>
                    <div style={{ width: '25%' }}>

                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Filters">
                            <Filters filterDetails={filterData} />

                            </Tab>
                            <Tab eventKey="profile" title="Premium Filters">
                                <Premium/>
                            </Tab>
                        </Tabs>
                    </div>
                    <div style={{ display: 'block', width: '50%', height: '30%', margin: '0 0 5% 10%' }}>

                        {
                            cityDetails.map(props => {
                                return (
                                    <>
                                        <Card style={{ margin: '0 0 3% 0' }}>

                                            <ListGroup variant="flush" className='gridItems' style={{ width: '100%' }}>
                                                <ListGroup.Item >  <Card.Title>Rent Amount</Card.Title> {IndianRupees.format(Math.round(parseInt(props.rent)))} /- <p>(Rent Negotiable)</p></ListGroup.Item>
                                                <ListGroup.Item >  <Card.Title>Deposit</Card.Title>{IndianRupees.format(props.deposit)} /-</ListGroup.Item>
                                                <ListGroup.Item > <Card.Title>Area</Card.Title><i class="fa fa-arrows-h" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.area}  sq.ft</ListGroup.Item>
                                                <ListGroup.Item >  <Card.Title>Location</Card.Title><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.city}</ListGroup.Item>
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
                                                                        <img className='tenantImages' key={index} src={url} alt='images' onClick={handleShow}></img>
                                                                    </Carousel.Item>
                                                            )
                                                        })
                                                    }
                                                </Carousel>
                                                <Modal1 show={show} onHide={handleClose} animation={false}>
                                                    <Modal1.Header >
                                                        <img className='closeImg' src={CloseButton} onClick={handleClose}></img>
                                                    </Modal1.Header>
                                                    <Modal1.Body>
                                                        <Carousel style={{ width: '600px' }} interval={null} >

                                                            {
                                                                props.image.map((url, index) => {
                                                                    return (
                                                                        url.length === 1 ?
                                                                            <img className='zoomImages' key={index} src={url} alt='images' onClick={handleShow}></img> :
                                                                            <Carousel.Item  >
                                                                                <img className='zoomImages' key={index} src={url} alt='images' onClick={handleShow}></img>
                                                                            </Carousel.Item>

                                                                    )
                                                                })
                                                            }
                                                        </Carousel  >

                                                    </Modal1.Body>

                                                </Modal1>
                                                <ListGroup variant="flush" className='gridItems1'>
                                                    <div className='item1'>
                                                        <ListGroup.Item>  <Card.Title>Furnished</Card.Title><i class="fa fa-building-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.furnish}</ListGroup.Item>
                                                        <ListGroup.Item> <Card.Title>Prefered</Card.Title><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.prefered}</ListGroup.Item>
                                                    </div>
                                                    <div className='item2'>
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


