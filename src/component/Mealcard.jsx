import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcard = ({ details }) => {
    console.log(details)
    return (
        <div className='meals'>
            {!details ? "" : details.map((curItem) => {
                return (
                    <div className='mealImg'>
                        <img src={curItem.strMealThumb} />
                        <p className='my-2 text-center font-bold'>{curItem.strMeal}</p>
                        {/* <div className='text-center hover:font-semibold'> */}

                        <NavLink to={`/${curItem.idMeal}`}><button className='hover:font-semibold border border-black'>Recipe</button></NavLink>
                        {/* </div> */}
                    </div>
                )
            })
            }
        </div>
    )
}

export default Mealcard


