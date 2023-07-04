import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; 
import Signup from '../src/components/signup/signup'
import Login from '../src/components/login/login'
import Tenant from '../src/components/tenant/tenant'
import Property from './components/property/property';
import Details from './components/details/details';
import {RoleManagement} from './RoleManagement.js'
// import { RoleManagement1 } from './RoleManagement1.js';
import { UserAuthContextProvider } from './components/userAuth';




function App() {
  
  return (
    <BrowserRouter>
    <UserAuthContextProvider>
    <div><Toaster/></div>
    <Routes>
    <Route exact path='/' element={<Login/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>
    <Route exact path='/tenant' element={<Tenant/>}></Route>
    <Route exact path='/city' element={<Property/>}></Route>
    <Route exact path='/details' element={<Details/>}></Route>
    <Route exact path='/role' element={<RoleManagement/>}></Route>
    {/* <Route exact path='/role1' element={<RoleManagement1/>}></Route> */}


   </Routes>
   </UserAuthContextProvider>
   </BrowserRouter>
    

  )
}

export default App