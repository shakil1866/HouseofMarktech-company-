import React from 'react'
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const Service = () => {
    const servicesData = [
        {
          id: 1,
           icon: <MdOutlineWorkHistory className='text-[40px] text-amber-500 '/>, 
          title: "Home",
          description: "Home is where the heart is one the nature where we stile",
          btn: "Read More",
        },
        {
          id: 2,
          icon: <MdOutlineWorkHistory className='text-[40px] text-amber-500 '/>, 
          title: "Career",
          description: "Career is one the most beautiful things in the world",
          btn: "Read More",
        },
        {
          id: 3,
          icon: <MdOutlineWorkHistory className='text-[40px] text-amber-500 '/>, 
          title: "Contact",
          description: "Contact us for more information ads like the humean ",
          btn: "Read More",
        },
        {
          id: 3,
          icon: <MdOutlineWorkHistory className='text-[40px] text-amber-500 '/>, 
          title: "blog",
          description: "Blog is a place where you can find more information",
          btn: "Read More",
        },
        {
          id: 3,
          icon: <MdOutlineWorkHistory className='text-[40px] text-amber-500 '/>, 
          title: "blog",
          description: "Blog is a place where you can find more information",
          btn: "Read More",
        },
        {
          id: 3,
          icon: <MdOutlineWorkHistory className='text-[40px] text-amber-500 '/>, 
          title: "blog",
          description: "Blog is a place where you can find more information",
          btn: "Read More",
        }
      
      ]
  return (
    <>
    <div id='Service' className='py-[100px] lg:px-[40px] bg-[#F9F9F9]'>
      <div >
      <h2 className='font-thin text-center md:text-[40px]  lg:text-center sm:text-[25px]'> OUR <span className='font-bold bg-amber-500'>SERVICES</span> </h2>
      <p className='pt-[10px] text-center md:leading-[23px] text-[#797979]'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,lorem quis bibendum
        auctor, <br/> nisi elit  consequat hello Aenean world.</p>

      </div>
      {/* Image */}
      <div>
      <div className='flex flex-col justify-center items-center py-5 px-[15px] gap-[10px] md:grid  md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-3'>
  {servicesData.map((item) => {
    return (
        <div key={item.id}  className='w-full'>
        <div className='flex flex-col justify-center items-center border border-dashed border-gray-300 p-[30px] '>
            <div className='border border-dashed p-3 border-gray-300 rounded-[50%]'>{item.icon}</div>
            <div className='text-[20px] uppercase pt-[40px] pb-[20px] font-bold text-amber-500'>{item.title}</div>  
            <p className='text-center text-sm leading-[23px] text-[#797979] sm:text-base'>{item.description } </p>  
            <button className='flex items-center jsutify-center pt-[20px] text-amber-500 '>{item.btn} <FaChevronRight/></button>  
        </div>
</div>
  )
  })
  }
</div>
      </div>


      </div>
    </>
  )
}

export default Service
