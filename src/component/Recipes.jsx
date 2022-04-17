import React from 'react'

const Recipes = () => {
  return (
    <div className=' absolute flex flex-col py-8 md:min-w-[1528px] bottom-[5%] mx-1 md:left-1/2 transfrom md:-translate-x-1/2 bg-orange-500  text-center shadow-xl'>
    <p className='text-white font-bold text-3 xl'>Recipes</p>
    <div className="flex justify-between flex-wrap px-4">
          <p className='text-white'>Icon. App Security</p>
          <p className='text-white'>Icon. Dashboard Design</p>
          <p className='text-white'>Icon. Cloud Data</p>
          <p className='text-white'>Icon. API</p>  
    </div>
  </div>
  )
}

export default Recipes
