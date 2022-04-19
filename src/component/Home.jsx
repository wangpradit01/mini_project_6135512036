import React from "react";
import massaman1 from "../images/massaman1.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <img className="w-full h-full object-cover" src={massaman1} />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20">
        <div className="absolute  h-full flex flex-col justify-center inset-y-0 right-20 max-w-[500px] text-left">
          <div className="px-5 py-4 border border-orange-500 bg-slate-900">
            <p className="text-white text-2xl">
              อาหารไทยเป็นที่นิยมทั่วโลก เนื่องจากมีรสชาติเป็นเอกลักษณ์
              เกิดจากการผสมผสานอย่างกลมกล่อมของรสหวาน รสเปรี้ยว และรสเค็ม
            </p>
            <h1 className="text-white text-7xl font-bold py-4">THAI FOOD.</h1>
            <p className="text-white text-2xl">
              และยังมีรสชาติเผ็ดร้อนของพริกที่เพิ่มรสชาติอาหารไทยให้เป็นที่นิยม
            </p>
            <button className=" py-3 px-6 sm:w-[100%] my-4 text-2xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
