import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import Loader from './Loader';
import NotFound from './NotFound';

const SingleMeal = () => {
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [instructions, setInstructions] = useState([]);
    const dispatch = useDispatch();

    const getMealData = async () => {
        let url;

        if (!isNaN(id)) {
            url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        } else {
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`;
        }

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMeal(data.meals[0]);
            const steps = data.meals[0].strInstructions.split('\n');
            setInstructions(steps.filter(step => step.trim())); // Filter out empty steps
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getMealData();
    }, [id]);

    const handleClick = () => {
        const food = {
            id: meal.idMeal,
            image: meal.strMealThumb,
            title: meal.strMeal,
        };
        dispatch(addToCart(food));
    };

    if (loading) {
        return <Loader />;
    }
    if (!meal) {
        return <NotFound/>;
    }

    return (
        <section className="py-12">
            <div className="container mx-auto px-5">
            <h2 className="text-3xl font-semibold text-center my-8">{meal.strMeal}</h2>
                <div className='relative w-full'>
                    <img src={meal.strMealThumb} alt={meal.strMeal} className='rounded object-cover h-72 w-full' />
                    <button
                        className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 outline-none rounded-md flex items-center gap-2"
                        onClick={handleClick}
                    >
                        <FaHeart />
                        Add To Favourite
                    </button>
                </div>
                
                <div className='flex flex-wrap mt-5'>
                    <div className='lg:w-1/2 w-full'>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Category: {meal.strCategory}</h3>
                            <p className="mb-4"><span className="font-semibold">Area:</span> {meal.strArea}</p>
                            <h3 className="text-xl font-semibold mb-4">Instructions:</h3>
                            <ol>
                                {instructions.map((step, index) => (
                                    <li key={index} className="mb-2">{step}</li>
                                ))}
                            </ol>

                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full px-2'>
                        <h2 className='font-bold text-2xl my-4'>Ingredient:</h2>
                        <div className='flex flex-wrap'>
                            {Object.keys(meal)
                                .filter(key => key.includes('Ingredient') && meal[key])
                                .map((key, index) => (
                                    <div key={index} className="bg-green-500 text-white w-fit px-3 py-2 m-2 rounded-md font-semibold">
                                        {meal[key]}
                                    </div>
                                ))}
                        </div>
                        <div className='mt-5'>
                            <h2 className='text-lg font-bold mb-3'>Watch Video:</h2>
                            <ReactPlayer url={meal.strYoutube} width="100%" />

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default SingleMeal;
