import React, { useEffect, useState } from 'react';

const User = () => {
    const API = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

   
    return (
        <>
                <div  className='py-[100px] lg:px-[40px] bg-[#F9F9F9]'>
                  <div >
                  <h2 className='font-thin text-center md:text-[40px]  lg:text-center sm:text-[25px]'> OUR <span className='font-bold bg-amber-500'>employee </span> </h2>
                  <p className='pt-[10px] text-center md:leading-[23px] text-[#797979]'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,lorem quis bibendum
                    auctor, <br/> nisi elit  consequat hello Aenean world.</p>
                    
                    
                  </div>
                  <div className='flex justify-center items-center'>
                    <input 
                    className=' my-4 border border-black py-2 px-1'
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
                  {/* Image */}
                  <div>
                  <div className='flex flex-col justify-center items-center py-5 px-[15px] gap-[10px] md:grid  md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-3'>
              
                {users
                    .filter(user =>
                        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.username.toLowerCase().includes(searchTerm.toLowerCase())
                    ).map((item) => {
                return (
                    <div key={item.id}  className='w-full'>
                    <div className='flex flex-col gap-2 border border-dashed border-gray-300 p-[30px] '>
                        <div className=' '> <span className='font-bold'>Name: </span> {`${item.name} (${item.username})`}</div>
                        <div className=' '> <span className='font-bold'>Email: </span>{item.email} </div>
                        <div className=' '> <span className='font-bold'> Address:</span> {item.address.street}, {item.address.city}, {item.address.zipcode} </div>
                        <div className=' '> <span className='font-bold'>GEO: </span>{item.address.geo.lat}, {item.address.geo.lng}</div>
                        <div className=' '> <span className='font-bold'>Phone: </span>{item.phone} </div>
                        <div className=' '> <span className='font-bold'>Email: </span>{item.website} </div>
                        <div className=' '> <span className='font-bold'>Company: </span>{item.company.name},{item.company.catchPhrase}, {item.company.bs} </div>
                    </div>
            </div>
              )
              })
              }
            </div>
                  </div>
            
            
                  </div>
        </>
    );
};

export default User;
