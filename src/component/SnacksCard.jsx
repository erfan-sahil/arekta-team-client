import { CardHeader } from '@material-tailwind/react';
import React from 'react';

const SnacksCard = (sn) => {
    console.log(sn.sn)
    return (
        
        <div>
            <div className='flex items-center'>
                <p className='text-lg font-semibold my-2'>Day</p>
                <p className='text-lg font-semibold'>{sn?.sn?.day}</p>
            </div>
            <div className='items-center'>
                <p className='text-lg font-semibold'>Recipe</p>
                <p>{sn?.sn?.recipe}</p>
            </div>
            <div className='my-2'>
                <p className='text-lg font-semibold'>Ingradients</p>
                {
                    sn?.sn?.ingredients.map(ingred => <li className='text-base font-medium'>{ingred}</li>)
                }
            </div>
        </div>
    );
};

export default SnacksCard;