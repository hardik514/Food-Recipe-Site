import React from 'react'
import { useState } from 'react'
import Mealcard from './Mealcard'

const Mainpage = () => {

  const [data, setData] = useState()
  const [search, setSearch] = useState("")
  const [msg, setMsg] = useState("")

  const handleInput = (e) => {
    setSearch(e.target.value)
  }
  

  const myFood = async () =>{
    if(search == ""){
      setMsg("Please Enter the Type of Dish!!")
    }
    else{
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const getJson = await get.json();
    // console.log(getJson.meals);
    setData(getJson.meals)
    setMsg("")

    }
    
  }

  return (
    
      <>
      
       <h1 className='font-extrabold text-3xl text-center my-2'>Swadisht Pakwan-Recipe</h1>
       <div className='text-center'>
        <div className='searchBar'>
          <input type="text" placeholder='Enter the Dish Name' onChange={handleInput}/>
          <button onClick={myFood}>Search</button>
        </div>
        <h2 className='my-12 text-2xl font-semibold'>{msg}</h2>
        <div>
           <Mealcard details={data}/>
        </div>
       </div>
       
      </>
    
  )
}

export default Mainpage
