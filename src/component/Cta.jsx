import React from 'react'

const Cta = () => {
  return (
    <>
<div className="relative w-full h-[500px] md:h-[450px] lg:h-[400px] lg:flex lg:justify-center lg:items-center ">
    <img src="./advert_bg.png" alt="My Image" className="w-full h-full object-cover"  />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black/50  lg:px-10 ">
        <h2 className="text-[25px] leading-[50px] md:text-2xl font-bold md:text-[40px]">
            STOP SELF-SABOTAGE: USING THE ZODIAC TO GET YOUR LIFE BACK ON TRACK
        </h2>
        <p className='text-[rgba(255,255,255,0.77)] pt-[25px]'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
        sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
        <div className="pt-[25px]">
    <button className="text-[17px] text-white px-8 py-3 rounded-3xl bg-blue-500 flex justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 active:scale-95">Call To Action
    </button>
</div>

    </div>
</div>
    </>
  )
}

export default Cta
