// import { data } from 'autoprefixer';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const Mealinfo = () => {
    const {mealid} = useParams();
    const [info, setInfo] = useState()
    console.log(mealid)

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])
    }
    if (info != "") {
        getInfo();
    }

    return (
        <div>
            {
                !info ? "OOPS!!! not found" : <div className='mealInfo flex items-center justify-center'>
                    <img src={info.strMealThumb} />
                    <div className='info'>
                        <h1 className='font-extrabold text-3xl'>Recipe of the below Dish :-</h1>
                        <button className='my-3'>{info.strMeal}</button>
                        <h2 className='font-bold text-2xl my-3'>Instruction's-</h2>
                        <p>{info.strInstructions}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Mealinfo