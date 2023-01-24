import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, selectloginUser, selectuserDetails } from '../createslice'
import Deleteicon from "../../images/owner/close.svg"
import "./owner.css"
import axios from 'axios';
import Header from '../header/header.js';
import { useSelector } from 'react-redux'
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage, db } from "../firebase";
import { addDoc, collection, doc, Firestore, deleteDoc, getDocs, getFirestore, setDoc, getDoc, arrayUnion, updateDoc, deleteField, arrayRemove } from 'firebase/firestore';
import { ReadyForQueryMessage } from 'pg-protocol/dist/messages';

const Homepage = () => {
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [delurl,setDelurl] = useState([]);
  const [userImage, setUserImage] = useState([]);
  const userData = useSelector(selectuserDetails)
  const dataFetchedRef = useRef(false);
  const userImageData = []
  console.log("userData", userData)
  let city = userData.city

  const client = axios.create({
    baseURL: "http://localhost:8080/propertyimage"
  });

  const adduserImages = () => {
    client.post('', {
      city: city,
      url: userImageData,
    })
      .then((response) => {
        console.log("after then", response)
      })

  };


  const client1 = axios.create({
    baseURL: `http://localhost:8080/deleteimage?url=${delurl}`
  });

  const delpropImages = () => {
    client1.delete('', {
    })
      .then((response) => {
        console.log("after then", response)
      })

  };


  const loginDetails = useSelector(selectloginUser)
  console.log(loginDetails);

  let loginEmail = loginDetails.email

  const imageListRef = ref(storage, "images/");
  // const usersCollectionRef = collection(db, "user_images");
  const addProperty = () => {
    navigate("/city")
  }
  const uploadImages = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    const date = new Date().toISOString().substring(0, 10);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        updateDataTable();
        let data = {
          url: url,
          fileName: imageUpload.name,
          uploadedDate: date,
          city: city
        }
        updateDoc(doc(db, "user_images", loginEmail), {
          userImageDetails: arrayUnion(data),

        });


      })
    })
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    updateDataTable();
    sessionStorage.setItem("email", JSON.stringify(loginEmail));
  }, []);

  const updateDataTable = async () => {
    let docref = doc(db, 'user_images', loginEmail);
    console.log(docref);
    let sp = await getDoc(docref);
    console.log(sp)
    let data = sp.data();
    if (data === undefined) {
      setDoc(doc(db, "user_images", loginEmail), {
      });
    }

    for (let i = 0; i < data.userImageDetails.length; i++) {
      if (city === data.userImageDetails[i].city) {
        userImageData.push(data.userImageDetails[i])
        console.log(userImageData)
      }
      setUserImage(userImageData);
      console.log("beforeDelete", userImage)
    }
    adduserImages()

  };


  const deleteDataTable = (urlData) => {
    delpropImages();
    console.log(urlData)
    setDelurl(urlData)
    setUserImage(userImage.filter(item => item.url !== urlData))
    let ownerProps = userImage.filter(item => item.url !== urlData)
    updateDoc(doc(db, "user_images", loginEmail), {
      userImageDetails: ownerProps,
    });
  }
  return (
    <>
      {
      }
      <Header />
      <div className='location'>
        <p id="locationText">No Brokerage Property Site</p>
        <div className='uploadProperty'>
          <p id='property'>Upload your property</p>
          <input type="file" onChange={(event) => setImageUpload(event.target.files[0])}></input>
          <button className='uploadBtn' onClick={uploadImages}>Upload</button>
          <button className='addBtn' onClick={addProperty}>Add Property</button>

          <div className='displayImages'>
            {
              userImage.map(item => {
                return (
                  <>
                    <div className='view'>
                      <img className='uploadedImages' alt='images' src={item.url}></img>
                      <img onClick={() => deleteDataTable(item.url)} className='deleteIcon' src={Deleteicon} alt='close-image'></img>
                    </div>

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






export default Homepage;