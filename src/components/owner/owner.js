import React, { useState,useEffect,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {login, selectloginUser,selectuserDetails} from '../createslice'
// import Deleteicon from "../../images/owner/"
import "./owner.css"
import axios from 'axios';
import Header from '../header/header.js';
import {  useSelector } from 'react-redux'
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage,db } from "../firebase";
import { addDoc, collection, doc, Firestore,deleteDoc, getDocs, getFirestore, setDoc, getDoc, arrayUnion,updateDoc } from 'firebase/firestore';
import { ReadyForQueryMessage } from 'pg-protocol/dist/messages';

const Homepage = () => {
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [userImage,setUserImage] = useState([]);
  const userData = useSelector(selectuserDetails)
  const dataFetchedRef = useRef(false);
  const userImageData = []
  console.log("userData",userData)
  let city = userData.city

  const client = axios.create({
    baseURL: "http://localhost:8080/propertyimage" 
  });
  
  const  adduserImages = () => {
    client.post('', {
        city:city,
        url:userImageData,
       })
       .then((response) => {
          console.log("after then",response)
       })
    
  };
  

  const loginDetails=useSelector(selectloginUser)
  console.log(loginDetails);

  let loginEmail = loginDetails.email
  
  const imageListRef = ref(storage, "images/");
    // const usersCollectionRef = collection(db, "user_images");
    const addProperty = ()=>{
      navigate("/city")
    }
    const uploadImages =() => {
      console.log(imageUpload)
        if (imageUpload == null) return;
            
            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
       console.log("imageRef",imageRef)
            const date = new Date().toISOString().substring(0,10);

            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageList((prev) => [...prev, url]);
                    updateDataTable();
                    console.log("url",url,"imageUpload",imageUpload)
                    let data={
                        url:url,
                        fileName:imageUpload.name,
                        uploadedDate:date,
                        city:city
                    }
                    updateDoc(doc(db, "user_images", loginEmail),{
                                userImageDetails:arrayUnion(data),

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
                  console.log("dataRender",data)
                  if(data === undefined){
                      setDoc(doc(db, "user_images", loginEmail), {
                     }); 
                  }
                  for (let i=0;i<data.userImageDetails.length;i++){
                    if(city === data.userImageDetails[i].city){
                  userImageData.push(data.userImageDetails[i].url)
                  console.log(userImageData)
                    }
                  }
                  setUserImage(userImageData);
                  adduserImages()

  };


  const deleteDataTable =(urlData)=>{
    console.log(urlData)
    
  }

  return (
    <>
    {
    }
      <Header/>
      <div className='location'>
        <p id="locationText">No Brokerage Property Site</p>
        <div className='uploadProperty'>
          <p id='property'>Upload your property</p>
          <input type="file" onChange={(event)=>setImageUpload(event.target.files[0])}></input>
          <button className='uploadBtn' onClick={uploadImages}>Upload</button>
          <button className='addBtn' onClick={addProperty}>Add Property</button>

          <div className='displayImages'>
          {
            userImage.map(item=>{
              return(
                <>
                <img onClick={()=>deleteDataTable(item)} className='uploadedImages' alt='images' src={item}></img>
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