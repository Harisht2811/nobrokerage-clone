import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import { login, selectloginUser, selectuserDetails } from '../createslice'
import { useSelector } from 'react-redux'
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage, db } from "../firebase";
import "./details.css"
import axios from 'axios';
import Header from "../../components/header/header"
import Deleteicon from '../../images/owner/close.svg'

const Details = () => {
  const location = useLocation();
  const data = location.state
  console.log(data)

  const navigate = useNavigate();
  const [apartment, setApartment] = useState(data?data.apartment:'');
  const [BHK, setBHK] = useState(data?data.BHK:'');
  const [floor, setFloor] = useState(data?data.floor:'');
  const [totalFloor, setTotalfloor] = useState(data?data.totalfloor:'');
  const [age, setAge] = useState(data?data.age:'');
  const [direction, setDirection] = useState(data?data.direction:'');
  const [area, setArea] = useState(data?data.area:'');
  const [rent, setRent] = useState(data?data.rent:'');
  const [deposit, setDeposit] = useState(data?data.deposit:'');
  const [furnish, setFurnish] = useState(data?data.furnish:'');
  const [parking, setParking] = useState(data?data.parking:'');
  const [availablility, setAvailability] = useState(data?data.available:'');
  const [prefered, setPrefered] = useState(data?data.prefered:'');
  const [details, setDetails] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState(data?data.imageUrl:[]);
 

  // const loginDetails = useSelector(selectloginUser)
  // console.log("detailspage", loginDetails)

  const userData = useSelector(selectuserDetails)
  console.log("userData", userData)

  let city = userData.city
  console.log("afterCity", city)

  const idOwner = parseInt(sessionStorage.getItem("id"))
  console.log(idOwner)

  const client = axios.create({
    baseURL: "http://localhost:8080/propertydetails"
  });


 
  
  const setdetails = (apartment, BHK, floor, totalFloor, age, direction, area, city) => {
    client.post('', {
      apartment: apartment,
      BHK: BHK,
      floor: floor,
      totalfloor: totalFloor,
      age: age,
      direction: direction,
      area: area,
      city: city,
      imageurl: imageList,
      ownerdetails: details,
      rent: rent,
      deposit: deposit,
      prefered: prefered,
      parking: parking,
      furnish: furnish,
      available: availablility,
      ownerId: idOwner,

    })
      .then((response) => {
        console.log("details of property", response)
      }).catch((err) => {
        console.log(err);
      })
  };

  const client1 = axios.create({
    baseURL: "http://localhost:8080/editpropertydetails"
  });

  const editeddetails = () => {
    console.log("aprtment",apartment)
    client1.post('', {
      id: parseInt(data.id),
      apartment:apartment,
      BHK:BHK,
      floor: floor,
      totalfloor:totalFloor,
      age: age,
      direction: direction,
      area: area,
      city: data.city,
      ownerdetails: details,
      rent: rent,
      deposit: deposit,
      prefered: prefered,
      parking: parking,
      furnish: furnish,
      available: availablility,
      ownerId: idOwner,
      image:imageList,


    })
      .then((response) => {
        console.log("details of property", response)
      }).catch((err) => {
        console.log(err);
      })
  };

  const uploadImages = () => {

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {

        setImageList((prev) => [...prev, url]);

      })
    })
    // alert('Posted Successfully ')
    toast.success('Posted Successfully')
  };

  useEffect(() => {
    fetch(`http://localhost:8080/details/${idOwner}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => {
      console.log("afterApi", res)
      return res.json()
    }).then(data => {
      console.log("loginData", data[0].id)
      setDetails(data)
    })
  }, [])

  const postProperty = () => {
    console.log("data",data,parseInt(data?.id))
    if(data?.id!=null){
    editeddetails();
    }
    else{
      setdetails(apartment, BHK, floor, totalFloor, age, direction, area, city);
    }
    toast.success('Posted Successfully')
    navigate("/city")
  }

  const addProperty = () => {
    navigate("/city")
  }

  const deleteImages =(url)=>{
    console.log(url)
    setImageList(imageList.filter(imageList=>url!==imageList))
    toast.error('Deleted Successfully')
  }

  return (
    <>
      <Header />
      <div className='details'>
        <p id='detailsTitle'>Property Details</p>
        <div className='apartment'>
          <label for="apartment">Apartment Type*
            <select name="apartment" id="apartment" defaultValue={data?.apartment} onChange={(e) => { setApartment(e.target.value) }} required>
              <option value="">------</option>
              <option value="Apartment">Apartment</option>
              <option value="Independant Villa">Independant Villa</option>
              <option value="Gated Community Villa">Gated Community Villa</option>
            </select>
          </label>
        </div>

        <div className='floor'>
          <label for="vhk">BHK Type*
            <select name="bhk" id="bhk" defaultValue={data?.BHK} onChange={(e) => { setBHK(e.target.value) }} class="required">
              <option value="">------</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
              <option value="4+">4+ BHK</option>
            </select>
          </label>
          <label for="floor">Floor*
            <select name="floor" id="floor" defaultValue={data?.floor} onChange={(e) => { setFloor(e.target.value) }}>
              <option value="">------</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="Ground">Ground only</option>
            </select>
          </label>
          <label for="total">Total Floor*
            <select name="total" id="total" defaultValue={data?.totalfloor} onChange={(e) => { setTotalfloor(e.target.value) }}>
              <option value="">------</option>
              <option value="1">1</option>
              <option value="2">2 </option>
              <option value="3"> 3 </option>
            </select>
          </label>
        </div>

        <div className='age'>
          <label for="years">Property Age*
            <select name="years" id="years" defaultValue={data?.age} onChange={(e) => { setAge(e.target.value) }}>
              <option value="">------</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5  years">3-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="Less than a year">Less than a year</option>
              <option value="More than 10 years">More than 10 years</option>

            </select>
          </label>
          <label for="direction">Facing*
            <select name="direction" id="direction" defaultValue={data?.direction} onChange={(e) => { setDirection(e.target.value) }}>
              <option value="">------</option>
              <option value="South">South</option>
              <option value="North">North </option>
              <option value="East">East</option>
              <option value="South-West">South-West</option>
              <option value="North-West">North-West</option>
              <option value="South-East">South-East</option>
              <option value="North-East">North-East</option>
            </select>
          </label>
        </div>
        <div className='parking'>
          <label for="parking">Parking*
            <select name="parking" id="parking" defaultValue={data?.parking} onChange={(e) => { setParking(e.target.value) }}>
              <option value="">------</option>
              <option value="2">2-Wheeler</option>
              <option value="4">4-Wheeler</option>
            </select>
          </label>
          <label for="availabledays">Availability*
            <select name="availabledays" id="availabledays" defaultValue={data?.available} onChange={(e) => { setAvailability(e.target.value) }}>
              <option value="">------</option>
              <option value="Immediate">Immediate</option>
              <option value="Within 15 days">Within 15 days</option>
              <option value="Within 30 days">Within 30 days</option>
              <option value="More than 30 days">More than 30 days</option>
            </select>
          </label>
          <label for="preferedTenants">Prefered-Tenants*
            <select name="preferedTenants" id="preferedTenants" defaultValue={data?.prefered} onChange={(e) => { setPrefered(e.target.value) }}>
              <option value="">------</option>
              <option value="All">All</option>
              <option value="Family">Family</option>
              <option value="Bachelor">Bachelor</option>
            </select>
          </label>
        </div>
        <div className='area'>
        <label for="furnish">Furnishing
            <select name="furnish" id="furnish" defaultValue={data?.furnish} onChange={(e) => { setFurnish(e.target.value) }}>
              <option value="">------</option>
              <option value="Full">Full-Furnished</option>
              <option value="Semi">Semi-Furnished</option>
              <option value="None">None</option>
            </select>
          </label>
          <label for="area">Built up area*
            <input id='area' defaultValue={data?.area} onChange={(e) => { setArea(e.target.value) }} ></input>
          </label>
          <div className='rent'>
            <label for="rent">Rent*
              <input id='rent' defaultValue={data?.rent} type='number' onChange={(e) => { setRent(e.target.value) }} ></input>
            </label>
          </div>
          <div className='deposit'>
            <label for="deposit">Deposit*
              <input id='deposit' defaultValue={data?.deposit} type='number' onChange={(e) => { setDeposit(e.target.value) }} ></input>
            </label>
          </div>
        </div>
       
        <div className='uploadProperty'>
          <input type="file"  onChange={(e) => setImageUpload(e.target.files[0])}></input>
          <button className='uploadBtn' onClick={uploadImages}>Upload</button>
          <button className='addBtn' onClick={addProperty}>Add Property</button>

        </div>
        {
          imageList.map((url,index)=>{
             return(
              <>
              <div className='imageList' key={index}>
              <img className='belowImages' alt='images' src={url}></img>
              <img className='deleteIcon' alt='close' defaultValue={data?.imageUrl} onClick={()=>deleteImages(url)} src={Deleteicon}></img>
              </div>
              </>
             )
          })
          
        }

      </div>
      <button className='updateBtn' onClick={postProperty}>Update Property Details</button>

    </>
  )
}

export default Details




