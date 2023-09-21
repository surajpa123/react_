import React from 'react'
import {Route,Routes} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Body from './Body';
import RestaurantDetail from './RestaurantDetail';
const AllRoutes = () => {
  return (
    <>
    <Routes> 

<Route path='/' element = {<Body/>}> </Route>
<Route  path = "/about" element = {<About/>}></Route>
<Route path='/contact' element = {<Contact/>}></Route>
<Route path='/restaurant/:id' element = {<RestaurantDetail/>}></Route>

    </Routes>
    
    
    </>
  )
}

export default AllRoutes
