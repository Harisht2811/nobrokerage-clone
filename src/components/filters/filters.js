import React, { useEffect, useState } from 'react'
import '../filters/filters.css'
import Card from 'react-bootstrap/Card';

const Filters = ({ filterDetails  }) => {
 


  
  const [rentRange, setRentRange] = useState('');
  const [checkbox, setCheckBox] = useState({
    "Apartment":false,
    "IVilla":false,
    "GVilla":false,
    "1BHK":false,
    "2BHK":false,
    "3BHK":false,
    "4BHK":false,
    "4+BHK":false,
    "immediate":false,
    "within15":false,
    "within30":false,
    "after30":false,
    "all":false,
    "family":false,
    "bachelor":false,
    "2parking":false,
    "4parking":false,
    "full":false,
    "semi":false,
    "none":false,
    "rentRange":rentRange
  },
  );

console.log(rentRange)

  const handleChange =(e)=>{
    setRentRange(e.target.value)
    const { name , value} = e.target
     setCheckBox({
        ...checkbox,[name]:!checkbox[name]
     })
  }
  
useEffect(()=>{
  filterDetails (
    checkbox
  )
},[JSON.stringify(checkbox)])


const rangeInput =  document.querySelectorAll(".range-input input"),
progress = document.querySelector(".slider .progress");

rangeInput.forEach(input=>{
  input.addEventListener("input",()=>{
    let minVal = parseInt(rangeInput[0].value),
     maxVal = parseInt(rangeInput[1].value);
     console.log(minVal,maxVal)

     progress.style.left=minVal;
     progress.style.right=maxVal;

  })
})

  return (
    <div className='filters'>
      <Card style={{ height: '30%',margin:'3% 0 0 0 ' }}>
        <div className='apartmentType'>
          <Card.Title>Property Type</Card.Title>
          <p> <input type="checkbox" checked={checkbox["Apartment"]} onChange={handleChange} name='Apartment' value="Apartment" /> &nbsp;Apartment</p>
          <p>  <input type="checkbox" checked={checkbox["GVilla"]} onChange={handleChange} value="Gated Community Villa" name='GVilla' /> &nbsp;Gated Community Villa</p>
          <p> <input type="checkbox" checked={checkbox["IVilla"]} onChange={handleChange} value="Independant Villa"  name='IVilla'/> &nbsp;Independant Villa</p>
        </div>
        <hr></hr>
        <div className='bhkType'>
          <Card.Title>BHK Type</Card.Title>
          <div className='gridBhk'>
            <p> <input type="checkbox" checked={checkbox["1BHK"]} onChange={handleChange}  name='1BHk' value="1" /> &nbsp;1 BHK</p>
            <p> <input type="checkbox" checked={checkbox["2BHK"]} onChange={handleChange}  name='2BHk' value="2" /> &nbsp;2 BHK</p>
            <p> <input type="checkbox" checked={checkbox["3BHK"]} onChange={handleChange} name='3BHK' value="3" /> &nbsp;3 BHK</p>
            <p> <input type="checkbox" checked={checkbox["4BHK"]} onChange={handleChange}  name='4BHk' value="4" /> &nbsp;4 BHK</p>
            <p> <input type="checkbox" checked={checkbox["4+BHK"]} onChange={handleChange} name='4+BHk' value="4+" /> &nbsp;4+ BHK</p>
          </div>
        </div>
    <hr></hr>
      <div className='rent'>
        <Card.Title>Rent - <label>{rentRange}/-</label></Card.Title>
        {/* <input type="range" id="rentRange" onChange={handleChange}  min="0" max="5000" /> */}
        <div className='slider'>
          <div className='progress'></div>
          <div className='range-input'>
          <input type='range' className='range_min' min='0' max='1000' ></input>
          <input type='range' className='range_max' min='0' max='1000' ></input>
        </div>
        </div>
       
      </div>
      <hr></hr>
      <div className='availability'>
        <Card.Title>Availability</Card.Title>
        <div className='gridDays'>
          <p> <input type="radio" onChange={handleChange} value="Immediate" name='immediate' />&nbsp;Immediate</p>
          <p>  <input type="radio" onChange={handleChange} value="Within 15 Days" name='within15' /> &nbsp;Within 15 Days</p>
        </div>
        <div className='gridDays'>
          <p> <input type="radio" onChange={handleChange} value="Within 30 Days" name='within30' /> &nbsp;Within 30 Days</p>
          <p> <input type="radio" onChange={handleChange} value="After 30 Days" name='after30' /> &nbsp;After 30 Days</p>
        </div>
      </div>
      <hr></hr>
      <div className='preferedTenants'>
          <Card.Title>Prefered Tenants</Card.Title>
          <div className='gridTenants'>
            <p> <input type="checkbox" checked={checkbox["all"]} onChange={handleChange} value="All" name='all'/> &nbsp;All</p>
            <p> <input type="checkbox" checked={checkbox["family"]} onChange={handleChange} value="Family" name='family'/> &nbsp;Family</p>
            <p> <input type="checkbox" checked={checkbox["bachelor"]} onChange={handleChange} value="Bachelor" name='bachelor'/> &nbsp;Bachelor</p>
          </div>
        </div>
        <hr></hr>
        <div className='filterParking'>
          <Card.Title>Parking</Card.Title>
          <div className='gridParking'>
            <p>  <input type="checkbox" checked={checkbox["2parking"]} onChange={handleChange} value="2" name='2parking'/> &nbsp;2 Wheeler</p>
            <p>  <input type="checkbox" checked={checkbox["4parking"]} onChange={handleChange} value="4" name='4parking'/> &nbsp;4 Wheeler</p>
          </div>
        </div>
        <hr></hr>
        <div className='furnishing'>
          <Card.Title>Furnishing</Card.Title>
          <div className='gridFurnishing'>
            <p> <input type="checkbox" checked={checkbox["full"]} onChange={handleChange} value="Full" name='full'/> &nbsp;Full</p>
            <p>  <input type="checkbox" checked={checkbox["semi"]} onChange={handleChange} value="Semi" name='semi'/> &nbsp;Semi</p>
            <p> <input type="checkbox" checked={checkbox["none"]} onChange={handleChange} value="None" name='none'/> &nbsp;None</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Filters;