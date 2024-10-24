import React from 'react';
import Avatar from '../assets/avatar.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'


const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a FullStack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Hey there! I'm Andrew, a final-year student at the University of
            South Australia, working towards my Bachelor of Software
            Development. I love logical thinking and designing websites. I enjoy
            the process of turning ideas into visually appealing and
            user-friendly websites.                    </p>
            <div>
                <a
                    href="https://drive.google.com/file/d/1kIJ__yYH9ChVKe8jqA0iJG-9r5sbsE7U/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                    View Resume
                    <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                </a>
            </div>

            </div>
            <div>
                <img src={Avatar} alt="my profile" 
                className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        
        </div>
    </div>
  )
}

export default About
