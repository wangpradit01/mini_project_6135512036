import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const FOOD = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-orange-500 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-slate-900 mr-4 sm:text-5xl">
            THAI FOOD.
          </h1>
          <ul className="hidden md:flex text-slate-900 text-2xl">
            <li className="hover:text-white ">Home</li>
            
            <li className="hover:text-white">Recipes</li>
            
            <li className="hover:text-white">Support</li>
          </ul>
        </div>
       <div className="hidden md:flex pr-4">
         <button className="border-none bg-orange-500 text-slate-900 hover:text-white text-2xl mr-4">Sign In</button>
         <button className="px-5 py-3 border border-slate-900 bg-slate-900 text-orange-500 text-2xl hover:text-slate-900">Sign Up</button>
       </div>

        
        
        
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="text-slate-900 w-5" />
          ) : (
            <XIcon className="w-5 text-slate-900" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-slate-900 w-full px-8 text-orange-500"
        }
      >
        <li className="border-b-2 border-orange-400 w-full hover:text-white">
          Home
        </li>
        <li className="border-b-2 border-orange-400 w-full hover:text-white">
          Recipes
        </li>
        <li className="border-b-2 border-orange-400 w-full hover:text-white">
          Fruit
        </li>
        <li className="border-b-2 border-orange-400 w-full hover:text-white">
          Drink
        </li>
        <li className="border-b-2 border-orange-400 w-full hover:text-white">
          Support
        </li>
        <div className="flex flex-col">
          <button className="hover:text-white bg-slate-900 text-orange-500 px-5 py-3 my-4">
            Sign In
          </button>
          <button className="px-5 py-3 my-2">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default FOOD;
