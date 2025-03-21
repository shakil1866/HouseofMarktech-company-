import React from 'react'

const About = () => {
  return (
    <>
      <div id='About' className=" pt-[100px] lg:px-[40px]">
      <div className='px-[15px]'>
        <h2 className='font-thin text-center uppercase md:text-[40px]  lg:text-center'>About <span className='font-bold bg-amber-500'>Astous</span> </h2>
        <p className='font-sm pt-[10px] text-center md:leading-[23px] text-[#797979]'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,lorem quis bibendum
        auctor, nisi elit <br/> consequat hello Aenean world.</p>
         </div>

         <div className='lg:flex lg:w-[100%] lg:items-center lg:py-[30px]'>
         <div className='pt-[15px] flex justify-center align-center  lg:w-[100%]'>        
       <img className=" px-[15px] text-center sm:pt-[20px] sm:w-full lg:w-[100%] " src="./about.png" alt="My Image" />
        </div>
        <div className='px-[15px]'>
          <h2 className='pt-[40px]  pb-[30px] text-[22px] font-bold uppercase leading-[1.1] '>Astous Revels The Will Of God</h2>
          <p className='font-[16px] leading-[23px] text-[#797979]'>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.</p>
       <h3 className='text-[20px] font-bold pt-[30px] leading-[23px]'>Contact Us</h3> 
       <h1 className='text-[25px] md:text-[50px] font-bold text-amber-500 pt-[30px] leading-[23px]'>+1800-123-555</h1>
       <div>
       <button className='text-[17px] text-white px-8 py-3 rounded-4xl bg-blue-500 mt-[30px]'>Read More</button>
       </div>
</div>
       
       </div>
        

      </div>
    </>
  )
}

export default About
