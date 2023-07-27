import React from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';




const NavBar = () => {
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        },
    ];
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 '>
      <div>
        <h1 className='text-5xl ml-2 mt-2 '>Andrew Huynh</h1>
      </div>
        <ul className='flex items-center'>
            { links.map(({id,link}) => (
                <li key={id} className='px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 '>{link}</li>                 
            ))}
        </ul>
    </div>
  )
}

export default NavBar
