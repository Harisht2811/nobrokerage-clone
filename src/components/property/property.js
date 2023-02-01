import React,{useState,useEffect,useRef} from 'react'
import Header from "../../components/header/header"
import cityOptions  from '../../content/property.json'
import { Button, Modal } from 'antd';
import {selectloginUser,userDetails} from '../createslice'
import {  useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import "./property.css"
import Deleteicon from "../../images/owner/close.svg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Property=()=>{
  const [city,setCity]=useState([]);
  const [ownerProps,setOwnerProps]=useState([]);
  const [ownerPropsDetails,setOwnerPropsDetails]=useState([]);
  const [modal2Open, setModal2Open] = useState(false);


  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);
  
  let currentUser = parseInt(sessionStorage.getItem('id'))

  const navigate = useNavigate()
  const loginDetails = useSelector(selectloginUser)
  const email = loginDetails.email

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getProperty();
    fetch(`http://localhost:8080/getbookedprops`).then(response=>{
      console.log(response)
      return response.json()
    }).then(data=>{
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
const propertyDetails=(id)=>{
  let propertyId = parseInt(id)
  getOwnerProps(propertyId)
  setModal2Open(true)


}
const client2 = axios.create({
  baseURL: "http://localhost:8080/ownerpropertydetails"
});

const getOwnerProps = (id) => {
  client2.post('', {
      propid:id
  })
      .then((response) => {
          let ownerPropData = JSON.parse(response.data.data)
          console.log(ownerPropData)
          setOwnerPropsDetails(ownerPropData)
      })

};
    const postCity =()=>{
      dispatch(userDetails({
        city:city
      }))
      navigate("/details")
    }

  return (
    <>
  
  <Header/>
           <Modal
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                okText="Edit"
                onCancel={() => setModal2Open(false)}
            >
              {
                ownerPropsDetails.map(item=>{
                return(
                  <>
                  <p>Apartment : {item.apartment}</p>
                  <p>BHK : {item.BHK}</p>
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
  <select id='city' onChange={(e)=>setCity(e.target.value)}>
        {
            cityOptions.map(item=>{
                return(
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
      ownerProps.map(item=>{
        return(
          <>
          <p id='cityText'>{item.city}</p>
          {
            
            item.image.map(url=>{
              return(
                <>
                <div className='myProps'>
                <img  className='ownerImages' src={url} alt='images'></img>
               <button onClick={()=>{propertyDetails(item.id)}} className='propsBtn'>Property details</button>
                </div>
              
                </>
              ) 
            })
           

          }
          </>
          
        )
      })
    }
  </div>
 </>

  )
}

export default Property




  