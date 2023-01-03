import React,{useState,useEffect} from 'react'
// import Header from "../../components/header/header"
import cityOptions  from '../../content/property.json'
import "./property.css"

const Property=()=>{
    console.log(cityOptions)
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]
    
  return (
    <>
     {/* <Select
    // defaultValue={[cityOptions[2], cityOptions[3]]}
    isMulti
    // name="colors"
    options={cityOptions}
    // className="basic-multi-select"
    // classNamePrefix="select"
  /> */}
  {/* <Header/> */}
  <div className='property'>
  <div className='propertyForm'>
    <p id="choose">Choose your city</p>
  <select>
        {
            cityOptions.map(item=>{
                return(
                    <option value={item.value}>{item.label}</option>
                )
            })
        }
  </select>
  </div>
  <button className='postBtn'>Post Now</button>
  </div>
 </>

  )
}

export default Property




  