import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from './Loader'

const SingleCategory = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const getAllMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
            const data = await res.json()
            setMeals(data.meals)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        getAllMeals()
    }, [id])
 

    if(loading){
        return <Loader/>
    }

    return (
        <section>
            <div className="container px-5 py-24 mx-auto">
                <h2 className='text-center text-3xl font-bold mb-10'>{id}</h2>
                <div className="flex flex-wrap -m-4">
                    {
                        meals.map((meal) => {
                            return <div className="p-4 lg:w-1/4 md:w-1/2 w-full cursor-pointer card-hover" key={meal.idMeal} onClick={()=>navigate(`/meal/${meal.idMeal}`)}>
                                <div className="h-full flex flex-col items-center text-center shadow-md p-2 rounded-md">
                                    
                                    <img
                                        alt={meal.strMeal}
                                        className="flex-shrink-0 rounded-md w-full h-56 object-cover object-center mb-2"
                                        src={meal.strMealThumb}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            {meal.strMeal}
                                        </h2>
                                     

                                    </div>
                                </div>
                            </div>

                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default SingleCategory