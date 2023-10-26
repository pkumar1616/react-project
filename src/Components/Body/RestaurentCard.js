import React from 'react'
import {CDN_URL} from '../../Utils/Constants'
import './index.css'
const RestaurentCard = (props) => {
    // console.log("key",props.resData)
   // const{restData} = props
   // console.log(restData)
   const{cloudinaryImageId,
         name,
         cuisines,
         avgRating,
         costForTwo,
         deliveryTime} = props.resData.info
  return (
    <div className='res-card'>
        <img
        className='res-logo'
         src={CDN_URL+
       cloudinaryImageId}/>
        <h3 style={{margin: '1px'}}>{name}</h3>
        <h4 style={{margin: '1px'}}>{cuisines.map((cuis)=>cuis.substring(0, 2))}</h4>
        <h4 style={{margin: '1px'}}>{avgRating}</h4>
        <h4 style={{margin: '1px'}}>{costForTwo}</h4>
        <h4 style={{margin: '1px'}}>{deliveryTime} Minutes</h4>
    </div>
  )
}

export default RestaurentCard