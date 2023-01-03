import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signup from '../src/components/signup/signup'
import Login from '../src/components/login/login'
import Owner from '../src/components/owner/owner'
import Tenant from '../src/components/tenant/tenant'
import Property from './components/property/property';
import Details from './components/details/details';




function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Login/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>
    <Route exact path='/owner' element={<Owner/>}></Route>
    <Route exact path='/tenant' element={<Tenant/>}></Route>
    <Route exact path='/propertydetails' element={<Property/>}></Route>
    <Route exact path='/applydetails' element={<Details/>}></Route>
   </Routes>
   </BrowserRouter>
    

  )
}

export default App