import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantDetail = () => {
    const {id} = useParams();
  return (
   <>
   <div className='card'>

<h1>HELLO, {id}</h1>



   </div>

   
   </>
  )
}

export default RestaurantDetail
