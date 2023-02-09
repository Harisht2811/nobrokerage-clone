import React, { useState } from 'react'
import '../filters/filters.css'
import Card from 'react-bootstrap/Card';

const Filters = () => {

  const [Apartment,setApartment] =useState('');
   
  

  return (
   <div className='filters'>
    <Card style={{height:'30%'}}>
      <div className='apartmentType'>
      <Card.Title>Property Type</Card.Title>
      <p> <input type="checkbox"  value="Apartment" />&nbsp;Apartment</p>
      <p>  <input type="checkbox"  value="Gated Community Villa" /> &nbsp;Gated Community Villa</p>
      <p> <input type="checkbox" onChange={(e)=>setApartment(e.target.value)} value="Independant Villa" /> &nbsp;Independant Villa</p>
      </div>
      <hr></hr>
      <div className='bhkType'>
      <Card.Title>BHK Type</Card.Title>
      <div className='gridBhk'>
      <p> <input type="checkbox"  value="1" /> &nbsp;1 BHK</p>
      <p> <input type="checkbox"  value="2" /> &nbsp;2 BHK</p>
      <p> <input type="checkbox"  value="3" /> &nbsp;3 BHK</p>
      <p> <input type="checkbox"  value="4" /> &nbsp;4 BHK</p>
      <p> <input type="checkbox"  value="4+" /> &nbsp;4+ BHK</p>
      </div>
      

      </div>
      <hr></hr>
      <div className='rent'>
      <Card.Title>Rent Range</Card.Title>
      <input type="range" id="rentRange" name="vol" min="0" max="50"/>
      </div>
      <hr></hr>
      <div className='availability'>
      <Card.Title>Availability</Card.Title>
      <div className='gridDays'>
      <p> <input type="radio"  value="immediate" name='available'/>&nbsp;Immediate</p>
      <p>  <input type="radio"  value="within 15 Days" name='available'/> &nbsp;Within 15 Days</p>
      </div>
     <div className='gridDays'>
     <p> <input type="radio"  value="within 30 Days" name='available'/> &nbsp;Within 30 Days</p>
     <p> <input type="radio"  value="After 30 Days" name='available'/> &nbsp;After 30 Days</p>
     </div>
      </div>
      <hr></hr>
      <div className='preferedTenants'>
      <Card.Title>Prefered Tenants</Card.Title>
      <div className='gridTenants'>
      <p> <input type="checkbox"  value="family" /> &nbsp;Family</p>
      <p> <input type="checkbox"  value="bachelor" /> &nbsp;Bachelor</p>
      <p> <input type="checkbox"  value="company" /> &nbsp;Company</p>
      </div>
      </div>
      <hr></hr>
      <div className='parking'>
      <Card.Title>Parking</Card.Title>
      <div className='gridParking'>
      <p>  <input type="checkbox"  value="1" /> &nbsp;2 Wheeler</p>
      <p>  <input type="checkbox"  value="2" /> &nbsp;4 Wheeler</p>
      </div>
      </div>
      <hr></hr>
      <div className='furnishing'>
      <Card.Title>Furnishing</Card.Title>
      <div className='gridFurnishing'>
      <p> <input type="checkbox"  value="full" /> &nbsp;Full</p>
      <p>  <input type="checkbox"  value="semi" /> &nbsp;Semi</p>
      <p> <input type="checkbox"  value="none" /> &nbsp;None</p>
      </div>
      </div>
    </Card>
   </div>
  )
}

export default Filters;