import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
       
        Hey there! I'm Andrew, a final-year student at the University of South Australia, working towards my Bachelor of Software Development. I love logical thinking and designing websites. I enjoy the process of turning ideas into visually appealing and user-friendly websites.        </p>

        <br />

        {/* <p className="text-xl">
        My journey into software development has allowed me to blend creativity with technical skills, and I'm excited to continue growing in this field. In my free time, I love experimenting with new web technologies and contributing to open-source projects. I'm always eager to learn and take on new challenges!
  
        </p> */}
      </div>
    </div>
  );
};

export default About;