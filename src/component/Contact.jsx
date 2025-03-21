import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='Contact' className='py-[100px] lg:px-[50px] '>
      <h2 className='font-thin text-center uppercase md:text-[40px]  lg:text-center'>Fill Free  <span className='font-bold bg-amber-500'>Enquiry Form</span> </h2>
        <p className='font-sm pt-[10px] text-center md:leading-[23px] text-[#797979]'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,lorem quis bibendum
        auctor, nisi elit <br/> consequat hello Aenean world.</p>

      <div id='MAIN' className='lg:flex lg:w-[100%] '>
        <div className='lg:w-[50%] '>      
        <div className='flex flex-col justify-center pt-[20px] mx-4 gap-1 '>
        
            <label className='pt-[20px]'>NAME</label>
            <input type="text" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"/>
            <label className='pt-[15px]'>Email</label>
            <input type="text" className=" p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"/>
            <label className='pt-[15px]'>Message</label>
           <textarea   className="p-2 h-35 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"/>
        </div>
        <div className='mt-[15px]  text-center'>
        <button className=" bg-amber-500 text-white  border border-transparent rounded-[50px]  transition-all duration-500 px-6 py-2 leading-[20px] hover:bg-white hover:text-amber-500 hover:border-amber-500">Send a Message
</button>

        </div>
        
        </div>
        {/* second div */}
        <div className='hidden lg:block  lg:w-[37%] lg:pt-[70px] '>
            <div className=''>
<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14341.11728858083!2d89.96172196565682!3d26.024415254533263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2a030e86d3ecb%3A0xebb7a19d84148104!2sB.N.%20College!5e0!3m2!1sen!2sin!4v1742471662378!5m2!1sen!2sin"
        width="500"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
            </div>
        </div>
</div>

      </div>
    </>
  )
}

export default Contact
