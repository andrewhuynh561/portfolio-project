import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col  justify-center w-full h-full px-4 md:flex-row'>
        <div className='pb-8 justify-center'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500  '>About </p>
        </div>

        <p className='text-xl mt-20'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <br />
        <p className='text-xl mt-20'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
      </div>
    </div>
  )
}

export default About
