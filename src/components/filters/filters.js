import React, { useState } from 'react'
import '../filters/filters.css'
import Card from 'react-bootstrap/Card';
import e from 'cors';

const Filters = ({ filterDetails }) => {

  const [filterApartment, setFilterApartment] = useState('');
  const [filterGated, setFilterGated] = useState('');
  const [filterVilla, setFilterVilla] = useState('');

  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [fourPlus, setFourplus] = useState('');

  const [rentRange, setRentRange] = useState('');

  const [immediate, setImmediate] = useState('');
  const [within15, setWithin15] = useState('');
  const [within30, setWithin30] = useState('');
  const [after30, setAfter30] = useState('');

  const [all, setAll] = useState('');
  const [family, setFamily] = useState('');
  const [bachelor, setBachelor] = useState('');

  const [twoWheeler, setTwoWheeler] = useState('');
  const [fourWheeler, setFourWheeler] = useState('');

  const [full, setFull] = useState('');
  const [semi, setSemi] = useState('');
  const [none, setNone] = useState('');

  let fApartment = filterApartment;
  let fGated = filterGated;
  let fVilla = filterVilla;

  let fOne = one;
  let fTwo = two;
  let fThree = three;
  let fFour = four;
  let fFourPlus = fourPlus;

  let fRent = rentRange;
  console.log(rentRange)

  let fImmediate = immediate;
  let fWithin15 = within15;
  let fWithin30 = within30;
  let fAfter30 = after30;

  let fAll = all;
  let fFamily = family;
  let fBachelor = bachelor;

  let fTwoWheeler = twoWheeler;
  let fFourWheeler = fourWheeler;

  let fFull = full;
  let fSemi = semi;
  let fNone = none;


  const filtersOnChange = (e, key) => {
    if (key === "Apartment") {
      setFilterApartment(e.target.value)
      fApartment = e.target.value
      console.log(fApartment)
    }
    if (key === "Gated") {
      setFilterGated(e.target.value)
      fGated = e.target.value
    }
    if (key === "Villa") {
      setFilterVilla(e.target.value)
      fVilla = e.target.value
    }
    if (key === "One BHK") {
      setOne(e.target.value)
      fOne = e.target.value
    }
    if (key === "Two BHK") {
      setTwo(e.target.value)
      fTwo = e.target.value
    }
    if (key === "Three BHK") {
      setThree(e.target.value)
      fThree = e.target.value
    }
    if (key === "Four BHK") {
      setFour(e.target.value)
      fFour = e.target.value
    }
    if (key === "Fourplus BHK") {
      setFourplus(e.target.value)
      fFourPlus = e.target.value
    }
    if (key === "Rent") {
      setRentRange(e.target.value)
      fRent = e.target.value
    }
    if (key === "Immediate") {
      setImmediate(e.target.value)
      fImmediate = e.target.value
    }
    if (key === "Within 15 days") {
      setWithin15(e.target.value)
      fWithin15 = e.target.value
    }
    if (key === "Within 30 days") {
      setWithin30(e.target.value)
      fWithin30 = e.target.value
    }
    if (key === "After 30 days") {
      setAfter30(e.target.value)
      fAfter30 = e.target.value
    }
    if (key === "All") {
      setAll(e.target.value)
      fAll = e.target.value
    }
    if (key === "Family") {
      setFamily(e.target.value)
      fFamily = e.target.value
    }
    if (key === "Bachelor") {
      setBachelor(e.target.value)
      fBachelor = e.target.value
    }
    if (key === "Two Wheeler") {
      setTwoWheeler(e.target.value)
      fTwoWheeler = e.target.value
    }
    if (key === "Four Wheeler") {
      setFourWheeler(e.target.value)
      fFourWheeler = e.target.value
    }
    if (key === "Full") {
      setFull(e.target.value)
      fFull = e.target.value
    }
    if (key === "Semi") {
      setSemi(e.target.value)
      fSemi = e.target.value
    }
    if (key === "None") {
      setNone(e.target.value)
      fNone = e.target.value
    }
    filterDetails(
      {
        apartmentType: {
          filterApartment: fApartment,
          filterGated: fGated,
          filterVilla: fVilla,
        },
        bhkType: {
          oneBHK: fOne,
          twoBHK: fTwo,
          threeBHK: fThree,
          fourBHK: fFour,
          fourPlusBHK: fFourPlus,
        },
        rentRange: {
          rentRange: fRent
        },
        availability: {
          immediate: fImmediate,
          within15days: fWithin15,
          within30days: fWithin30,
          after30days: fAfter30,
        },
        preferedTenants: {
          all: fAll,
          family: fFamily,
          bachelor: fBachelor,
        },
        parking: {
          twoWheeler: fTwoWheeler,
          fourWheeler: fFourWheeler,
        },
        furnish: {
          fullFurnish: fFull,
          semiFurnish: fSemi,
          none: fNone,
        }
      }
    )
  }


  return (
    <div className='filters'>
      <Card style={{ height: '30%' }}>
        <div className='apartmentType'>
          <Card.Title>Property Type</Card.Title>
          <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "Apartment")} value="Apartment" /> &nbsp;Apartment</p>
          <p>  <input type="checkbox" onChange={(e) => filtersOnChange(e, "Gated")} value="Gated Community Villa" /> &nbsp;Gated Community Villa</p>
          <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "Villa")} value="Independant Villa" /> &nbsp;Independant Villa</p>
        </div>
        <hr></hr>
        <div className='bhkType'>
          <Card.Title>BHK Type</Card.Title>
          <div className='gridBhk'>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "One BHK")} value="1" /> &nbsp;1 BHK</p>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "Two BHK")} value="2" /> &nbsp;2 BHK</p>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "Three BHK")} value="3" /> &nbsp;3 BHK</p>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "Four BHK")} value="4" /> &nbsp;4 BHK</p>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "Fourplus BHK")} value="4+" /> &nbsp;4+ BHK</p>
          </div>


        </div>
        <hr></hr>
        <div className='rent'>
          <Card.Title>Rent - <label>{rentRange}/-</label></Card.Title>
          <input type="range" id="rentRange" onChange={(e) => filtersOnChange(e, "Rent")} name="vol" min="0" max="5000" />
        </div>
        <hr></hr>
        <div className='availability'>
          <Card.Title>Availability</Card.Title>
          <div className='gridDays'>
            <p> <input type="radio" onChange={(e) => filtersOnChange(e, "Immediate")} value="Immediate" name='available' />&nbsp;Immediate</p>
            <p>  <input type="radio" onChange={(e) => filtersOnChange(e,"Within 15 days")} value="Within 15 Days" name='available' /> &nbsp;Within 15 Days</p>
          </div>
          <div className='gridDays'>
            <p> <input type="radio" onChange={(e) => filtersOnChange(e, "Within 30 days")} value="Within 30 Days" name='available' /> &nbsp;Within 30 Days</p>
            <p> <input type="radio" onChange={(e) => filtersOnChange(e, "After 30 days")} value="After 30 Days" name='available' /> &nbsp;After 30 Days</p>
          </div>
        </div>
        <hr></hr>
        <div className='preferedTenants'>
          <Card.Title>Prefered Tenants</Card.Title>
          <div className='gridTenants'>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "All")} value="All" /> &nbsp;All</p>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "Family")} value="Family" /> &nbsp;Family</p>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "Bachelor")} value="Bachelor" /> &nbsp;Bachelor</p>
          </div>
        </div>
        <hr></hr>
        <div className='filterParking'>
          <Card.Title>Parking</Card.Title>
          <div className='gridParking'>
            <p>  <input type="checkbox" onChange={(e) => filtersOnChange(e, "Two Wheeler")} value="2" /> &nbsp;2 Wheeler</p>
            <p>  <input type="checkbox" onChange={(e) => filtersOnChange(e, "Four Wheeler")} value="4" /> &nbsp;4 Wheeler</p>
          </div>
        </div>
        <hr></hr>
        <div className='furnishing'>
          <Card.Title>Furnishing</Card.Title>
          <div className='gridFurnishing'>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "Full")} value="Full" /> &nbsp;Full</p>
            <p>  <input type="checkbox" onChange={(e) => filtersOnChange(e, "Semi")} value="Semi" /> &nbsp;Semi</p>
            <p> <input type="checkbox" onChange={(e) => filtersOnChange(e, "None")} value="None" /> &nbsp;None</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Filters;