import React from 'react';

const DinnerCard = (dn) => {
    console.log(dn.dn)
    return (
        
        <div>
            <div className='flex items-center'>
                <p className='text-lg font-semibold my-2'>Day</p>
                <p className='text-lg font-semibold'>{dn?.dn?.day}</p>
            </div>

            <div className='items-center'>
                <p className='text-lg font-semibold'>Recipe</p>
                <p>{dn?.dn?.recipe}</p>
            </div>
            <div className='my-2'>
                <p className='text-lg font-semibold'>Ingradients</p>
                {
                    dn?.dn?.ingredients.map(ingred => <li className='text-base font-medium'>{ingred}</li>)
                }
            </div>
        </div>
    );
};

export default DinnerCard;