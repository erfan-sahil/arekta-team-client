import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const componentName = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-col mt-16">
        <div className="flex flex-col justify-center items-center w-3/4">
          <h1 className="text-3xl font-semibold my-3">
            Achieve More with Personalized Workouts
          </h1>
          <p className="text-lg font-medium">
            Our AI-driven platform crafts tailored workout plans that evolve
            alongside your progress, ensuring continuous improvement with every
            session. Say goodbye to plateaus and hello to consistent progress.
            Experience the difference today.
          </p>
        </div>
        <div className="flex justify-center items-center my-10 xl:my-20">
          <Link
            className="bg-black flex items-center gap-1 py-2 px-3 text-white text-base rounded-lg font-semibold"
            to="/quiz"
          >
            <p>Take the quiz</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default componentName;
