import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { PlusOutlined } from '@ant-design/icons';
// import { Modal, Upload } from 'antd';
import "../homepage/homepage.css"
import axios from 'axios';
import Header from '../header/header.js';
import {selectloginUser} from '../createslice'
import {  useSelector } from 'react-redux'
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage,db } from "../firebase";
import { addDoc, collection, doc, Firestore, getDocs, getFirestore, setDoc, getDoc, arrayUnion,updateDoc } from 'firebase/firestore';
import { ReadyForQueryMessage } from 'pg-protocol/dist/messages';

const Homepage = () => {
  const navigate = useNavigate();
  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [previewImage, setPreviewImage] = useState('');
  // const [previewTitle, setPreviewTitle] = useState('');
  // const [fileList, setFileList] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [userImage,setUserImage] = useState([]);

  const client = axios.create({
    baseURL: "http://localhost:8080/userimages" 
  });
  
  const  adduserImages = (url,email) => {
    client.post('', {
        email:loginEmail,
        url:url,
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
    const uploadImages =() => {
      console.log(imageUpload)
        if (imageUpload == null) return;
            
            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
            const date = new Date().toISOString().substring(0,10);

            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageList((prev) => [...prev, url]);
                    updateDataTable();
                    adduserImages(url);
                    let data={
                        url:url,
                        fileName:imageUpload.name,
                        uploadedDate:date,
                    }
                    updateDoc(doc(db, "user_images", loginEmail), {

                                userImageDetails:arrayUnion(data)
                                
                       });  
            })
        })
    };

    useEffect(() => {
      updateDataTable();
      localStorage.setItem("email", JSON.stringify(loginEmail));
    }, []);

  const updateDataTable = async () => {
      let docref = doc(db, 'user_images', loginEmail);
      console.log(docref);
      let sp = await getDoc(docref);
      console.log(sp)
                  let data = sp.data();
                  console.log(data)
                  if(data === undefined){
                      setDoc(doc(db, "user_images", loginEmail), {
                      
                     }); 
                  }
                  setUserImage(data.userImageDetails);
  };

  // const getBase64 = (file) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });


  //   const handleCancel = () => setPreviewOpen(false);
  //   const handlePreview = async (file) => {
  //     if (!file.url && !file.preview) {
  //       file.preview = await getBase64(file.originFileObj);
  //     }
  //     setPreviewImage(file.url || file.preview);
  //     setPreviewOpen(true);
  //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));

      
  //   };
  //   const handleChange = ({ fileList: newFileList }) => {
  //     // uploadImages();
  //     setFileList(newFileList)

  //   };

  // const uploadButton = (
  //   <div>
  //     <PlusOutlined />
  //     <div
  //       style={{
  //         marginTop: 8,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </div>
  // );

  return (
    <>
      <Header/>
      <div className='location'>
        <p id="locationText">No Brokerage Property Site</p>
        <div className='uploadProperty'>
          <p id='property'>Upload your property</p>
          <input type="file" onChange={(event)=>setImageUpload(event.target.files[0])}></input>
          <button className='uploadBtn' onClick={uploadImages}>Upload</button>
          <div className='displayImages'>
          {
            userImage.map(item=>{
              return(
                <>
                <img className='uploadedImages' alt='images' src={item.url}></img>
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