import React from "react";
import back from "../images/back.jpg";

const Recipes = () => {
  return (
    <div className=" w-full h-screen relative  ">
      <div className="w-full h-full object-cover">
        <img src={back} alt="" />
        <div className="absolute w-full h-full top-0  flex flex-col justify-center text-center">
          <h1 className="text-5xl text-orange-500 font-bold">Recipes</h1>
          <h1 className="text-5xl text-orange-500 font-bold py-5">
            THAI FOOD.
          </h1>
          <div className="flex items-center max-w-[700px] mx-auto w-full border bg-white rounded-md">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none "
              placeholder="Search Recipes"
            />
            <button className="w-20 h-12 flex items-center justify-center rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
