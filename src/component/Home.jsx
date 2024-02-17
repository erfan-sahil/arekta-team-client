import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const componentName = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center my-20 xl:my-40">
          <Link
            className="bg-black p-2 text-white text-base rounded-lg font-semibold"
            to="/quiz"
          >
            Take the quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default componentName;
