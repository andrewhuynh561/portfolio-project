import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll'

const NavBar = () => {
    const[nav,setNav]=useState(false);

    const links=[
        {
            id:1,
            link:'about'
        },
        {
            id:2,
            link:'experience'
        },
        {
            id:3,
            link:'projects'
        },
        {
            id:4,
            link:'skills'
        },
        {
            id:5,
            link:'education'
        },
        {
            id:6,
            link:'contact'
        },
    ];
  return (
    <div className='flex justify-between items-center w-full h-16 md:h-20 text-white fixed bg-black px-4 z-50'>
      <div>
        <h1 className='text-2xl md:text-4xl font-bold'>Andrew Huynh</h1>
      </div>
        <ul className='hidden md:flex items-center'>
            { links.map(({id,link}) => (
                <li key={id} className='px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>                 
            ))}
        </ul>

        <div onClick={() =>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> :<FaBars size={30}/>}
        </div>

        {nav && (
            <ul className="flex flex-col 
            justify-center items-center
            absolute top-16 left-0 w-full 
            h-[calc(100vh-4rem)] bg-gradient-to-b from-black to-gray-800 text-gray-500">
                
                { links.map(({id,link}) => (
                    <li key={id} className='px-4 capitalize cursor-pointer py-4 text-lg'>
                       <Link
                       onClick={() => setNav(!nav)}
                       to={link} smooth duration={500}>{link}</Link>
                    </li>                 
                ))}
                
            </ul>
        )}
        
    </div>
  )
}

export default NavBar
