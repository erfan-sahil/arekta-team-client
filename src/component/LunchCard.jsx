import React from 'react';

const LunchCard = (ln) => {
    // console.log(ln.ln)
    return (
        <div>
            <div className='flex items-center'>
                <p className='text-lg font-semibold my-2'>Day</p>
                <p className='text-lg font-semibold'>{ln?.ln?.day}</p>
            </div>

            <div className='items-center'>
                <p className='text-lg font-semibold'>Recipe</p>
                <p>{ln?.ln?.recipe}</p>
            </div>
            <div className='my-2'>
                <p className='text-lg font-semibold'>Ingradients</p>
                {
                    ln?.ln?.ingredients.map(ingred => <li className='text-base font-medium'>{ingred}</li>)
                }
            </div>
        </div>
    );
};

export default LunchCard;