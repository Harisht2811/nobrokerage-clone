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


const Tenantdetails = () => {
    const [city, setCity] = useState([]);
    const [owner, setOwner] = useState([]);
    const [cityDetails, setCitydetails] = useState([]);
    const loginDetails = useSelector(selectloginUser)
    const [modal2Open, setModal2Open] = useState(false);


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
                    {
                        cityDetails.map(props=>{
                            return(
                                <>
                <Card style={{ width: '50%',margin:'0 0 5% 10%',padding:'1% 0% 0% 0%' }}>

                                    <ListGroup variant="flush" className='gridItems'> 
                                    <ListGroup.Item>  <Card.Title>Rent Amount</Card.Title> <i class="fa fa-inr" aria-hidden="true"></i> {props.rent}/- <p>(Rent Negotiable)</p></ListGroup.Item>
                                    <ListGroup.Item> <Card.Title>Area</Card.Title>{props.area}</ListGroup.Item>
                                    <ListGroup.Item>  <Card.Title>Apartment type</Card.Title><i class="fa fa-building-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.apartment}</ListGroup.Item>
                                    <ListGroup.Item>  <Card.Title>Location</Card.Title><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.city}</ListGroup.Item>
                                </ListGroup>
                                <hr></hr>
                                <div style={{display:'flex' }}>
                              <Carousel style={{ width: '330px' }} interval={null} >

                                    {
                                        cityDetails.map(props=>{
                                            return props.image.map((url,index)=>{
                                                return(
                                        <Carousel.Item  >
                                                <img className='tenantImages'  key={index} src={url} alt='images'></img>
                                        </Carousel.Item>
                                                )
                                            })
                                        })
                                    }
                                 </Carousel>
                                 <ListGroup variant="flush" className='gridItems1'> 
                                <div>
                                <ListGroup.Item>  <Card.Title>Floor</Card.Title><i class="fa fa-building-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.floor}</ListGroup.Item>
                                    <ListGroup.Item>  <Card.Title>Total floors </Card.Title><i class="fa fa-building-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.totalfloor}</ListGroup.Item>
                                </div>
                                   <div>
                                   <ListGroup.Item> <Card.Title>BHK</Card.Title><i class="fa fa-building-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{props.bhk}</ListGroup.Item>
                                    <ListGroup.Item>  <Card.Title>Facing </Card.Title><i class="fa fa-location-arrow" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; {props.direction}</ListGroup.Item>
                                   </div>
                                </ListGroup>
                                 <hr></hr>
                                
                                </div>
                                
                               
                                <hr></hr>
                               <div style={{display:'flex'}}>
                               <button className='ownerBtn' onClick={() => getOwnerDetails(props.ownerid)}>Get Owner Details</button>
                               <button className='rentButton' onClick={() => { bookProperty(props.id) }} >Book Now</button>
                               </div>
                </Card>

                                </>
                          
                            )
                        })
                    }

            </div>
        </>
    )
}

export default Tenantdetails



{/* <Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body> */}

{/* <div className='wholeImages'>
{
    cityDetails.map(item => {
        return (
            <>
                <Carousel style={{ width: '330px' }} >

                    {

                        item.image.map((url, index) => {
                            return (
                                <Carousel.Item >
                                    <div className='booking'>
                                        <img className='ownerImages' key={index} src={url} alt='images'></img>
                                    </div>
                                </Carousel.Item>
                            )
                        })

                    }
                </Carousel>
                

                <div className='specificDetails'>
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
//                                         

//                                     </div>
//                                 </>
//                 </div>
//             </>
            
//         )

//     })
// }

// </div> */}