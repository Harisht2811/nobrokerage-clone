import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signup from '../src/components/signup/signup'
import Login from '../src/components/login/login'
import Homepage from '../src/components/homepage/homepage'



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Signup/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/home' element={<Homepage/>}></Route>
   </Routes>
   </BrowserRouter>
    

  )
}

export default App