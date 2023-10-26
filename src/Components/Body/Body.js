import React, { useEffect, useState } from 'react'
import RestaurentCard from './RestaurentCard'
import { RestaurentList } from './RestaurentList'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import './index.css'
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([])
  const [searchText,setSearchText] = useState('')
  // console.log(listOfRestaurant)
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {debugger
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
      console.log("--------data",json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
  }
  //Conditional Rendering
  // if (listOfRestaurant?.length === 0) {
  //   return <Shimmer />
  // }
  return  (
    <>
      <div className='body'>
        {/* <div className='search'></div> */}
        <div className='filter'>
          <div className='search'>
            {/* <input type='text' className='search-box' value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }}/> */}
            {/* <button onClick={() => {
              //filter the restaurant card andd update the ui
              console.log(searchText)
              const filterRestaurant = listOfRestaurant.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
               );
               setFilteredRestaurant(filterRestaurant)
               setSearchText('')
            }}>Search</button> */}
          </div>
          <button className='filter-btn' onClick={() => {
            // alert("button clicked")
            console.log(listOfRestaurant)
            const filterList = listOfRestaurant.filter((res) =>
              res.info.avgRating > 4)
              setFilteredRestaurant(filterList)
          }}>Top Rated Restaurant</button>
        </div>
        <div className='res-container'>
          {
          filteredRestaurant.map((restaurant) => (
      <Link key={restaurant.info.id}
       to={"/restaurant/"+restaurant.info.id}> 
      <RestaurentCard key={restaurant.info.id} resData={restaurant} /></Link>  
          ))}
          
        </div>
      </div>
    </>
  )
}

export default Body