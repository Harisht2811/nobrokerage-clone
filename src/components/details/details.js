import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { login, selectloginUser, selectuserDetails } from '../createslice'
import { useSelector } from 'react-redux'
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage, db } from "../firebase";
import "./details.css"
import axios from 'axios';
import Header from "../../components/header/header"

const Details = () => {
  const navigate = useNavigate();
  const [apartment, setApartment] = useState([]);
  const [BHK, setBHK] = useState([]);
  const [floor, setFloor] = useState([]);
  const [totalFloor, setTotalfloor] = useState([]);
  const [age, setAge] = useState([]);
  const [direction, setDirection] = useState([]);
  const [area, setArea] = useState([]);
  const [rent, setRent] = useState([]);
  const [details, setDetails] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

console.log(imageList)

  const loginDetails = useSelector(selectloginUser)
  console.log("detailspage", loginDetails)
  const email = loginDetails.email

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
      ownerdetails: details,
      rent: rent,
      ownerId: idOwner
    })
      .then((response) => {
        console.log("details of property", response)
      }).catch((err) => {
        console.log(err);
      })
  };
  const uploadImages =() => {

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    let groupUrls ;
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
      
        setImageList((prev) => [...prev, url]);
        // setImageList(...imageList,url);
        groupUrls = [...imageList,url];
        console.log(groupUrls)
     adduserImages(groupUrls);

      })
    })
    alert('Posted Successfully ')
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
    setdetails(apartment, BHK, floor, totalFloor, age, direction, area, city);
    alert('Updated Successfully please upload the property images')
  }
  const client1 = axios.create({
    baseURL: "http://localhost:8080/propertyimage"
  });

  const adduserImages = (imageUrl) => {
    client1.post('', {
      city: city,
      url: imageUrl,
      ownerid: idOwner,
    })
      .then((response) => {
        console.log("after then", response)
      })

  };


  const addProperty = () => {
    navigate("/city")
  }


  return (
    <>
      <Header />
      <div className='details'>
        <p id='detailsTitle'>Property Details</p>
        <div className='apartment'>
          <label for="apartment">Apartment Type*
            <select name="apartment" id="apartment" onChange={(e) => { setApartment(e.target.value) }}>
              <option value="">------</option>
              <option value="Apartment">Apartment</option>
              <option value="Independant Villa">Independant Villa</option>
              <option value="Gated Community Villa">Gated Community Villa</option>
            </select>
          </label>
        </div>

        <div className='floor'>
          <label for="vhk">BHK Type*
            <select name="bhk" id="bhk" onChange={(e) => { setBHK(e.target.value) }} class="required">
              <option value="">------</option>
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
              <option value="4+ BHK">4+ BHK</option>
            </select>
          </label>
          <label for="floor">Floor*
            <select name="floor" id="floor" onChange={(e) => { setFloor(e.target.value) }}>
              <option value="">------</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <label for="total">Total Floor*
            <select name="total" id="total" onChange={(e) => { setTotalfloor(e.target.value) }}>
              <option value="">------</option>
              <option value="1">1</option>
              <option value="2">2 </option>
              <option value="3"> 3 </option>
            </select>
          </label>
        </div>

        <div className='age'>
          <label for="years">Property Age*
            <select name="years" id="years" onChange={(e) => { setAge(e.target.value) }}>
              <option value="">------</option>
              <option value="1 years">1 years</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
            </select>
          </label>
          <label for="direction">Facing
            <select name="direction" id="direction" onChange={(e) => { setDirection(e.target.value) }}>
              <option value="">------</option>
              <option value="South">South</option>
              <option value="North">North </option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
          </label>
        </div>

        <div className='area'>
          <label for="area">Built up area*
            <input id='area' onChange={(e) => { setArea(e.target.value) }} ></input>
          </label>
          <div className='rent'>
            <label for="rent">Rent*
              <input id='rent' type='number' onChange={(e) => { setRent(e.target.value) }} ></input>
            </label>
          </div>
        </div>

        <button className='updateBtn' onClick={postProperty}>Update Property Details</button>
        <div className='uploadProperty'>
          <input type="file" onChange={(event) => setImageUpload(event.target.files[0])}></input>
          <button className='uploadBtn' onClick={uploadImages}>Upload</button>
          <button className='addBtn' onClick={addProperty}>Add Property</button>

        </div>
      </div>
    </>
  )
}

export default Details




