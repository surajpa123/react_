import React from 'react'
import { IMG_CDN_URL } from '../constant'


// Restaurant card component: Image, name, cuisine



const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
}) => {



  return (
   <>
   <div className='card'>

<img src={IMG_CDN_URL + cloudinaryImageId}/>

<div style={{padding:"30px", height:"150px"}}>

<h2>{name}  </h2>

<h5>{cuisines+ " , "}</h5>

<h6>{area} </h6>

<span>

<h4 style={ avgRating < 4 ? {backgroundColor:"red"} : {color:"white"}}>

    <i className='fa-solid fa-star'></i>
    {avgRating}
</h4>

<h4>{lastMileTravelString ?? '2.0 km'}</h4>

<h4>{costForTwoString ?? "200 for two"}</h4>

</span>

</div>

   </div>
   
   </>
  )
}

export default RestaurantCard
