import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";


import bgImg from "../images/massaman.jpg";

const Hero = () => {
  return (
    
    <div className="w-full h-screen bg-slate-900 flex flex-col justify-between"> 
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-left md:items-satrt w-full px-2 py-4">
            <p className="text-white text-2xl">อาหารไทยเป็นที่นิยมทั่วโลก เนื่องจากมีรสชาติเป็นเอกลักษณ์ เกิดจากการผสมผสานอย่างกลมกล่อมของรสหวาน รสเปรี้ยว และรสเค็ม</p>
        <h1 className="text-white text-7xl font-bold py-4">THAI FOOD.</h1>
        <p className="text-white text-2xl">และยังมีรสชาติเผ็ดร้อนของพริกที่เพิ่มรสชาติอาหารไทยให้เป็นที่นิยม</p>
        <button className="py-3 px-6 sm:w-[60%] my-4 text-2xl">Get Started</button>
        </div>
        <div>
            <img className="px-10" src={bgImg} alt="/" />
        </div>
        {/* <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> */}
        <div className=' absolute flex flex-col py-8 md:min-w-[1528px] bottom-[5%] mx-1 md:left-1/2 transfrom md:-translate-x-1/2 bg-orange-500  text-center shadow-xl'>
      <p className='text-white font-bold text-3 xl'>Recipes</p>
      <div className="flex justify-between flex-wrap px-4">
            <p className='text-white'>Icon. App Security</p>
            <p className='text-white'>Icon. Dashboard Design</p>
            <p className='text-white'>Icon. Cloud Data</p>
            <p className='text-white'>Icon. API</p>  
      </div>
    </div>

      </div>
    </div>
    
  );
};

export default Hero;
