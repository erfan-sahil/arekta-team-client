import { CardHeader } from "@material-tailwind/react";
import React from "react";

const BreakFastCard = (bf) => {
  console.log(bf);
  return (
    <div>
      <div className="flex items-center">
        <p className="text-lg font-semibold my-2">Day</p>
        <p className="text-lg font-semibold">{bf?.bf?.day}</p>
      </div>
      <div className="items-center">
        <p className="text-lg font-semibold">Recipe</p>
        <p>{bf?.bf?.recipe}</p>
      </div>
      <div className="my-2">
        <p className="text-lg font-semibold">Ingradients</p>
        {bf?.bf?.ingredients.map((ingred) => (
          <li className="text-base font-medium">{ingred}</li>
        ))}
      </div>
    </div>
  );
};

export default BreakFastCard;
