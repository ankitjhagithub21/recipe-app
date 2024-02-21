import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

const Favourite = () => {
  const meals = useSelector(state => state.cart.value);
  const dispatch = useDispatch()
  return (
    <section className='min-h-screen'>
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium text-center mb-4">
          Your Favourite Meals
        </h1>
      
        <div className="flex flex-wrap lg:w-3/4 w-full sm:mx-auto sm:mb-2 -mx-2">
         
          {meals.length === 0 ? <p className='text-center w-full text-lg'>No Meal Found...</p> : meals.map(meal => (
            <div className="p-2 w-full lg:w-1/2 md:w-1/2" key={meal.id}>
              <div className="bg-gray-100 rounded flex  p-4 h-full items-center justify-start gap-5 shadow">
                <img src={meal.image} alt={meal.title} width={100} className='rounded-md'/>
                <div className='flex flex-col items-start gap-2'>
                <span className="text-lg">{meal.title}</span>
                <button className='bg-red-500 text-white px-3 py-1 rounded-md text-sm' onClick={()=>dispatch(removeFromCart(meal.id))}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Favourite;
