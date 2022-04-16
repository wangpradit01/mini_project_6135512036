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
            <p className="text-white">อาหารไทยเป็นที่นิยมทั่วโลก เนื่องจากมีรสชาติเป็นเอกลักษณ์ เกิดจากการผสมผสานอย่างกลมกล่อมของรสหวาน รสเปรี้ยว และรสเค็ม</p>
        <h1 className="text-white text-5xl font-bold py-4">THAI FOOD.</h1>
        <p className="text-white">และยังมีรสชาติเผ็ดร้อนของพริกที่เพิ่มรสชาติอาหารไทยให้เป็นที่นิยม</p>
        <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
            <img src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
