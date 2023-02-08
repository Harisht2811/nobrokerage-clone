import React, { useState, useEffect, useRef } from 'react'
import Header from "../../components/header/header"
import cityOptions from '../../content/property.json'
import { Button, Modal } from 'antd';
import { selectloginUser, userDetails } from '../createslice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import "./property.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';


const Property = () => {
  const [city, setCity] = useState([]);
  const [ownerProps, setOwnerProps] = useState([]);
  const [ownerPropsDetails, setOwnerPropsDetails] = useState([]);
  const [modal2Open, setModal2Open] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);

  let currentUser = parseInt(sessionStorage.getItem('id'))

  const navigate = useNavigate()

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getProperty();
    fetch(`http://localhost:8080/getbookedprops`).then(response => {
      console.log(response)
      return response.json()
    }).then(data => {
      // if(data.status === 'Booked'){
      //   alert('Tenant booked the property')
      // }
      console.log(JSON.parse(data.data))
    })
  }, []);

  const client1 = axios.create({
    baseURL: "http://localhost:8080/ownerproperty"
  });

  const getProperty = () => {
    client1.post('', {
      ownerid: currentUser
    })
      .then((response) => {
        let cityDataprop = JSON.parse(response.data.data)
        setOwnerProps(cityDataprop)
        console.log(cityDataprop)
      })

  };
  const propertyDetails = (id) => {
    let propertyId = parseInt(id)
    dispatch(userDetails({
      city: ownerPropsDetails.map(item => {
        console.log(item.city)
        return item.city
      })
    }))
    getOwnerProps(propertyId)
    setModal2Open(true)
  }
  const editDetails = () => {
    setModal2Open(false)
    ownerPropsDetails.map(item => {
      const data = {
        id: item.id,
        apartment: item.apartment,
        BHK: item.bhk,
        floor: item.floor,
        totalfloor: item.totalfloor,
        age: item.age,
        direction: item.direction,
        area: item.area,
        city: item.city,
        rent: item.rent,
        imageUrl:item.image,
      }
      navigate("/details", { state: data })
    })
  }
  const client2 = axios.create({
    baseURL: "http://localhost:8080/ownerpropertydetails"
  });

  const getOwnerProps = (id) => {
    client2.post('', {
      propid: id
    })
      .then((response) => {
        let ownerPropData = JSON.parse(response.data.data)
        console.log(ownerPropData)
        setOwnerPropsDetails(ownerPropData)
      })

  };

  const postCity = () => {
    dispatch(userDetails({
      city: city
    }))
    navigate("/details")
  }


  const deleteProp = (id) => {
    console.log(id)
    const client3 = axios.create({
      baseURL: `http://localhost:8080/deleteimage/${id}`
    });
    client3.delete('', {
    })
      .then((response) => {
        console.log("after then", response)
      })
    window.location.reload();
  };
  return (
    <>

      <Header />
      <Modal
        centered
        open={modal2Open}
        onOk={editDetails}
        okText="Edit"
        onCancel={() => setModal2Open(false)}
      >
        {
          ownerPropsDetails.map(item => {
            return (
              <>
                <p>Apartment : {item.apartment}</p>
                <p>BHK : {item.bhk}</p>
                <p>Floor : {item.floor}</p>
                <p>Total Floor : {item.totalfloor}</p>
                <p>Property Age : {item.age}</p>
                <p>Direction : {item.direction}</p>
                <p>Area : {item.area}</p>
                <p>City : {item.city}</p>
                <p>Status : {item.status}</p>
                <p>Rent : {item.rent} /-</p>
              </>
            )
          })
        }
      </Modal>
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
        <button className='postBtn' onClick={postCity}>Post Now</button>
      </div>

      <div className='uploadedProps'>
        <p id='propText'>My Properties:</p>
        {
          ownerProps.map(item => {
            return (
              <>
                <div style={{ display: 'flex' }}>
                  <p id='cityText'>{item.city}</p>
                  <p id='statusText'>{item.status}</p>
                </div>


                <div className='myProps'>


                <Carousel activeIndex={index} onSelect={handleSelect} style={{width:'325px'}}>
                 
                    {

                      item.image.map(url => {
                        return (
                            <Carousel.Item>
                              <img className='ownerImages' src={url} alt='images'></img>
                            </Carousel.Item>
                        )
                      })


                    }
                    </Carousel>


                <button onClick={() => { propertyDetails(item.id) }} className='propsBtn'>Property details</button>
                <button onClick={() => { deleteProp(item.id) }} className='deleteBtn'>Delete Property</button>
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




