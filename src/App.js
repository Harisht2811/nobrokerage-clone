import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signup from '../src/components/signup/signup'
import Login from '../src/components/login/login'
import Tenant from '../src/components/tenant/tenant'
import Property from './components/property/property';
import Details from './components/details/details';
import Carousel from './components/carousel'
import { UserAuthContextProvider } from './components/userAuth';




function App() {
  
  return (
    <BrowserRouter>
    <UserAuthContextProvider>
    <Routes>
    <Route exact path='/' element={<Login/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>
    <Route exact path='/tenant' element={<Tenant/>}></Route>
    <Route exact path='/city' element={<Property/>}></Route>
    <Route exact path='/details' element={<Details/>}></Route>
    <Route exact path='/carousel' element={<Carousel/>}></Route>
   </Routes>
   </UserAuthContextProvider>
   </BrowserRouter>
    

  )
}

export default App